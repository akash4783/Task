import * as type from "./action-type"

export const getTask=(payload)=>{
    return {
        type:type.GET_TASK_DETAILS,
        payload:payload
    }
}

export const deleteTask=()=>{
    return {
        type:type.DELETE_TASK_DETAILS
    }
}

export const postData=()=>{
 return {
     type:type.ADD_TASK_DETAILS
 }
}
export const edit =(payload)=>{
    return{
        type:type.EDIT_TASK_DETAIL,
        payload:payload
    }
}

export const updateTask=(payload)=>{
    return{
        type:type.UPDATE_TASK_DETAIL,
        payload:payload
    }
}

export const getJoke=(payload)=>{
    return{
        type:type.GET_JOKE,
        payload:payload
    }
}