import { themeAction } from "../action-creator/actionType"
const IsDark = (state = true, action: { type: string }) => {
    if (action.type === themeAction) {
        const a = !state ? 'ON' : 'OFF'
        if (typeof window !== 'undefined') {
            localStorage.setItem('darkMode', a)
        }
        return !state
    } else {
        return state;
    }
}

export default IsDark;