import { useState } from 'react'
import { useTheme } from './context/ThemeContext'
import { FaRegSun, FaRegMoon } from 'react-icons/fa'
import TaskForm from './components/TaskForm'
function App() {
  const { theme, toggleTheme } = useTheme()
  const [tasks, setTasks] = useState([])
  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <header className="flex justify-between items-center pb-6 mb-8 border-b-2 border-gray-300 dark:border-gray-700">
          <h1 className="text-4xl font-bold">📋 Task Dashboard</h1>
          <button
            onClick={toggleTheme}
            className="text-3xl p-3 border-2 border-gray-900 rounded-lg hover:scale-110 transition-transform"
          >
            {theme === 'light' ? <FaRegMoon /> : <FaRegSun />}
          </button>
        </header>

        <main>
          {/* task form */}
          <TaskForm onAddTask={handleAddTask} />
          {console.log(tasks)}
        </main>
      </div>
    </div>
  )
}

export default App
