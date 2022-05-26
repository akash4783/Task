import React from "react";
import {combineReducers} from "redux"
import { reducer } from "./reducer";


export const rootReducer = combineReducers({
    user: reducer
})