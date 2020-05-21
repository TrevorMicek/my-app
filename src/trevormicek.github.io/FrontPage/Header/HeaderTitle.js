import React from 'react';
import styled from 'styled-components';

//Header Title
export default styled.h1`
    font-size: 1.5em;
    font-family: helvetica;
    margin-top: 8vh;
    padding-bottom: 2vh;
    z-index: 5;

    @media(min-width: 916px) {
        margin: 10vh auto 4vh auto;
        font-size: 1.75em;
        letter-spacing: 1px;
        max-width: 60%
    }
`;
