import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Toggle from "./components/Toggle";
import Content from "./pages/Content";
import Intro from "./pages/Intro";
import { Container } from "./style";
import Navbar from "./components/Navbar";

const theme = [
    {
        bg: "#B8E8FC",
        color: "#3C4048",
    },
    {
        bg: "#C8FFD4",
        color: "#251B37",
    },
];

function App() {
    const mode = localStorage.getItem("mode");
    const nav = localStorage.getItem("nav");
    const [idMode, setIdMode] = useState(mode);
    const [showNav, setShowNav] = useState(nav || "hide");

    useEffect(() => {
        localStorage.setItem("mode", idMode);
        localStorage.setItem("nav", showNav || "hide");
    }, [idMode, showNav]);

    return (
        <Router>
            <Container
                bg={theme[idMode].bg}
                text={theme[idMode].color}
                style={{ transition: "1s" }}
            >
                {showNav === "show" ? (
                    <Navbar
                        theme={theme}
                        idMode={idMode}
                        mode={mode}
                        setIdMode={setIdMode}
                        setShowNav={setShowNav}
                    />
                ) : (
                    <Toggle
                        bg={idMode == 1 ? theme[0].bg : theme[1].bg}
                        w="5rem"
                        h={"2rem"}
                        mode={mode}
                        setIdMode={setIdMode}
                        onClass
                    />
                )}

                <Routes>
                    <Route
                        path="/"
                        element={
                            <Intro
                                theme={idMode == 1 ? theme[0] : theme[1]}
                                setShowNav={setShowNav}
                            />
                        }
                    />
                    <Route
                        path="/alquran"
                        element={<Content title="al quran" />}
                    />
                    <Route path="/doa" element={<Content title="doa doa" />} />
                    <Route path="*" element={<h1>not found</h1>} />
                </Routes>
            </Container>
        </Router>
    );
}

export default App;
