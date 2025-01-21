import React, { useState } from 'react';

const TaskItem = ({ task, toggleComplete, deleteTask, updateTask }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleEdit = () => {
    if (editMode) {
      updateTask({ ...task, title: editedTitle });
    }
    setEditMode(!editMode);
  };

  const handleDelete = () => {
    deleteTask(task._id);
  };
  
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out transform hover:scale-105">
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task._id)}
          className="h-5 w-5 text-blue-500 focus:ring-2 focus:ring-blue-500"
        />
        {editMode ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-64 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          <span
            className={`text-lg ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
          >
            {task.title}
          </span>
        )}
      </div>
      <div className="flex items-center space-x-2">
        {!task.completed && (
          <button
            onClick={handleEdit}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
          >
            {editMode ? 'Save' : 'Edit'}
          </button>
        )}
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
