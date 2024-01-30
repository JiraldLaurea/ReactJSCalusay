import React from "react";

type Props = {
    title: string;
    description: string;
    imageSrc: string;
    isLast?: boolean
};

function HobbyItem({ title, description, imageSrc, isLast }: Props) {
    return (
        <div className={`hobbiesHobby ${isLast && "hobbiesHobbyIsLast"}`}>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <img className="hobbiesHobbyImage" src={imageSrc}></img>
        </div>
    );
}

export default HobbyItem;
