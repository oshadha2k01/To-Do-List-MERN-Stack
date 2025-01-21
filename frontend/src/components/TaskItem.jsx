import React from 'react';

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className="flex items-center justify-between p-2 border-b gap-2 flex-wrap">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task._id)}
        className="mr-2"
      />
      <span
        className={`${task.completed ? 'line-through text-gray-500' : ''} flex-grow`}
      >
        {task.title}
      </span>
      <button
        onClick={() => deleteTask(task._id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
