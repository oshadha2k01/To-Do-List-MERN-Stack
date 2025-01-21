# To-Do List Application

A fully responsive To-Do List application built using the MERN (MongoDB, Express, React, Node.js) stack. This application enables users to manage their tasks effectively with features like adding, editing, deleting, and marking tasks as complete/incomplete.

---

## Features

- **Add Tasks**: Create a new task with a title.
- **View Tasks**: Categorize tasks into Active and Completed sections.
- **Search Tasks**:
  - Filter tasks by title in Active or Completed categories.
  - Real-time, case-insensitive, and whitespace-tolerant matching.
- **Edit Tasks**: Inline task title editing.
- **Mark Complete/Incomplete**: Toggle task status with checkboxes.
- **Delete Tasks**: Remove tasks from the list.
- **Responsive Design**: Optimized layout for desktops and mobile devices using Tailwind CSS.

---

## Optional Features

- **React-Toastify Integration**:
  - Real-time notifications for task actions (add, update, delete).
- **Modern Design**: Styled with Tailwind CSS for a clean and user-friendly interface.
- **Error Handling**: Secure backend with robust error management.

---

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Frontend
- React.js
- Axios (API requests)
- Tailwind CSS (responsive design)
- React-Toastify (notifications)

---

## Getting Started

### Prerequisites
Ensure the following are installed on your system:
- [Node.js](https://nodejs.org)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

---

## Setup and Installation

### 1. Clone the Repository
```bash
git clone https://github.com/oshadha2k01/To-Do-List-MERN-Stack
cd To-Do-List-MERN-Stack
```

### 2. Navigate to the Backend Directory
```bash
cd backend
```

### 3. Install Dependencies
```bash
npm install express mongoose dotenv cors body-parser
npm install --save-dev nodemon
```

### 4. Configure MongoDB
- For local MongoDB: Ensure it is running.
- For MongoDB Atlas: Set up a cluster and obtain the connection string.

### 5. Create a `.env` File in the Backend Directory
```env
MONGO_URI=your_mongo_connection_string
PORT=5000
```

### 6. Start the Backend Server
```bash
npm start
```

---

### Setting Up the Frontend

### 1. Navigate to the Frontend Directory
```bash
cd frontend
```

### 2. Install Dependencies
```bash
npm install
npm install axios react-toastify tailwindcss postcss autoprefixer
```

### 3. Configure Tailwind CSS
- Initialize Tailwind:
```bash
npx tailwindcss init
```

- Update the `tailwind.config.js` File:
```javascript
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- Import Tailwind Styles into `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. Start the Frontend Application
```bash
npm start
```

---

## Accessing the Application

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend**: [http://localhost:5000](http://localhost:5000)

---

## Contact

- **Email**: [oshadhanipun093@gmail.com](mailto:oshadhanipun093@gmail.com)
- **GitHub**: [https://github.com/oshadha2k01](https://github.com/oshadha2k01)
- **LinkedIn**: [https://www.linkedin.com/in/oshadha-nipun-77b08333a/](https://www.linkedin.com/in/oshadha-nipun-77b08333a/)

