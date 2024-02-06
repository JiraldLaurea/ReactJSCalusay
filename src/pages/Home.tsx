import { Card, Container } from "react-bootstrap";
import CustomButton from "../components/CustomButton";

export default function home() {
    return (
        <>
            <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
                <h1 className="text-xl homeTitle">Digital Transformation</h1>
                <Card className="mt-4 p-4 homeCard">
                    <h2>My Hobbies</h2>
                    <p style={{ color: "#cccccc" }}>
                        Hi! My name is Jirald. By clicking the button below, you
                        will learn more about me.
                    </p>
                    <CustomButton
                        link="/hobbies"
                        text="LEARN MORE"
                        target="_self"
                    />
                </Card>
            </Container>
        </>
    );
}
