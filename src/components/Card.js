import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../style";

const Card = ({ icon, title, theme, link, setShowNav }) => {
    return (
        <Link to={link} onClick={() => setShowNav("show")}>
            <Container
                radius="25px"
                w="35%"
                h="45vh"
                d="flex"
                justify="center"
                align="center"
                direction="column"
                bg={theme.bg}
                text={theme.color}
                className="card"
            >
                <span>{icon}</span>
                <h1>{title}</h1>
            </Container>{" "}
        </Link>
    );
};

export default Card;
