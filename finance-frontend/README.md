                Finance Management 
Overview
This project is the Frontend for a Finance Management System built with Vite, React, TypeScript, Chakra UI, and Tailwind CSS. It offers a user-friendly interface for managing finances with features such as authentication, transaction management, and a responsive dashboard.

             Features:

Landing Page: A responsive and visually appealing page with a navigation bar, app description, and call-to-action buttons (Sign Up, Login).

             Authentication Pages:

Sign Up: Includes form fields for username, email, password, and confirm password, with form validation.

Login: Form fields for email and password with input validation.

               Dashboard:

Displays the current user balance and recent transactions.
Allows users to add new transactions.

Responsive Design: Optimized for mobile, tablet, and desktop screens using Chakra UI and Tailwind CSS.

                   Setup Instructions
           Clone the repository:

bash
Copy code
git clone https://github.com/abate-Agegnehu/finance-management.git
Navigate into the project folder:

bash
Copy code
cd finance-frontend
Install dependencies: Make sure you have Node.js installed on your system, then run:

bash
Copy code
npm install
Run the development server: Start the development server with Vite:

bash
Copy code
npm run dev
The application will be available at http://localhost:5173/.

Build for production: To create a production build of the app, run:

bash
Copy code
npm run build
Preview the production build: After building the project, preview it locally:

bash
Copy code
npm run preview

           Project Structure

src: Contains all source code files.
components: Reusable UI components like BalanceWidget,Dashboard,Header,RecentTransactions,TransactionForm.
pages: Landing, Sign Up, Login, and Dashboard pages.
services: Contains API services for interacting with the backend.
App.tsx: Main application component.
index.tsx: Entry point for the React application.


                      Dependencies

           Core Dependencies:

@chakra-ui/react: For accessible and customizable UI components.
@emotion/react & @emotion/styled: Used for Chakra UI styling.
axios: To handle HTTP requests for interacting with the backend.
framer-motion: Provides animations for UI elements.
react: The core library for building user interfaces.
react-dom: React's DOM bindings for the browser.
react-router-dom: For routing and navigation between pages.

           Development Dependencies:

vite: Fast build tool and development server.
typescript: TypeScript for type safety and better code management.
eslint: Linter to maintain code quality.
@vitejs/plugin-react: React support for Vite.
typescript-eslint: TypeScript-specific linting rules.
eslint-plugin-react-hooks: Linting plugin for R