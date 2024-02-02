import React from "react";
import { Container } from "react-bootstrap";
import HobbyItem from "../components/HobbyItem";
import Title from "../components/Title";

type Props = {};

export default function Hobbies({}: Props) {
    return (
<<<<<<< HEAD
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
=======
        <Container className="wrapper">
            <Title title="My Hobbies" />
            <HobbyItem
                title="Developing Websites"
                description="I enjoy creating websites using technologies like Reactjs, Nextjs, MySQL, and Nodejs. This hobby lets me build dynamic and visually appealing web applications, combining both frontend and backend development."
                imageSrc="./hobby3.png"
                hasButton
            />
            <HobbyItem
                title="Making Beats"
                description="Crafting beats is a passion of mine, and I use FL Studio as my Digital Audio Workstation (DAW). I specialize in producing hip-hop beats, exploring diverse sounds, rhythms, and arrangements to create music that reflects my unique style."
                imageSrc="./hobby1.jpg"
                hasAudio
            />
            <HobbyItem
                title="Playing Games"
                description="I'm an avid video game enthusiast, with a particular fondness for RPGs. Immersing myself in these virtual worlds, I enjoy the challenges, storytelling, and strategic elements that come with navigating through various quests and adventures."
>>>>>>> master
                imageSrc="./hobby2.jpg"
                isLast
            />
        </Container>
    );
}
