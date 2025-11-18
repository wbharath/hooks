function FilterBar({ filters, onFilterChange }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Filters</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* status filter */}
        <div>
          <label className="block text-sm font-semibold mb-2">Status</label>
          <select
            value={filters.status}
            onChange={(e) => onFilterChange('status', e.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-600 
                       bg-white dark:bg-gray-700 rounded-lg focus:outline-none 
                       focus:border-blue-500"
          >
            <option value="all">All Tasks</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        {/* Priority Filter */}
        <div>
          <label className="block text-sm font-semibold mb-2">Priority</label>
          <select
            value={filters.priority}
            onChange={(e) => onFilterChange('priority', e.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-600 
                       bg-white dark:bg-gray-700 rounded-lg focus:outline-none 
                       focus:border-blue-500"
          >
            <option value="all">All Priorities</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        {/* Search */}
        <div>
          <label className="block text-sm font-semibold mb-2">Search</label>
          <input
            type="text"
            value={filters.search}
            onChange={(e) => onFilterChange('search', e.target.value)}
            placeholder="Search tasks..."
            className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-600 
                       bg-white dark:bg-gray-700 rounded-lg focus:outline-none 
                       focus:border-blue-500"
          />
        </div>
      </div>
      {/* Active Filter Info */}
      {(filters.status !== 'all' ||
        filters.priority !== 'all' ||
        filters.search) && (
        <div className="mt-4 flex items-center gap-2 text-sm">
          <span className="font-semibold">Active filters:</span>
          {filters.status !== 'all' && (
            <span className="px-3 py-1 bg-blue-200 dark:bg-blue-900 rounded-full">
              Status: {filters.status}
            </span>
          )}
          {filters.priority !== 'all' && (
            <span className="px-3 py-1 bg-purple-200 dark:bg-purple-900 rounded-full">
              Priority: {filters.priority}
            </span>
          )}
          {filters.search && (
            <span className="px-3 py-1 bg-green-200 dark:bg-green-900 rounded-full">
              Search: "{filters.search}"
            </span>
          )}
          <button
            onClick={() => onFilterChange('reset', null)}
            className="ml-2 text-red-500 hover:text-red-700 underline"
          >
            Clear all
          </button>
        </div>
      )}
    </div>
  )
}

export default FilterBar
