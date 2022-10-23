import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
    width: ${(props) => props.w};
    height: ${(props) => props.h};
    background: ${(props) => props.bg};
    color: ${(props) => props.text};
    border-radius: ${(props) => props.radius};
    border: ${(props) => (props.border ? "1px solid black" : "")};
    display: ${(props) => props.d};
    justify-content: ${(props) => props.justify};
    align-items: ${(props) => props.align};
    flex-direction: ${(props) => props.direction};

    ${(props) => {
        if (props.fluid) {
            return css`
                width: 80%;
            `;
        }
    }}
`;

export const ToggleContainer = styled(motion.div)`
    background: ${(props) => props.bg};
    width: ${(props) => props.w};
    height: ${(props) => props.h};
    border-radius: 25px;
    border: 1px solid black;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

export const ToggleCircle = styled(motion.div)`
    width: 40%;
    height: 95%;
    background-color: ${(props) => props.bg};
    border-radius: 50%;
    border: 1px solid black;
`;
