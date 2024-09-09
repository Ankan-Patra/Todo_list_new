import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodos'
import TodoSlice from './features/todo/todoSlice'
import Todos from './components/todos'

function App() {


  return (
    <>
      <h1>Learn About Redux</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
