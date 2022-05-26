import axios from "axios"
import { edit, getJoke, getTask, updateTask } from "./action"


export const fetchTaskDetail=()=>{
    return function(dispatch){
        return axios.get("http://localhost:3000/post").then((resp)=>{
            dispatch(getTask(resp.data))
        }).catch((err)=>console.log(err))    
    }
}

export const postTaskDetails=(data)=>{
    return function(dispatch){ 
         return axios.post("http://localhost:3000/post/",data).then((resp)=>{
            console.log(resp.data)
            // dispatch(getTask(resp.data))
            dispatch(fetchTaskDetail())
        }).catch((err)=>console.log(err))    
    }
}

export const deleteTaskDetail=(id)=>{
    return function(dispatch){
        return axios.delete(`http://localhost:3000/post/${id}`).then((resp)=>{
            dispatch(fetchTaskDetail())
            dispatch(deleteTaskDetail())
        }).catch((err)=>console.log(err))    
    }
}   

export const editTask=(id)=>{
    return function(dispatch){
        return axios.get(`http://localhost:3000/post/${id}`).then((resp)=>{
            dispatch(edit(resp.data))
        }).catch((err)=>console.log(err))    
    }
}  

export const putEditTask  =  (id,data)=>{
   return function(dispatch){
        return axios.put(`http://localhost:3000/post/${id}`,data).then((resp)=>{
            dispatch(updateTask(resp.data))
            dispatch(fetchTaskDetail())
        }).catch((err)=>console.log(err))    
    }
}  

export const fetchJoke=()=>{
    return function(dispatch){
        return axios.get("https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10").then((resp)=>{
              dispatch(getJoke(resp.data.jokes))
              console.log(resp.data.jokes)
        }).catch((err)=>console.log(err))
    }
}