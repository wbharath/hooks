import { useMemo } from 'react'
import TaskItem from './TaskItem'

function TaskList({ tasks, onToggle, onDelete }) {
  const completionStats = useMemo(() => {
    const total = tasks.length
    const completed = tasks.filter((task) => task.completed).length
    const percentage = total === 0 ? 0 : Math.round((completed / total) * 100)

    console.log('Calculating tasks.....')

    return { total, completed, percentage }
  }, [tasks])

  if (tasks.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 p-12 rounded-lg shadow-md text-center">
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          No tasks yet! Add your first task above.
        </p>
      </div>
    )
  }
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-2">Progress</h3>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
              <div
                className="bg-blue-500 h-full transition-all duration-300"
                style={{ width: `${completionStats.percentage}%` }}
              />
            </div>
          </div>
          <span className="text-2xl font-bold">
            {completionStats.percentage}%
          </span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          {completionStats.completed} of {completionStats.total} tasks completed
        </p>
      </div>
      {/* task items */}
      <div className="space-y-3">
        {tasks.map((task) => {
          return (
            <TaskItem key={task.id} onToggle={onToggle} onDelete={onDelete} task={task}/>
          )
        })}
      </div>
    </div>
  )
}

export default TaskList
