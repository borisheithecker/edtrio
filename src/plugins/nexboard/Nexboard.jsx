import React, { useState, useEffect, useContext } from "react"
import LessonContext from "~/Contexts/Lesson"
import UserContext from "~/Contexts/User"
import { createBoard, getBoard } from "./utils"
import Action from "~/components/Action"
import Flex from "~/components/Flex"
import Loader from "~/components/Loader"

const Nexboard = ({ focused, state }) => {
    const [loading, setLoading] = useState(true)
    const [board, setBoard] = useState({})
    const { store } = useContext(LessonContext)
    const { store: user } = useContext(UserContext)
    async function bootstrap() {
        try {
            let board
            if (state.id.value) {
                board = await getBoard(state.id.value)
            } else {
                board = await createBoard(
                    store.lesson.id,
                    `${store.lesson.title} Nexboard`,
                )
            }
            state.id.set(board.id)
            setBoard(board)
        } catch (err) {}

        setLoading(false)
    }

    useEffect(() => {
        bootstrap()
    }, [])

    if (loading) {
        return (
            <Flex justifyCenter>
                <Loader />
            </Flex>
        )
    } else {
        return (
            <Flex column alignEnd>
                <iframe
                    src={`${board.publicLink}?username=${user.displayName}`}
                    style={{
                        width: "100%",
                        height: "600px",
                        resize: "vertical",
                        overflow: "auto",
                        border: "none",
                    }}
                />
                <Action
                    a
                    to={`${board.publicLink}?username=${user.displayName}`}
                    target="_blank">
                    in neuem Tab öffnen
                </Action>
            </Flex>
        )
    }
}

export default Nexboard
