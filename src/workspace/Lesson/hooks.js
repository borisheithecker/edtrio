import React, { useEffect, useState } from "react"

import api from "~/utils/api"
import config from "~/config"
import { lessonFakeData } from "~/utils/fake"
import { setCookie } from "~/utils/cookie"
import { useInterval } from "~/utils/hooks"
import { loadEditorData, saveEditorData } from "~/utils/cache"

export function useBootstrap(id, dispatch, dispatchUserAction) {
    async function fetchData() {
        try {
            const user = await api.get("/me")
            dispatchUserAction({ type: "BOOTSTRAP_USER", payload: user })
        } catch (err) {
            console.warn("Could not fetch user data")
        }

        try {
            const cacheData = loadEditorData(id)
            let lesson
            if (
                cacheData &&
                cacheData.hasOwnProperty("lesson") &&
                (cacheData.savedToBackend === false || config.DISABLE_BACKEND)
            ) {
                lesson = cacheData.lesson
            } else {
                lesson = await api.get(`/editor/lessons/${id}`, lessonFakeData)
                if (lesson.sections.length === 0) {
                    const section = await api.post(`/editor/sections/`, {
                        lesson: lesson._id,
                    })
                    lesson.sections = [section]
                }

                lesson.id = lesson._id
                lesson.sections = lesson.sections.map(section => ({
                    ...section,
                    id: section._id,
                    docValue: section.state,
                    notes: section.note,
                }))
            }

            dispatch({ type: "BOOTSTRAP", payload: lesson })
        } catch (err) {
            dispatch({ type: "ERROR" })
            dispatch({
                type: "BOOTSTRAP",
                payload: {
                    id: new Date().getTime(),
                    sections: [
                        {
                            id:
                                new Date().getTime() +
                                "" +
                                Math.floor(Math.random() * 100),
                            docValue: null,
                            visible: true,
                        },
                    ],
                    changed: new Set(),
                },
            })
        }
        requestAnimationFrame(() => {
            dispatch({ type: "BOOTSTRAP_FINISH" })
        })
    }

    async function fetchCourse() {
        try {
            const courseId = window.location.pathname.split("/")[2]
            const course = await api.get(`/courses/${courseId}`)
            dispatch({ type: "SET_COURSE", payload: course })
        } catch (err) {}
    }

    useEffect(() => {
        fetchData()
        fetchCourse()
    }, [])
}

export async function saveLesson(store, dispatch, override) {
    if (!store.editing && !override) return
    dispatch({ type: "SAVE_STATUS", payload: "Sichern..." })
    const savePromises = []

    const lessonChanges = {}
    store.lesson.changed.forEach(key => {
        if (key === "order") {
            lessonChanges.sections = store.lesson.sections.map(
                section => section.id,
            )
        } else {
            lessonChanges[key] = store.lesson[key]
        }
    })
    if (store.lesson.changed.size !== 0)
        savePromises.push(
            new Promise(async resolve => {
                try {
                    const lessonResult = await api.patch(
                        `/editor/lessons/${store.lesson.id}`,
                        lessonChanges,
                    )
                    dispatch({ type: "LESSON_SAVED" })
                    resolve(lessonResult)
                } catch (err) {
                    resolve("error")
                }
            }),
        )
    else savePromises.push(Promise.resolve("No lesson changes"))

    // save sections
    store.lesson.sections.forEach(section => {
        const sectionChanges = {}
        section.changed.forEach(key => {
            if (key === "docValue") {
                sectionChanges.state = section.docValue
            } else if (key === "notes") {
                sectionChanges.note = section.notes
            } else {
                sectionChanges[key] = section[key]
            }
        })
        if (Object.keys(sectionChanges).length === 0) {
            return savePromises.push(
                Promise.resolve(`No changes for section ${section.id}`),
            )
        }

        savePromises.push(
            new Promise(async resolve => {
                try {
                    const backendResult = await api.patch(
                        `/editor/sections/${section.id}`,
                        sectionChanges,
                    )
                    dispatch({ type: "SECTION_SAVED", payload: section.id })
                    resolve(backendResult)
                } catch (err) {
                    resolve("error")
                }
            }),
        )
    })

    const results = await Promise.all(savePromises)
    const cacheData = {
        savedToBackend: true,
        lesson: {
            ...store.lesson,
            sections: store.lesson.sections.map(section => ({
                ...section,
                docValue:
                    typeof section.collectDocValue === "function"
                        ? section.collectDocValue()
                        : section.docValue,
            })),
        },
    }
    if (results.includes("error")) {
        cacheData.savedToBackend = false
    }

    saveEditorData(cacheData, store.lesson.id)

    dispatch({
        type: "SAVE_STATUS",
        payload: !cacheData.savedToBackend
            ? "Lokal Gespeichert"
            : "Gespeichert",
    })
}

export function useChangeListener(store, dispatch) {
    useEffect(() => {
        if (!store.bootstrapFinished) return
        dispatch({ type: "SAVE_STATUS", payload: "Ungesicherte Änderungen" })
    }, [store.lesson])
}

export function useFullScreenListener(store, dispatch) {
    return true
}
