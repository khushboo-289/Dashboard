# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Dashboard Web Application

This project is a **React-based dashboard web application** that mimics the design shown in the provided image. The application includes a sidebar, a top navigation bar, summary cards, and an order table. Styling is implemented using **Bootstrap** for consistency and responsiveness.

## Features

- **Sidebar Navigation**: Displays links to different sections.
- **Topbar**: Includes a search bar and user profile icons.
- **Summary Cards**: Show quick stats like orders, pending, completed, etc.
- **Order Table**: Displays distributor order details with sorting and filtering options.
- **Responsive Design**: Built with Bootstrap to ensure proper scaling across devices.

## Installation

### Prerequisites
- Node.js (>=14)
- npm (Node Package Manager)

### Steps
1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:
   ```bash
   cd dashboard
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open the app in your browser at:
   ```
   http://localhost:3000
   ```

## Project Structure

```plaintext
src/
|-- components/
|   |-- Sidebar.js        // Sidebar navigation
|   |-- Topbar.js         // Top navigation bar
|   |-- SummaryCards.js   // Summary cards for statistics
|   |-- OrderTable.js     // Table displaying order details
|
|-- App.js                // Main application layout
|-- index.js              // React entry point
```

## Technologies Used

- **React**: Component-based JavaScript library for building the user interface.
- **Bootstrap**: CSS framework for responsive design and pre-styled components.
- **Bootstrap Icons**: For icons in the top bar and other UI elements.

## Component Breakdown

### Sidebar
The sidebar provides navigation links to different sections.
- File: `components/Sidebar.js`
- Key Features: Static navigation with links and branding.

### Topbar
The top navigation bar contains a search field and icons.
- File: `components/Topbar.js`
- Key Features: Search functionality and user notifications.

### SummaryCards
Displays quick statistics about the system.
- File: `components/SummaryCards.js`
- Key Features: Modular layout for stats.

### OrderTable
Displays a table with details of distributor orders.
- File: `components/OrderTable.js`
- Key Features: Tabular data representation with badges for statuses.

## Styling

Styling is achieved through **Bootstrap**. Key points:

- Install Bootstrap and icons via npm:
  ```bash
  npm install bootstrap
  npm install bootstrap-icons
  ```
- Import Bootstrap in `index.js`:
  ```javascript
  import "bootstrap/dist/css/bootstrap.min.css";
  import "bootstrap-icons/font/bootstrap-icons.css";
  ```

## Scripts

- **Start Development Server**:
  ```bash
  npm start
  ```

- **Build for Production**:
  ```bash
  npm run build
  ```







