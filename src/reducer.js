export const initilaState = {
    "0": 0,
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0,
    "9": 0,
}

export const numberSwitcher  = (state , action) => {
    switch(action.type) {
        case 'SELECT_NUMBER':
            return {
                ...state,
                [action.payload.number]: action.payload.section
            }
        case 'REMOVE_NUMBER':
            return {
                ...state,
                [action.payload] : 0
            }
        default:
            return state;
    }
}