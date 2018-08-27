export const initPanel = () => {
    return({
        type: 'INIT_PANEL',
        payload: {
            isOpen: false,
            isLightDismiss: true,
            isFooterAtBottom: true,
            closeButtonAriaLabel: true
        }
    })
}

export const initMenu = () => {
    return({
        type: "INIT_MENU",
        payload: {
            iconOnly: false
        }
    })
}

export const initPivot = () => {
    return({
        type: "INIT_PIVOT",
        payload: {
            
        }
    })
}

export const showPanel = (pivotItem, command) => {
    return({
        type: "TOGGLE_PANEL",
        payload: {
            isOpen: true,
            pivotItem: pivotItem,
            command: command
        }
    })
}

export const hidePanel = () => {
    return({
        type: "TOGGLE_PANEL",
        payload: {
            isOpen: false
        }
    })
}

export const clickPivot = (item) => {
    return({
        type: "CLICK_PIVOT",
        payload: {
            selected: item
        }
    })
}