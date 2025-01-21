import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  
  // Fetch tasks from the server
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks', error);
        toast.error('Error fetching tasks');
      }
    };

    fetchTasks();
  }, []);

  // Add a new task
  const addTask = (newTaskTitle) => {
    const newTask = { title: newTaskTitle, completed: false };
    axios
      .post('http://localhost:5000/tasks', newTask)
      .then((response) => {
        setTasks((prevTasks) => [...prevTasks, response.data]);
        toast.success('Task added successfully');
      })
      .catch((error) => {
        console.error('Error adding task', error);
        toast.error('Error adding task');
      });
  };

  // Toggle task completion
  const toggleComplete = (taskId) => {
    const task = tasks.find((task) => task._id === taskId);
    const updatedTask = { ...task, completed: !task.completed };

    axios
      .put(`http://localhost:5000/tasks/${taskId}`, updatedTask)
      .then((response) => {
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task._id === taskId ? { ...task, completed: !task.completed } : task
          )
        );
        toast.success('Task Completed');
      })
      .catch((error) => {
        console.error('Error updating task', error);
        toast.error('Error completing task');
      });
  };

  // Delete a task
  const deleteTask = (taskId) => {
    axios
      .delete(`http://localhost:5000/tasks/${taskId}`)
      .then(() => {
        setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
        toast.success('Task deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting task', error);
        toast.error('Error deleting task');
      });
  };

  // Update a task
  const updateTask = (updatedTask) => {
    axios
      .put(`http://localhost:5000/tasks/${updatedTask._id}`, updatedTask)
      .then((response) => {
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task._id === updatedTask._id ? updatedTask : task
          )
        );
        toast.success('Task edited successfully');
      })
      .catch((error) => {
        console.error('Error updating task', error);
        toast.error('Error editing task');
      });
  };

  // Filter tasks based on completion status
  const activeTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  //Main Todo App Component
  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">To Do List Application</h1>

        <TaskForm addTask={addTask} />

        <div className="flex gap-8 mt-8">
          
          {/* Active Tasks*/}
          <div className="flex-1 bg-blue-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Active Tasks</h2>
            <div className="space-y-4">
              <TaskList
                tasks={activeTasks}
                toggleComplete={toggleComplete}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            </div>
          </div>

          {/* Completed Tasks */}
          <div className="flex-1 bg-green-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-green-600">Completed Tasks</h2>
            <div className="space-y-4">
              <TaskList
                tasks={completedTasks}
                toggleComplete={toggleComplete}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default App;
