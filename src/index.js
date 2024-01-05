import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Dashboard from "./pages/Dashboard";
import UpComing from "./pages/UpComing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MasterData from "./pages/MasterData";
import NewPatient from "./pages/NewPatient";
import ExistingPatient from "./pages/ExistingPatient";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/newpatient" element={<NewPatient />} />
        <Route path="/existingpatient" element={<ExistingPatient />} />
        <Route path="/masterdata" element={<MasterData />} />
        <Route path="/followup" element={<UpComing />} />
        <Route path="/consulting" element={<UpComing />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
