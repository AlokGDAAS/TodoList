import React from 'react'

function Todo(props) {
  return (
    <div className=" my-4 w-1/3">
      <div className="grid grid-cols-2 ">        
        <div className="bg-gray-50 py-1 mr-4 rounded-lg p-2"><pre style={{fontFamily:"'Roboto', sans-serif"}} >{props.index}  <span >{props.todo.value}</span></pre></div>
        <div className="" >
          <button className="bg-slate-400 p-2 text-xs rounded-lg shadow-md font-bold text-white hover:bg-slate-800 focus:ring-2 focus:ring-yellow-300 mr-4 "
          onClick={()=>props.edit(props.todo)}>
            Edit</button>
          
        <button className="bg-slate-400 p-2 text-xs rounded-lg shadow-md font-bold text-white hover:bg-slate-800 focus:ring-2 focus:ring-yellow-300 "
                     onClick={()=>props.delete(props.todo)}>
          Delete</button>
          </div>
      </div>
    </div>
    
  )
}

export default Todo