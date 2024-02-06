import React, { useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import LoginButton from "../components/LoginButton";
import CardItem from "../components/JsonCard";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import CustomButton from "../components/CustomButton";

export default function home() {
    const [students, setStudents] = useState({
        name: "asdasd",
        id: "20",
    });
    return (
        <>
            <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
                <h1 className="text-xl homeTitle">Digital Transformation</h1>
                <Card className="mt-4 p-4 homeCard">
                    <h2>My Hobbies</h2>
                    <p style={{ color: "#cccccc" }}>
                        Hi! My name is Jirald. By clicking the button below, you
                        will learn more about me.
                    </p>
                    <CustomButton
                        link="/hobbies"
                        text="LEARN MORE"
                        target="_self"
                    />
                </Card>
            </Container>
        </>
    );
}
