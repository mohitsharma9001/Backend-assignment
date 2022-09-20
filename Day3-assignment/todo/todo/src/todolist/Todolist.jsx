import React from 'react'

export const Todolist = () => {
    const [todos,setTodos] = React.useState([]); 
    const [loding,setLoding] = React.useState(false)
    const [error,setError] = React.useState(false)

console.log(todos)
    const getTodo = ()=>{
        fetch(`http://localhost:3002/todo`)
        .then((res)=>res.json())
       .then((res)=>setTodos(res.todo))
        
    }
    React.useEffect(()=>{
        getTodo();
    },[])

const handleDelete = (id)=>{
    console.log(todos.id)
    fetch(`http://localhost:3002/todo/${id}`,{
        method : "DELETE"
    }).then(()=>getTodo())
}

  return   loding ? (<div>Loding...</div>) : error ? (<h3>Somthing Went Wrong</h3>) :  (<div>{todos.map((todo)=>(<div key={todo.id}>
    <div style={{display : "flex",justifyContent : "space-around"}}>
    <h3>{todo.name}</h3><h3>{todo.role}</h3>
    <button style={{height : "30px"}} onClick={handleDelete}> Delete</button>
    </div>
 
   
 </div>))}</div>)
}
