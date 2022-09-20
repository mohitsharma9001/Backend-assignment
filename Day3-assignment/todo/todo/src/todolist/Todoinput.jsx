import React from 'react'

export const Todoinput = () => {
const [name,setName] = React.useState("");
const [role,setRole] = React.useState("");

const handleClick = ()=>{
    const paylode = {
        name : name,
        role : role
    }
    console.log(paylode)
    fetch(`http://localhost:3002/todo`,{
        method : "POST",
        body : JSON.stringify(paylode),
        headers : {
          "Content-Type" : "application/json"
        }
    })

}
  return (
    <div>
        <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)} value={name}/>
        <input type="text" placeholder='Role' onChange={(e)=>setRole(e.target.value)} value = {role}/>
        <button onClick={handleClick}>Add Data</button>
    </div>
  )
}
