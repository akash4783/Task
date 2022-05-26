import { useReducer } from "react"
import * as type from "./action-type"


const initialState={
    task:[],
    edit:{},
    loading:true

}

export const reducer = (state=initialState, action)=>{
switch (action.type) {
    case type.GET_TASK_DETAILS:
    case type.UPDATE_TASK_DETAIL:
        return {...state,task:action.payload,loading:false}
    case type.DELETE_TASK_DETAILS:
        return { ...state,loading:false}
    case type.EDIT_TASK_DETAIL:
        return {...state,loading:false,edit:action.payload}
    case type.ADD_TASK_DETAILS:
        return {...state,loading:false}
    case type.GET_JOKE:
        return {...state,task:action.payload,loading:false}
    default:
     return state;
}
}