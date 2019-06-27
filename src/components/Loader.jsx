import React, { useContext } from "react"
import styled, { keyframes } from "styled-components"

import theme from "~/theme"

const Bounce = keyframes`
  0%, 80%, 100% { 
    transform: scale(0);
  } 40% { 
    transform: scale(1.0);
  }
`

const StyledDotsLoader = styled.div`
    display: inline-block;
`

const Dot = styled.span`
    width: ${props => (props.big ? "20px" : "12px")};
    height: ${props => (props.big ? "20px" : "12px")};
    background-color: ${props => props.color};
    border-radius: 100%;
    display: inline-block;
    animation: ${Bounce} 1s infinite ease-in-out both;
    &:first-child {
        animation-delay: -0.32s;
    }

    &:nth-child(2) {
        animation-delay: -0.16s;
    }
`

const Loader = ({ size = 10, ...props }) => {
    const color = props.white ? theme.colors.white : theme.colors.primary

    return (
        <StyledDotsLoader color={color} {...props}>
            <Dot {...props} color={color} />
            <Dot {...props} color={color} />
            <Dot {...props} color={color} />
        </StyledDotsLoader>
    )
}

export default Loader
