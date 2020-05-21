import React from 'react';
import styled from 'styled-components';

//Header Text
export default styled.h4`
    font-family: helvetica;
    font-size: 1em;
    margin: 0 auto 2vh auto;
    max-width: 46vw;
    padding-right: 30%;
    text-align: left;
    z-index: 5;

    @media(min-width: 768px) {
        max-width: 46%;
    }
    @media(min-width: 916px) {
        font-size: 1.25em;
        margin-bottom: 0;
        max-width: 40%;
    }
`;
