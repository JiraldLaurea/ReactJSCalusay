import React, { useEffect, useState } from "react";
import JsonCard from "../components/JsonCard";
import Axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../components/Title";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/system";

type Props = {};

export default function Json({}: Props) {
    const [users, setUsers] = useState<[] | null>(null);

    useEffect(() => {
        const apiUrl = "https://jsonplaceholder.typicode.com/users";
        Axios.get(apiUrl).then((res) => {
            setUsers(res.data);
        });
    }, []);

    return (
        <Container className="wrapper">
            <Title title="Users" />
            {users ? (
                <Row>
                    {users?.map((user: any, idx) => {
                        return (
                            <Col key={idx} xs={12} md={4} lg={4}>
                                <JsonCard
                                    name={user.name}
                                    username={user.username}
                                    email={user.email}
                                    addressStreet={user.address.street}
                                    addressSuite={user.address.suite}
                                    addressCity={user.address.city}
                                    addressZipcode={user.address.zipcode}
                                />
                            </Col>
                        );
                    })}
                </Row>
            ) : (
                <CircularProgress className="circularProgress" />
            )}
        </Container>
    );
}
