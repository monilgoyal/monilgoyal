import { combineReducers } from 'redux'
import IsContactFormOpen from './contactFormReducer'
import IsDrawerOpen from './drawerReducer'
import IsDark from "./themeReducer"
const reducers = combineReducers({
    IsDark, IsDrawerOpen, IsContactFormOpen
})
export type RootState = ReturnType<typeof reducers>
export default reducers