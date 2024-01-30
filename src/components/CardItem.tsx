import React from "react";
import { Button, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Navigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

type Props = {
    name: String;
    username: String;
    email: String;
    addressStreet: String;
    addressSuite: String;
    addressCity: String;
    addressZipcode: String;
    addressGeoLat?: String;
    addressGeoLng?: String;
    phone?: String;
    website?: String;
    companyName?: String;
    companyCatchPhrase?: String;
    companyBs?: String;
};

const CardItem = ({
    name,
    username,
    email,
    addressStreet,
    addressSuite,
    addressCity,
    addressZipcode,
    addressGeoLat,
    addressGeoLng,
    phone,
    website,
    companyName,
    companyCatchPhrase,
    companyBs,
}: Props) => {
    function stringToColor(string: string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = "#";

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    function stringAvatar(name: string) {
        return {
            sx: {
                width: 48,
                height: 48,
                bgcolor: stringToColor(name),
            },
            children: `${name.split(" ")[0][0]}`,
        };
    }

    return (
        <Col>
            <Card
                className="userCard"
                style={{ width: "100%", marginBottom: "30px" }}
            >
                <Card.Body>
                    <div className="cardItemTitle">
                        <Avatar {...stringAvatar(name.toString())} />
                        <div
                            style={{
                                marginLeft: "12px",
                            }}
                        >
                            <Card.Title
                                style={{
                                    fontSize: "18px",
                                    marginBottom: "0px",
                                    color: "#ba9ffb"
                                }}
                            >
                                {name}
                            </Card.Title>
                            <Card.Text
                                style={{
                                    color: "#CCCCCC",
                                }}
                            >
                                {username}
                            </Card.Text>
                        </div>
                    </div>
                    <Card.Text>Email: {email}</Card.Text>
                    <Card.Text>Street: {addressStreet}</Card.Text>
                    <Card.Text>Suite: {addressSuite}</Card.Text>
                    <Card.Text>City: {addressCity}</Card.Text>
                    <Card.Text>Zipcode: {addressZipcode}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardItem;
