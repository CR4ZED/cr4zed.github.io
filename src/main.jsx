import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="relative min-h-screen bg-gray-50 py-6 sm:py-12">
      <img
        src="/beams.jpg"
        alt="Beams background"
        className="absolute top-[20%] left-1/2 max-w-none -translate-x-1/2 md:-translate-y-1/2 -translate-y-[350%] pointer-events-none w-screen"
      />
      <div className="absolute inset-0 bg-[url(./assets/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <App />
    </div>
  </React.StrictMode>
);
