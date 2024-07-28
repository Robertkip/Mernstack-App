# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# React Routing Application

This is a React application that sets up routing using the `react-router-dom` library.

## Dependencies

- `react-router-dom`: A library for routing in React applications.

## Components

The application consists of the following components:

1. **Login**: A component that renders the login page.
2. **Signup**: A component that renders the signup page.
3. **Navbar**: A component that renders the navigation bar.
4. **Home**: A component that renders the home page.
5. **Booking**: A component that renders the booking page.
6. **Footer**: A component that renders the footer section.

## Routing

The routing is set up in the `App` component using the `react-router-dom` library. The `BrowserRouter` component is used to provide the routing functionality, and the `Routes` component is used to define the different routes and their corresponding components.

The following routes are defined:

- `/login`: Renders the `Login` component.
- `/`: Renders the `Navbar` component (root path).
- `/signup`: Renders the `Signup` component.
- `/home`: Renders the `Home` component.
- `/booking`: Renders the `Booking` component.

The `Footer` component is rendered outside the `Routes` component, which means it will be displayed on all pages of the application.

## Usage

To run the application, follow these steps:

1. Clone the repository or download the source code.
2. Navigate to the project directory.
3. Install the dependencies by running `npm install`.
4. Start the development server by running `npm start`.
5. Open your web browser and visit `http://localhost:3000` to see the application.

## Customization

You can customize the application by modifying the components and their respective files. The components are located in the `components` directory, and the CSS styles are located in the `Navbar.css` file.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
