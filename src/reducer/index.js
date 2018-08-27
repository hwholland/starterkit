import * as actions from '../actions';

const initialState = {
    uid: 1,
    lastAction: null,
    components: {
        panel: {},
        menu: {},
        form: {},
        list: {},
        pivot: {
            selected: ""
        }
    }
};

/**
 * @method INIT_PANEL
 * @memberof Reducer
 * @param  {Object} state Object containing the React state key/value pairs
 * @param  {Object} action Contains details of the dispatched action
 * @return {Object} Updated state object
 */
const INIT_PANEL = (state, action) => {
    return (Object.assign({}, state, {
        uid: state.uid++,
        lastAction: action.type,
        components: {
            ...state.components,
            panel: {
                ...state.components.panel,
                isOpen: action.payload.isOpen,
                isLightDismiss: action.payload.isLightDismiss,
                headerText: action.payload.headerText,
                isFooterAtBottom: action.payload.isFooterAtBottom,
                closeButtonAriaLabel: action.payload.closeButtonAriaLabel,
    
            }   
        }
    }))
}

/**
 * @method INIT_MENU
 * @memberof Reducer
 * @param  {Object} state Object containing the React state key/value pairs
 * @param  {Object} action Contains details of the dispatched action
 * @return {Object} Updated state object
 */
const INIT_MENU = (state, action) => {
    return (Object.assign({}, state, {
        uid: state.uid++,
        lastAction: action.type,
        components: {
            ...state.components,
            menu: {
                ...state.components.panel,
                iconOnly: action.payload.iconOnly
            }   
        }
    }))
}
/**

 * @function TOGGLE_PANEL
 * @memberof ConfigReducer
 * @param  {type} state  {description}
 * @param  {type} action {description}
 * @return {type} {description}
 */
const TOGGLE_PANEL = (state, action) => {
    console.log(action);
    if(!action.payload.pivotItem) {
        action.payload.pivotItem = {
            props: {
                headerText: "Planned"
            }
        }
    }
    return (Object.assign({}, state, {
        uid: state.uid++,
        lastAction: action.type,
        components: {
            ...state.components,
            panel: {
                ...state.components.panel,
                isOpen: action.payload.isOpen,
                headerText: action.payload.command + " " + action.payload.pivotItem.props.headerText + " " + "Expense"
            }
        }
    }))
}

/**
 * @function CLICK_PIVOT
 * @memberof ConfigReducer
 * @param  {type} state  {description}
 * @param  {type} action {description}
 * @return {type} {description}
 */
const CLICK_PIVOT = (state, action) => {
    return (Object.assign({}, state, {
        uid: state.uid++,
        lastAction: action.type,
        components: {
            ...state.components,
            pivot: {
                ...state.components.pivot,
                selected: action.payload.selected
            }
        }
    }))
}

export function Reducer(state = initialState, action) {
    switch (action.type) {
        case 'INIT_PANEL':
            return INIT_PANEL(state, action)
        case 'INIT_MENU': 
            return INIT_MENU(state, action)
        case 'TOGGLE_PANEL': 
            return TOGGLE_PANEL(state, action)
         case 'CLICK_PIVOT': 
            return CLICK_PIVOT(state, action)
        default:
            return state
    }
}