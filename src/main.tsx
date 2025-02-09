// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css"; // TailwindCSS styling

// Make sure to check if the root element exists before rendering.
const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      {/* BrowserRouter with basename to account for base path in Vite configuration */}
      <BrowserRouter basename="/hamisha-epic-tours/">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found. Unable to mount the React app.");
}
