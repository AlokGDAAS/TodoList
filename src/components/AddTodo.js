import React, { useState } from 'react'

function AddTodo(props) {

  const [value,setValue] = useState();

  const handleChange = (e)=>{

    setValue(e.target.value)

  }

  const clearInput =()=>{
    setValue("")
  }

  const addTodo = (e)=>{

    e.preventDefault();
    clearInput();
    props.addNewTodo(value);
    


  }


  return (
    <div>


      <div className="my-4 mx-16 rounded-lg shadow-lg py-6 p-2 bg-green-500 ">
        <h2 className="mx-24 my-2  text-stone-600 font-bold">Add New Todo</h2>
        <div className="mx-24">
        <form onSubmit={addTodo}>           
            <input type="text" 
                 className="border mr-1  w-2/3 py-1 px-4 shadow-lg rounded-md inline"
                 placeholder="todo" 
                 onChange={handleChange} 
                 value={value}
                 />

            
            
            <button type="submit" 
                  className="bg-slate-400 p-2 text-xs rounded-lg shadow-md font-bold text-white hover:bg-slate-800 focus:ring-2 focus:ring-yellow-300 inline ">
                  Add
                  </button>         
        </form>

        </div>
       
      </div>


    </div>
  )
}

export default AddTodo