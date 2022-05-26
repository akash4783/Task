import React from "react"
import { useNavigate } from "react-router-dom"

const PriavteRoute=(children)=>{
    const navigate = useNavigate()
  
let emaile = localStorage.getItem("email")

if(emaile = "" || undefined){
    navigate("/")
}

return children
}

export default PriavteRoute