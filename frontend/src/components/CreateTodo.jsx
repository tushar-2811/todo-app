import React, { useState } from 'react'

const CreateTodo = () => {
    const [todoDetails , setTodoDetails] = useState({
        title : "",
        description : ""
    });

     async function handleClick(){
       console.log(todoDetails);

     const response = await fetch("http://localhost:3000/api/v1/todo/add-todo" , {
        method : "POST",
        body : JSON.stringify({
            title : todoDetails.title,
            description : todoDetails.description
        }),
        headers : {
            "content-type" : "application/json"
        }
    })

    const json = await response.json();

    alert("todo created successfully");
    setTodoDetails({
        title : "",
        description : ""
    })
    }

    function handleChange(event){
        setTodoDetails((prev) => ({
            ...prev,
            [event.target.name] : event.target.value
        }))
    }
  return (
    <div>
       <input type="text" value={todoDetails.title} name='title' onChange={handleChange} placeholder='Title' className='w-32 p-2 m-2 rounded-md border-2 border-red-500'/>
       <input type="text" value={todoDetails.description} name='description' onChange={handleChange} placeholder='Description' className='w-48 p-2 m-2 rounded-md border-2 border-red-500' />

       <button onClick={handleClick} className='px-4 py-2 rounded-md border-2 bg-white text-black' >Add Todo</button>
    </div>
  )
}

export default CreateTodo
