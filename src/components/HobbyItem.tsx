import ReactPlayer from "react-player";
import CustomButton from "./CustomButton";

type Props = {
    title: string;
    description: string;
    imageSrc: string;
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
    return (
        <div className={`hobbiesHobby ${isLast && "hobbiesHobbyIsLast"}`}>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
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
            </div>
            <img className="hobbiesHobbyImage" src={imageSrc}></img>
        </div>
    );
}

export default HobbyItem;
