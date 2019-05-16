import React, { useState, useCallback, useEffect } from "react"
import styled from "styled-components"
import { Portal } from "react-portal"
import { getPlugins } from "@edtr-io/core"

import Search from "./Search"
import Plugin from "./Plugin"
import Dropzone from "./Dropzone"

const Wrapper = styled.div`
    display: flex;
    padding: 25px calc((100vw - 960px) / 2) 0;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.95);
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    padding-top: 125px;

    @media (max-width: 1000px) {
        padding: 25px 20px 0;
    }
`

const CloseButton = styled.img`
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    cursor: pointer;
`

const PluginList = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    overflow-y: auto;
    align-items: stretch;
`

const Menu = ({ visible, menu, setMenu, index, store, name }) => {
    const [search, setSearch] = useState("")

    const close = useCallback(evt => {
        if (evt.key === "Escape") setMenu(undefined)
    }, [])

    useEffect(() => {
        if (visible) document.body.style.position = "fixed"
        window.addEventListener("keydown", close)
        return () => {
            window.removeEventListener("keydown", close)
            document.body.style.position = "static"
        }
    }, [visible])

    if (!visible || !menu) return null
    const plugins = getPlugins(store.state)
    const mappedPlugins = Object.keys(plugins)
        .filter(pluginKey => {
            const plugin = plugins[pluginKey]
            if (pluginKey === name || pluginKey === "rows") return false
            if (!search.length) return true

            if (
                plugin.title &&
                plugin.title.toLowerCase().includes(search.toLowerCase())
            )
                return true
            if (
                plugin.description &&
                plugin.description.toLowerCase().includes(search.toLowerCase())
            )
                return true
            if (pluginKey.toLowerCase().includes(search.toLowerCase()))
                return true
            return false
        })
        .map((pluginName, index) => (
            <Plugin
                onClick={() => menu.onClose({ plugin: pluginName })}
                key={pluginName}
                pluginName={pluginName}
                plugin={plugins[pluginName]}
            />
        ))
    return (
        <Portal>
            <Wrapper>
                <Dropzone />
                <Search search={search} setSearch={setSearch} />
                <PluginList>{mappedPlugins}</PluginList>
                <CloseButton
                    onClick={() => setMenu(undefined)}
                    src={require("../../assets/close.svg")}
                />
            </Wrapper>
        </Portal>
    )
}

export default Menu
