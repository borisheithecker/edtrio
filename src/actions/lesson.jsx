import { editor } from "~/utils/socket"
import { serverApi } from "~/utils/api"
import uuid from "uuid/v4"

export const createSection = async (lessonId, position) => ({dispatch}) => {
	const tempId = uuid()
	dispatch({
		type: "ADD_SECTION",
		payload: {
			tempId,
			position
		},
	})

	const section = await editor.emit('create', `lesson/${lessonId}/sections`, {})

	dispatch({
		type: "REPLACE_ADDED_SECTION_ID",
		payload: {
			tempId,
			backendId: section._id,
		},
	})


}

export const removeSection = async (lessonId, sectionId) => () => {
	const section = await editor.emit('delete', `lesson/${lessonId}/sections`)
	return section
}

export const createFolder = (name) => async ({dispatch, store}) => {
	const { lesson } = store
	try {
		const folderId = await serverApi.post('/fileStorage/directories', {
			name,
			owner: lesson.courseId,
		})

		try {
			await editor.emit('patch', `course/${lesson.courseId}/lessons/${lesson.id}`, {
				folderId
			})

			dispatch({
				type: 'LESSON_UPDATED',
				payload: { folderId },
			})

			return folderId
		} catch (err) {
			// roleback
			await serverApi.delete(`/fileStorage/directories/${folderId}`)
			await editor.emit('patch', `course/${lesson.courseId}/lessons/${lesson.id}`, {
				folderId: undefined
			})
			throw err
		}

	} catch (err){
		dispatch({
			type: 'ERROR',
			payload: 'Es ist ein fehler beim erstellen des Ordners aufgtretten'
		})
	}

}

export const renameFolder = (folderId, name) => async () => {
	try {
		await serverApi.post('/fileStorage/directories/rename', {
			id: folderId,
			newName: name,
		})
	} catch (err){
		throw new Error('Es ist ein Fehler beim Umbennen des Themen Ordners aufgetretten.')
	}
}