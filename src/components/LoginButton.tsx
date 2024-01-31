import React from "react";
import { Button } from "react-bootstrap";

type Props = {
    text: string;
    variant: string;
};

function LoginButton({ text, variant }: Props) {
    return (
        <div>
            <Button variant={variant}>{text}</Button>
        </div>
    );
}

export default LoginButton;
