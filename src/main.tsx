import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import "./index.css";
import Calculator from "./pages/Calculator.tsx";
import Hobbies from "./pages/Hobbies.tsx";
import Home from "./pages/Home.tsx";
import Json from "./pages/Json.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/hobbies" element={<Hobbies />}></Route>
                <Route path="/calculator" element={<Calculator />}></Route>
                <Route path="/json" element={<Json />}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
