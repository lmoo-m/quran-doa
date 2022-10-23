import React, { useState, useEffect } from "react";
import { Container } from "../style";
import axios from "axios";

const Content = ({ title }) => {
    const get = async () => {
        const { data } = await axios.get(
            "https://quran-endpoint.vercel.app/quran/"
        );
        console.log(data.data);
    };

    const getDoa = async () => {
        const { data } = await axios.get(
            "https://tanyadoa-api.herokuapp.com/all"
        );
        console.log(data.data);
    };

    useEffect(() => {
        title === "doa doa" ? getDoa() : get();
    });

    return (
        <Container h="100vh" d="flex" justify="center">
            <Container fluid>
                <h1>{title}</h1>
            </Container>
        </Container>
    );
};

export default Content;
