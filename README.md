# Router Project

This project is a React application that demonstrates the use of React Router for navigation and routing. It includes features like user authentication (login/signup), protected routes, and a dashboard.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Contributing](#contributing)


## Features

- User authentication (login and signup)
- Protected routes that require authentication
- A dashboard page accessible only to logged-in users
- A responsive navbar that changes based on authentication state
- Toast notifications for user feedback

## Technologies Used

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [React Hot Toast](https://react-hot-toast.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (or [Yarn](https://yarnpkg.com/)) installed on your machine.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username/routerproject.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `npm run lint`

Lints the project for potential errors and warnings.

### `npm run preview`

Serves the production build locally for previewing.

## Project Structure

```
/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── frame.png
│   │   ├── login.png
│   │   ├── Logo.svg
│   │   └── signup.png
│   ├── Components/
│   │   ├── Dashboard.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── LoginForm.jsx
│   │   ├── Navbar.jsx
│   │   ├── PrivateRoute.jsx
│   │   ├── Signup.jsx
│   │   ├── SignupForm.jsx
│   │   └── Template.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request