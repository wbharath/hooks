import { useRef, useState } from 'react'

function TaskForm({ onAddTask }) {
  const [taskName, setTaskName] = useState('')
  const [priority, setPriority] = useState('medium')
  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (taskName.trim() === '') return

    const newTask = {
      id: Date.now(),
      name: taskName,
      pridority: priority,
      completed: false
    }

    onAddTask(newTask)

    setTaskName('')
    setPriority('medium')

    inputRef.current.focus()
  }
  return (
    <form
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-4">Add New Task</h2>
      <div className="flex flex-col md:flex-row gap-4">
        {/* task name input */}
        <input
          ref={inputRef}
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Enter task name"
          className="flex-1 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
                     focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
        />
        {/* priority select */}
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
                     focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
        {/* submit button */}
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold 
                     rounded-lg transition-colors duration-200"
        >
          Add Task
        </button>
      </div>
    </form>
  )
}

export default TaskForm
