import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"

const StyledControls = styled.div`
    display: flex;
`

const StyledIcon = styled.img`
    height: 24px;
    margin-bottom: 15px;

    ${props =>
        props.disabled
            ? css`
                  opacity: 0.2;
                  cursor: not-allowed;
                  pointer-events: none;
              `
            : css`
                  cursor: pointer;
                  opacity: 0.8;
              `}

    &:hover {
        opacity: ${props => !props.disabled && 1};
    }
`

const DragIcon = styled(StyledIcon)`
    margin-bottom: 5px;
    margin-top: -3px;

    cursor: grab;
    user-select: none;

    &:active {
        cursor: grabbing;
    }
`

const MoveUp = ({ rows, index, row, ...props }) => (
    <StyledIcon
        disabled={index === 0}
        src={require("../../assets/angle-up.svg")}
        onClick={() => {
            if (index === 0) return
            rows.move(index, index - 1)
        }}
    />
)

const MoveDown = ({ rows, index, row, ...props }) => (
    <StyledIcon
        disabled={index + 1 >= rows.items.length}
        src={require("../../assets/angle-down.svg")}
        onClick={() => {
            index + 1 < rows.items.length && rows.move(index, index + 1)
        }}
    />
)

const Drag = ({ rows, index, row, dragRef, connectDragSource, ...props }) =>
    connectDragSource(
        <div>
            <DragIcon
                draggable="false"
                disabled={rows.items.length === 1}
                src={require("../../assets/drag-handle.svg")}
            />
        </div>,
    )

const MoveControls = ({ index, rows, row, expanded, connectDragSource }) => {
    return (
        <StyledControls index={index} expanded={expanded}>
            {/* <MoveUp rows={rows} index={index} row={row} /> */}
            <Drag
                rows={rows}
                index={index}
                row={row}
                connectDragSource={connectDragSource}
            />
            {/* <MoveDown rows={rows} index={index} row={row} /> */}
        </StyledControls>
    )
}

export default MoveControls
