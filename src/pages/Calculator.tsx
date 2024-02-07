import { Button } from "@mui/material";
import { useState } from "react";
import { Container } from "react-bootstrap";

export default function Calculator() {
    const [expression, setExpression]: any = useState("0");
    const [isError, setIsError]: any = useState(false);

    const handleButtonClick = (value: any) => {
        setIsError(false);
        if (expression === "0" && /^[1-9]$/.test(value)) {
            // If the current expression is '0' and the new value is a non-zero digit,
            // replace '0' with the new digit
            setExpression(value);
        } else if (/[+\-*/]$/.test(expression) && /[+\-*/]$/.test(value)) {
            // If the last input is an operator and the new value is also an operator,
            // replace the last operator with the new operator
            setExpression(
                (prevExpression: any) => prevExpression.slice(0, -1) + value
            );
        } else if (
            (/[+\-*/]$/.test(expression) && value === "0") ||
            expression === "0"
        ) {
            // If the last input was an operator and the new value is '0',
            // do not change the expression
            return;
        } else {
            setExpression((prevExpression: any) => prevExpression + value);
        }
    };

    const handleClear = () => {
        setIsError(false);
        setExpression("0");
    };

    const handleEvaluate = () => {
        if (/[+\-*/]$/.test(expression)) {
            // If the expression ends with an operator, display an error alert
            setIsError(true);
            return;
        }

        // Evaluate the expression and round off to two decimal places
        const result = eval(expression);
        const roundedResult = Number.isInteger(result)
            ? result
            : result.toFixed(2);

        setExpression(roundedResult.toString());
    };

    const buttonLayout = [
        "7",
        "8",
        "9",
        "/",
        "4",
        "5",
        "6",
        "*",
        "1",
        "2",
        "3",
        "-",
        "C",
        "0",
        "=",
        "+",
    ];

    return (
        <Container
            fluid
            className="calcContainer d-flex flex-column align-items-center justify-content-center vh-100"
        >
            <p className="calcTextField">{expression}</p>

            <div
                className={`calcErrorText ${
                    isError && "calcErrorTextTriggered"
                }`}
            >
                <small>Invalid expression: Ends with an operator.</small>
            </div>

            <Container fluid>
                <div className="calcGridContainer">
                    {buttonLayout.map((btnValue, index) => (
                        <div key={index} className="calcCol">
                            <Button
                                tabIndex={-1}
                                className={`${
                                    (index + 1) % 4 === 0 &&
                                    "calcButtonsSpecial"
                                } calcButtons`}
                                onClick={() => {
                                    if (btnValue === "=") {
                                        handleEvaluate();
                                    } else if (btnValue === "C") {
                                        handleClear();
                                    } else {
                                        if (
                                            (btnValue === "+" ||
                                                btnValue === "-" ||
                                                btnValue === "*" ||
                                                btnValue === "/") &&
                                            expression === "0"
                                        )
                                            return;
                                        else {
                                            handleButtonClick(
                                                btnValue.toString()
                                            );
                                        }
                                    }
                                }}
                            >
                                {btnValue}
                            </Button>
                        </div>
                    ))}
                </div>
            </Container>
        </Container>
    );
}
