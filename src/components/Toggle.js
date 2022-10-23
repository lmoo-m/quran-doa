import React, { useState } from "react";
import { ToggleContainer, ToggleCircle } from "../style";

const Toggle = ({ bg, w, h, setIdMode, mode, onClass }) => {
    const [direction, setDirection] = useState(mode == 0 ? 47 : 0);

    const on = () => {
        setDirection(direction === 0 ? 47 : 0);
        setIdMode(direction === 0 ? 0 : 1);
    };

    return (
        <ToggleContainer
            bg={bg}
            w={w}
            h={h}
            className={onClass ? "toggle" : ""}
            onTap={on}
        >
            <ToggleCircle
                bg={direction === 0 ? "#C8FFD4" : "#B8E8FC"}
                onTap={on}
                animate={{ x: direction }}
                transition={{
                    type: "spring",
                    stiffness: 700,
                    damping: 30,
                }}
            ></ToggleCircle>
        </ToggleContainer>
    );
};

export default Toggle;
