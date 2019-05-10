import {
    StatefulPlugin,
    StatefulPluginEditorProps,
    StateType,
} from "@edtr-io/core"
import * as React from "react"

import RowsEditor from "./Editor"
import RowsRenderer from "./Renderer"

export const rowsState = StateType.list(StateType.child(), 1)

const RowsPlugin = props => {
    return props.editable ? (
        <RowsEditor {...props} />
    ) : (
        <RowsRenderer {...props} />
    )
}

export const rowsPlugin = {
    Component: RowsPlugin,
    state: rowsState,
    getFocusableChildren(state) {
        return state()
    },
}
