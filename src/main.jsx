import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
createRoot(document.getElementById("root")).render(
  <ThemeProvider dir="rtl">
    <App />
  </ThemeProvider>
);
