import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./global.css"
import App from "./App.jsx"

import ReactGA from "react-ga4"

ReactGA.initialize("G-W3SLBYFW75")

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)