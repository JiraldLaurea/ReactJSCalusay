<<<<<<< HEAD
import React from "react";
=======
import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CustomButton from "./CustomButton";
import ReactPlayer from "react-player";
>>>>>>> master

type Props = {
    title: string;
    description: string;
    imageSrc: string;
<<<<<<< HEAD
    isLast?: boolean
};

function HobbyItem({ title, description, imageSrc, isLast }: Props) {
=======
    isLast?: boolean;
    hasButton?: boolean;
    hasAudio?: boolean;
};

function HobbyItem({
    title,
    description,
    imageSrc,
    isLast,
    hasButton,
    hasAudio,
}: Props) {
>>>>>>> master
    return (
        <div className={`hobbiesHobby ${isLast && "hobbiesHobbyIsLast"}`}>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
<<<<<<< HEAD
=======
                {hasButton && (
                    <CustomButton
                        link="https://jiraldcalusay.vercel.app/"
                        text="VISIT"
                        target="_blank"
                        hasIcon
                    />
                )}
                {hasAudio && (
                    <div className="hobbiesHobbyPlayer">
                        <ReactPlayer
                            url={"./audio/audio4.mp3"}
                            width="100%"
                            height="50px" // Adjust the height according to your design
                            controls
                        />
                    </div>
                )}
>>>>>>> master
            </div>
            <img className="hobbiesHobbyImage" src={imageSrc}></img>
        </div>
    );
}

export default HobbyItem;
