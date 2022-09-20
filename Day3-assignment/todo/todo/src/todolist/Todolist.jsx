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
  return   loding ? (<div>Loding...</div>) : error ? (<h3>Somthing Went Wrong</h3>) :  (<div>{todos.map((todo)=>(<div key={todo.id}>
   <h3>{todo.name}</h3>
   
 </div>))}</div>)
}
