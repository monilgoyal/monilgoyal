import { drawerAction } from "../action-creator/actionType"
const IsDrawerOpen = (state = false, action: { type: string }) => {
    if (action.type === drawerAction) {
        return !state
    } else {
        return state;
    }
}

export default IsDrawerOpen;