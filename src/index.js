import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Dashboard from "./pages/Dashboard";
import UpComing from "./pages/UpComing";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/claims" element={<UpComing />} />
        <Route path="/billerqueue" element={<UpComing />} />
        <Route path="/subscription" element={<UpComing />} />
        <Route path="/health" element={<UpComing />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
