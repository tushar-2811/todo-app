import { useEffect, useState } from "react"
import CreateTodo from "./components/CreateTodo"
import Todos from "./components/Todos"

function App() {
  const [todos , setTodos] = useState([]);

        useEffect(() => {
           async function getData() {
            const response = await fetch("http://localhost:3000/api/v1/todo/get-todos" , {
              method : "GET",
          })

          const json = await response.json();
          setTodos(json.data);
           }
           getData();
        },[])

  return (
    <>
      <h1 className="text-center text-green-600 text-2xl">Hello, User</h1>
      <h2 className="text-center text-red-600 text-base">The Most Advanced Todo App</h2>
      <CreateTodo/>
      <Todos todos={todos}/>
    </>
  )
}

export default App
