import React from "react";
import { Container } from "react-bootstrap";
import HobbyItem from "../components/HobbyItem";
import Title from "../components/Title";

type Props = {};

export default function Hobbies({}: Props) {
    return (
        <Container className="hobbiesContainer">
            <Title title="My Hobbies" />
            <HobbyItem
                title="Developing Websites"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a risus vestibulum, rhoncus orci in, viverra eros. Nulla dui sapien, sollicitudin eu metus sed, semper sagittis erat. Nullam pharetra nisl ullamcorper mauris cursus faucibus. Sed sollicitudin eros id viverra bibendum. Nunc pellentesque venenatis nunc at vestibulum. Aenean viverra pharetra condimentum. Vestibulum iaculis accumsan tortor, ut blandit velit suscipit at."
                imageSrc="./hobby3.png"
            />
            <HobbyItem
                title="Making Beats"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a risus vestibulum, rhoncus orci in, viverra eros. Nulla dui sapien, sollicitudin eu metus sed, semper sagittis erat. Nullam pharetra nisl ullamcorper mauris cursus faucibus. Sed sollicitudin eros id viverra bibendum. Nunc pellentesque venenatis nunc at vestibulum. Aenean viverra pharetra condimentum. Vestibulum iaculis accumsan tortor, ut blandit velit suscipit at."
                imageSrc="./hobby1.jpg"
            />
            <HobbyItem
                title="Playing Games"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a risus vestibulum, rhoncus orci in, viverra eros. Nulla dui sapien, sollicitudin eu metus sed, semper sagittis erat. Nullam pharetra nisl ullamcorper mauris cursus faucibus. Sed sollicitudin eros id viverra bibendum. Nunc pellentesque venenatis nunc at vestibulum. Aenean viverra pharetra condimentum. Vestibulum iaculis accumsan tortor, ut blandit velit suscipit at."
                imageSrc="./hobby2.jpg"
                isLast
            />
        </Container>
    );
}
