import React, { useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import LoginButton from "../components/LoginButton";
<<<<<<< HEAD
import CardItem from "../components/CardItem";
=======
import CardItem from "../components/JsonCard";
>>>>>>> master
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
<<<<<<< HEAD

export default function home() {
    const [text, setText] = useState("Magbabago yung text na to");
=======
import TextField from "@mui/material/TextField";
import CustomButton from "../components/CustomButton";

export default function home() {
>>>>>>> master
    const [students, setStudents] = useState({
        name: "asdasd",
        id: "20",
    });
<<<<<<< HEAD

    const displayMessage = () => {
        setText("HELLO WORLD");
        console.log(students);
    };

    return (
        <>
            <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
                <h1
                    style={{
                        color: "white",
                        marginBottom: "24px",
                        fontSize: "58px",
                    }}
                >
                    Digital Transformation
                </h1>

                {/* <div className="d-flex mt-3">
                    <Button
                        style={{
                            color: "#7a5af5",
                            border: "1px solid #7a5af5 ",
                        }}
                        href="/calculator"
                        variant="outlined"
                        className="mx-2"
                    >
                        Calculator
                    </Button>
                    <Button
                        style={{
                            color: "#7a5af5",
                            border: "1px solid #7a5af5 ",
                        }}
                        href="/json"
                        variant="outlined"
                        className="mx-2"
                    >
                        JSON
                    </Button>
                </div> */}

                <Card
                    style={{ backgroundColor: "#282828", color: "white" }}
                    className="mt-4 p-4 rounded"
                >
                    <h2>My Hobbies</h2>
                    <p  style={{color: "#cccccc" }}>
                        Hi! My name is Jirald. By clicking the button below, you
                        will learn more about me.
                    </p>

                    <Button
=======
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
                    {/* <Button
>>>>>>> master
                        // href="/hobbies"
                        component={Link}
                        to="/hobbies"
                        style={{ backgroundColor: "#7a5af5" }}
                        variant="contained"
                        className="mt-3 customStyle"
                    >
                        Learn More
<<<<<<< HEAD
                    </Button>
=======
                    </Button> */}
>>>>>>> master
                </Card>
            </Container>
        </>
    );
}
