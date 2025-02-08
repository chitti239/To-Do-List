import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos,setTodos] = useState([
    {
      description:"Learn react",
      status:true
    }
  ])
  const[toDoDescription,setToDoDescription] = useState("");
  function handelInput(e){
    setToDoDescription({
      description:e.target.value,
      status:false
    });
  }
  function creatTodo(){
    const tempTodoList = [...todos];
    tempTodoList.unshift(toDoDescription);
    setTodos(tempTodoList);
  }

  return (
    <>
      <div>
        <input type="text" onChange={handelInput} placeholder='Write your Todo' />
        <button onClick={creatTodo}>Add todo</button>
      </div>
        <div>
          <h1>To-do List</h1>
          {
            todos.map((ele)=>{
              return <div>
                <span>Description:{ele.description}</span>
                <span> Status:{ele.status?"Done":"Pending"}</span>
              </div>
            })
          }
        </div>
      
    </>
  )
}

export default App
