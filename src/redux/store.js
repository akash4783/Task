import { applyMiddleware } from 'redux'
import { createStore } from 'redux'
import { rootReducer } from './root-reducer'
import thunk from "redux-thunk"

export const store = createStore(rootReducer,applyMiddleware(thunk))