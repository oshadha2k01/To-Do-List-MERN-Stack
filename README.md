# **To-Do List Application**

A fully responsive To-Do List application built using the MERN (MongoDB, Express, React, Node.js) stack. This application allows users to manage tasks effectively with features like adding, editing, deleting, and marking tasks as complete/incomplete.

---

## **Features**

- **Add Tasks**: Create a new task with a title.
- **View Tasks**: View all tasks categorized into Active and Completed sections.
- **Search Tasks**:
  - Filter tasks by title in Active or Completed categories using the search bar.
  - Real-time search functionality with case-insensitive and whitespace-tolerant matching.
- **Edit Tasks**: Inline editing of task titles.
- **Mark Complete/Incomplete**: Toggle tasks as completed or uncompleted using checkboxes.
- **Delete Tasks**: Remove tasks from the list.
- **Responsive Design**: Fully responsive layout optimized for desktops and mobile devices using Tailwind CSS.

---

## **Optional Features**

- Integrated **react-toastify** for real-time notifications.
  - Displays success or error messages for task actions (add, update, delete).
- Styled with **Tailwind CSS** for a modern and clean design.
- Backend secured with proper error handling.

---

## **Technologies Used**

### Backend

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**

### Frontend

- **React.js**
- **Axios** (for API requests)
- **Tailwind CSS** (for responsive design)
- **React-Toastify** (for notifications)

---

## **Getting Started**

### **Prerequisites**

Ensure the following are installed on your system:

- [Node.js](https://nodejs.org)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

---

## **Setup and Installation**

### **1. Clone the Repository**

bash
git clone https://github.com/oshadha2k01/To-Do-List-MERN-Stack
cd To-Do-List-MERN-Stack

### **\*2. Navigate to the backend directory**

bash
cd backend

### **3. Install required dependencies**

bash
npm install express mongoose dotenv cors body-parser
npm install --save-dev nodemon

### **4. Set up MongoDB**

- For local MongoDB: Ensure it is running.
- For MongoDB Atlas: Set up a cluster and get the connection string.

### **5. Create a .env file in the backend directory with your MongoDB URI**

env
MONGO_URI=your_mongo_connection_string
PORT=5000

### **6. Start the backend server**

bash
npm start

---

### Setting Up the Frontend

### **1. Navigate to the frontend directory**

bash
cd frontend

### **2. Install required dependencies**

bash
npm install
npm install axios react-toastify tailwindcss postcss autoprefixer

### **4. Configure Tailwind CSS**

- Initialize Tailwind
  bash
  npx tailwindcss init

- Update the tailwind.config.js file
  js
  module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
  extend: {},
  },
  plugins: [],
  };

- Import Tailwind styles into src/index.css
  css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

### **5. Start the frontend application**

bash
npm start

---

## Accessing the Application

- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000

---

## Contact

- _Email_: [oshadhanipun093@gmail.com](mailto:oshadhanipun093@gmail.com)
- _GitHub_: [https://github.com/oshadha2k01](https://github.com/oshadha2k01)
- _LinkedIn_: [https://www.linkedin.com/in/oshadha-nipun-77b08333a/] (https://www.linkedin.com/in/oshadha-nipun-77b08333a/)

```

```
