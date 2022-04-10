import { contactFormAction } from "../action-creator/actionType"
const IsContactFormOpen = (state = false, action: { type: string }) => {
    if (action.type === contactFormAction) {
        return !state
    } else {
        return state;
    }
}

export default IsContactFormOpen;