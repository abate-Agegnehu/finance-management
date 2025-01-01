Finance Management with Authentication

Overview

This project is a Finance Management application with authentication. It provides a dashboard for managing finances, including features such as user registration, login, balance display, and transaction management. The front end is built with ReactJS, Chakra UI, Tailwind CSS, Vite, and TypeScript, while the backend is developed using Node.js, Express.js, and MongoDB.

Features

Frontend Features:

Landing Page:

Responsive navigation bar with app name, "Login" and "Sign Up" buttons.
Hero section describing the app’s benefits.
Call-to-action buttons for "Sign Up" and "Learn More".

Authentication Pages:

Sign Up Page: Users can create an account with fields for Username, Email, Password, and Confirm Password. Form validation and API calls to the backend for registration.
Login Page: Users can log in with Email and Password. It validates inputs and authenticates via the backend API. Redirects to the dashboard on successful login.

Protected Finance Dashboard:

Accessible only after login (JWT stored in localStorage or cookies).
Current Balance Widget: Displays the user's balance fetched from the backend.
Recent Transactions List: Shows a list of the latest 5 transactions with details like date, description, and amount.
Add Transaction Form: Users can submit transactions with fields for Description, Amount, and Date.

Responsiveness:

The layout is fully responsive for mobile, tablet, and desktop screens.

Frontend

Setup Instructions

Clone the repository:

bash
Copy code
git clone https://github.com/abate-Agegnehu/finance-management.git
Navigate to the project folder:

bash
Copy code
cd finance-frontend

Install dependencies:

bash
Copy code
npm install

Run the development server:

bash
Copy code
npm run dev

This will start the Vite development server and the app will be accessible at http://localhost:5173/.

Features Implemented:

Landing Page: Responsive design with Chakra UI components.
Sign Up and Login Pages: Form validation and API calls for user authentication.
Dashboard: Displays user balance, recent transactions, and allows adding new transactions.
Responsive Design: Fully responsive layout with Tailwind CSS.

Frontend Technologies Used:

ReactJS: Frontend framework.

Vite: Fast development environment for React.
TypeScript: For type safety and improved developer experience.
Chakra UI: For building a user-friendly, responsive UI.
Tailwind CSS: For utility-first styling.
JWT: For handling user authentication via tokens stored in localStorage.

Backend

Setup Instructions
Clone the repository:

bash
Copy code
git clone https://github.com/abate-Agegnehu/finance-management.git
Navigate to the backend project folder:

bash
Copy code
cd finance-backend

Install dependencies:

bash
Copy code
npm install
Create a .env file for environment variables (e.g., database URL, JWT secret).

Example .env file:

txt
Copy code
MONGODB_URI=mongodb://localhost:27017/finance-app
JWT_SECRET=your-secret-key
PORT=5000

Run the backend server:

bash
Copy code
npm start
The backend will be accessible at http://localhost:5000.

Features Implemented:
User Authentication: Handles user registration and login, generating JWT tokens for secure authentication.
Transactions API: Allows users to add, view, and manage their transactions.
Balance Calculation: Retrieves and displays the current user balance based on transactions.

Backend Technologies Used:

Node.js: Backend runtime environment.
Express.js: Web framework for building REST APIs.
MongoDB: NoSQL database for storing user data and transactions.
JWT: For authentication and secure access to protected routes.
