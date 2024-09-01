import { useEffect, useState } from 'react'
import { TodoContextProvider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    const newTodo = {
      id: Date.now(),
      todoTitle: todo,
      completed: false
    }

    setTodos((previousTodos) => {
      return [...previousTodos, newTodo]
    })
  }

  const deleteTodo = (id) => {
    setTodos((prev) => {
      return prev.filter((obj) => (obj.id !== id))
    })
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => {
      return prev.map((obj) => (obj.id === id ? { ...todo, todoTitle: todo.todoTitle } : obj))
    })
  }

  const toggleComplete = (id) => {
    setTodos((prev) => {
      return prev.map((obj) => (obj.id === id ? { ...obj, completed: !obj.completed } : obj))
    })
  }

  useEffect(() => {
    const todos = localStorage.getItem("todos")

    if (todos && todos.length) {
      setTodos(JSON.parse(todos))
    }
  }, [])

  useEffect(() => {

    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoContextProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}>

      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
