import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { AuthProvider } from "../context/user.context.jsx"
import { DataProvider } from "../context/data.context.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </DataProvider>
  </React.StrictMode>
)
