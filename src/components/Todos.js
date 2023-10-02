import React, { useState } from 'react'
import AddTodo from './AddTodo'
import Todo from './Todo'

function Todos() {

  const [todos,setTodos] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")):[]);
  const[editTodo,setEditTodo] = useState({});

  const getId =()=>{

    let d = new Date();
    let n = d.getTime();
        return n
  } 

  const addNewTodo =(value)=>{
    const todoArr = [...todos];
    if(value){
      todoArr.push({id: getId(),value:value,isDone:false})
    }
    else{
      alert("Please enter a Value")
    }
    setTodos(todoArr);
    localStorage.setItem("todos",JSON.stringify(todoArr));
  };

  const handleDelete = (todo)=>{  

    const todoArr = todos.filter(t=>{return t.id !== todo.id})
    setTodos(todoArr);
    localStorage.setItem("todos",JSON.stringify(todoArr));

  }

  const editTodoFunc = (todo)=>{

    const todoArr =[...todos];
    todoArr.filter(t=> {
      if(t.id === todo.id)return t.value = todo.value
    })
    setEditTodo({});
    localStorage.setItem("todos",JSON.stringify(todoArr))

  }

  const handleEdit=(todo)=>{
    setEditTodo(todo)
  }


  


  return (
    <div>
     
        <div>
            <AddTodo addNewTodo={addNewTodo}/>
        </div>
        <div className="mx-16">
          <h1 className="font-bold">Todo list</h1>
        <div>
        {todos.map((todo,index)=>(
        <div key={todo.id}><Todo index={index+1} todo={todo}  delete={handleDelete} edit={handleEdit}/></div>))}
      </div>

        </div>
        

        {editTodo.value &&<div>
          <form onSubmit={(e)=>{e.preventDefault(); editTodoFunc(editTodo) }}>
            <div>
              <label>Value : </label>
              <input type="text" value={editTodo.value} onChange={(e)=>setEditTodo({...editTodo,value:e.target.value})}/>
              <button type="submit"
                      className="bg-slate-400 p-2 text-xs rounded-lg shadow-md font-bold text-white hover:bg-slate-800 focus:ring-2 focus:ring-yellow-300 "
                      >Update</button>
            </div>
          </form>
        </div> }
    </div>
  )
}

export default Todos