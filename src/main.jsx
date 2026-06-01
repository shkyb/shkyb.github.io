import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./global.css"
import App from "./App.jsx"

import ReactGA from "react-ga4"
import Hotjar from "@hotjar/browser"
import SmoothScroll from "./components/SmoothScroll.jsx"

ReactGA.initialize("G-W3SLBYFW75")
Hotjar.init(3437174, 6)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SmoothScroll>
        <App />
      </SmoothScroll>
    </BrowserRouter>
  </StrictMode>
)