function TaskItem() {
    const priorityColors = {
        low: 'border-green-500',
        medium: 'border-yellow-500',
        high:'border-red-500',
    };


  return (
    <div
      className={`bg-white dark:bg-gray-800 p-4 rounded-lg shadow border-l-4 
                  ${priorityColors[task.priority]} 
                  ${task.completed ? 'opacity-60' : ''}`}
    >
      <div className="flex items-center justify-between">
        {/* task name with checkbox */}
        <div className="flex items-center gap-3 flex-1">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => ontoggle(task.id)}
            className="w-5 h-5 cursor-pointer"
          />
          <span
            className={`text-lg ${
              task.completed ? 'line-through text-gray-500' : ''
            }`}
          >
            {task.name}
          </span>
        </div>
        {/* priority badge */}
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold
                      ${
                        task.priority === 'high'
                          ? 'bg-red-200 text-red-800 dark:bg-red-900 dark:text-red-200'
                          : ''
                      }
                      ${
                        task.priority === 'medium'
                          ? 'bg-yellow-200 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                          : ''
                      }
                      ${
                        task.priority === 'low'
                          ? 'bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : ''
                      }`}
        >
          {task.priority}
        </span>

        {/* Delete Button */}
        <button
          onClick={() => onDelete(task.id)}
          className="ml-4 px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TaskItem
