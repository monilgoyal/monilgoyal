import { themeAction, drawerAction, contactFormAction } from "./actionType"
export const themeToggle = () => ({
    type: themeAction,
})
export const drawerToggle = () => ({
    type: drawerAction,
})
export const contactFormToggle = () => ({
    type: contactFormAction,
})