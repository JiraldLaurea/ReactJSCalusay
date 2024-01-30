import React, { useEffect, useState } from "react";
import CardItem from "../components/CardItem";
import Axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../components/Title";

type UsersData = {
    // name: String;
    // username: String;
    // email: String;
    // addressStreet: String;
    // addressSuite: String;
    // addressCity: String;
    // addressZipcode: String;
    // addressGeoLat: String;
    // addressGeoLng: String;
    // phone: String;
    // website: String;
    // companyName: String;
    // companyCatchPhrase: String;
    // companyBs: String;
};

export default function Json({}: UsersData) {
    const [users, setUsers] = useState<UsersData[] | null>(null);

    useEffect(() => {
        const apiUrl = "https://jsonplaceholder.typicode.com/users";
        Axios.get(apiUrl).then((res) => {
            console.log(res);
            setUsers(res.data);
        });
    }, []);

    return (
        <Container style={{ maxWidth: "1200px", paddingTop: "80px" }}>
            <Title title="Users" />
            <Row>
                {users?.map((user: any, idx) => {
                    return (
                        <Col key={idx} xs={12} md={4} lg={4}>
                            <CardItem
                                name={user.name}
                                username={user.username}
                                email={user.email}
                                addressStreet={user.address.street}
                                addressSuite={user.address.suite}
                                addressCity={user.address.city}
                                addressZipcode={user.address.zipcode}
                                // addressGeoLat={user.address.geo.lat}
                                // addressGeoLng={user.address.geo.lng}
                                // companyBs={user.company.bs}
                                // companyCatchPhrase={user.company.catchPhrase}
                                // companyName={user.company.name}
                                // phone={user.phone}
                                // website={user.website}
                            />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}
