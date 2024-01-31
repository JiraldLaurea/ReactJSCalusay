import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calculator from "./pages/Calculator.tsx";
import Home from "./pages/Home.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import Json from "./pages/Json.tsx";
import Hobbies from "./pages/Hobbies.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Navbar expand="md" fixed="top" className="navbar">
                <Container>
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        className="navbarToggler"
                    />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto navlink">
                            <Nav.Link
                                style={{
                                    fontSize: "18px",
                                    fontWeight: "500",
                                    marginRight: "18px",
                                }}
                                href="/"
                            >
                                JIRALD CALUSAY
                            </Nav.Link>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/hobbies">Hobbies</Nav.Link>
                            <Nav.Link href="/calculator">Calculator</Nav.Link>
                            <Nav.Link href="/json">JSON</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/hobbies" element={<Hobbies />}></Route>
                <Route path="/calculator" element={<Calculator />}></Route>
                <Route path="/json" element={<Json />}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
