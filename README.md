To-Do List Application
A fully responsive To-Do List application built using the MERN (MongoDB, Express, React, Node.js) stack. This application allows users to manage tasks effectively with features like adding, editing, deleting, and marking tasks as complete/incomplete.

Features
Add Tasks: Create a new task with a title.
View Tasks: View all tasks categorized into Active and Completed sections.
Edit Tasks: Inline editing of task titles.
Mark Complete/Incomplete: Toggle tasks as completed or uncompleted using checkboxes.
Delete Tasks: Remove tasks from the list.
Responsive Design: Fully responsive layout optimized for desktops and mobile devices using Tailwind CSS.
Optional Features
Integrated react-toastify for real-time notifications.
Displays success or error messages for task actions (add, update, delete).
Styled with Tailwind CSS for a modern and clean design.
Backend secured with proper error handling.
Technologies Used
Backend
Node.js
Express.js
MongoDB
Mongoose
Frontend
React.js
Axios (for API requests)
Tailwind CSS (for responsive design)
React-Toastify (for notifications)
Getting Started
Prerequisites
Ensure the following are installed on your system:

Node.js
npm
MongoDB
Setup and Installation
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/oshadha2k01/To-Do-List-MERN-Stack
cd To-Do-List-MERN-Stack
2. Backend Setup
Navigate to the backend folder:

bash
Copy
Edit
cd backend
Install the required dependencies:

bash
Copy
Edit
npm install express mongoose dotenv cors body-parser
npm install --save-dev nodemon
Create a .env file in the backend folder and add the following content:

env
Copy
Edit
MONGO_URI=your-mongodb-connection-string
PORT=5000
Run the backend server:

bash
Copy
Edit
npm start
The backend will start on http://localhost:5000.

3. Frontend Setup
Navigate to the frontend folder:

bash
Copy
Edit
cd frontend
Install the required dependencies:

bash
Copy
Edit
npm install
npm install axios react-toastify tailwindcss postcss autoprefixer
Configure Tailwind CSS:
Initialize Tailwind:

bash
Copy
Edit
npx tailwindcss init
Update the tailwind.config.js file:

javascript
Copy
Edit
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
Import Tailwind styles into src/index.css:

css
Copy
Edit
@tailwind base;
@tailwind components;
@tailwind utilities;
Start the React development server:

bash
Copy
Edit
npm start
The frontend will start on http://localhost:3000.

Folder Structure
plaintext
Copy
Edit
todo-list-app/
├── backend/
│   ├── models/
│   │   └── Task.js
│   ├── routes/
│   │   └── tasks.js
│   ├── .env
│   ├── package.json
│   ├── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.js
│   │   │   ├── TaskItem.js
│   │   │   └── TaskList.js
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── index.css
│   ├── package.json
│   ├── tailwind.config.js
├── README.md
Usage
Add tasks using the input form.
Edit task titles directly by clicking on them.
Mark tasks as completed/uncompleted using checkboxes.
Delete tasks with the delete button.
View tasks categorized into Active and Completed sections.

