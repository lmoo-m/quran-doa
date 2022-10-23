import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../style";
import Toggle from "./Toggle";

const Navbar = ({ idMode, setIdMode, mode, theme, setShowNav }) => {
    return (
        <Container
            d="flex"
            justify="center"
            style={{ position: "fixed", top: "0" }}
            w="100%"
        >
            <Container
                fluid
                h="2rem"
                d="flex"
                justify="space-between"
                align="center"
                style={{ padding: ".5rem" }}
            >
                <div>
                    <Link
                        to={"/"}
                        onClick={() => setShowNav("")}
                        className="link"
                    >
                        <h2>home</h2>
                    </Link>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "15rem",
                    }}
                >
                    <span>
                        <Link className="link" to={"/alquran"}>
                            al quran
                        </Link>
                    </span>
                    <span>
                        <Link className="link" to={"/doa"}>
                            bacaan doa
                        </Link>
                    </span>
                </div>
                <div>
                    <Toggle
                        bg={idMode == 1 ? theme[0].bg : theme[1].bg}
                        w="5rem"
                        h={"2rem"}
                        mode={mode}
                        setIdMode={setIdMode}
                    />
                </div>
            </Container>
        </Container>
    );
};

export default Navbar;
