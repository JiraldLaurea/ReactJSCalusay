import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
    link: string;
    text: string;
    target: string;
    hasIcon?: boolean;
};

function CustomButton({ link, text, target, hasIcon }: Props) {
    return (
        <Button
            // href="/hobbies"
            component={Link}
            to={link}
            target={target}
            style={{ backgroundColor: "#7a5af5" }}
            variant="contained"
            className="customButton"
        >
            {text}
            {hasIcon && (
                <OpenInNewIcon style={{ fontSize: 21, marginLeft: 5 }} />
            )}
        </Button>
    );
}

export default CustomButton;
