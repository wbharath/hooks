import { useMemo, useState } from 'react'
import { useTheme } from './context/ThemeContext'
import { FaRegSun, FaRegMoon } from 'react-icons/fa'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import FilterBar from './components/FilterBar'
function App() {
  const { theme, toggleTheme } = useTheme()
  const [tasks, setTasks] = useState([])
  const [filters, setFilters] = useState({
    status: 'all',
    priority: 'all',
    search: ''
  })
  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  const handleToggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId))
  }

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'reset') {
      setFilters({ status: 'all', priority: 'all', search: '' })
    } else {
      setFilters((prev) => ({ ...prev, [filterType]: value }))
    }
  }

  const filteredTasks = useMemo(() => {
    console.log('Filtering tasks...')

    return tasks.filter((task) => {
      // status filter
      if (filters.status === 'pending' && task.completed) return false
      if (filters.status === 'completed' && !task.completed) return false

      // priority filter
      if (filters.priority !== 'all' && task.priority !== filters.priority)
        return false

      // search filter
      if (
        filters.search &&
        !task.name.toLowerCase().includes(filters.search.toLowerCase)
      ) {
        return false
      }

      return true
    })
  }, [tasks, filters])

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
          {/* {console.log(tasks)} */}
          {/* filter bar */}
          <FilterBar filters={filters} onFilterChange={handleFilterChange} />
          {/* task list */}
          <TaskList
            tasks={filteredTasks}
            onToggle={handleToggleTask}
            onDelete={handleDeleteTask}
          />
        </main>
      </div>
    </div>
  )
}

export default App
