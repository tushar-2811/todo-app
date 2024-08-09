import React from 'react'

const Todos = ({todos}) => {
    async function handleTodoCompletion(){
       
    }
  return (
    <>
    {
        todos.map((todo) => {
            return <div className='w-full my-4 p-4 border-2 flex flex-col' id={todo.title}>
                <h1 className="text-center text-sky-600 text-2xl">{todo.title}</h1>
                <h3 className="text-center text-black text-base">{todo.description}</h3>
                <button className='w-1/3 mx-auto px-4 py-2 rounded-md border-2 bg-white text-black border-black'> {todo.isCompleted === true ? "Completed" : "Mark as Complete"} </button>
            </div>
        })
    }
    </>
  )
}

export default Todos
