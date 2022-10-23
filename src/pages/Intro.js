import React from "react";
import { FaReadme } from "react-icons/fa";
import { IoReader } from "react-icons/io5";
import Card from "../components/Card";
import { Container } from "../style";

const Intro = ({ theme, setShowNav }) => {
    return (
        <Container d="flex" justify="center" align="center" h="100vh">
            <Container fluid d="flex" justify="space-around">
                <Card
                    icon={<FaReadme size={"2.5em"} />}
                    title="al quran"
                    theme={theme}
                    link="/alquran"
                    setShowNav={setShowNav}
                />
                <Card
                    icon={<IoReader size={"2.5em"} />}
                    title="bacaan doa"
                    theme={theme}
                    link="/doa"
                    setShowNav={setShowNav}
                />
            </Container>
        </Container>
    );
};

export default Intro;
