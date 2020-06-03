import React from 'react';
import styled from 'styled-components';

import Wrapper from './Wrapper';

//Header Section Styles
export default styled(Wrapper)`
    background: none;
    background-size: 100% 100%;
    box-shadow: #000 0px 0px 10px; 
    color: #fff;
    letter-spacing: 1px;
    margin-bottom: 5vh;
    max-width: 100%;
    padding-bottom: 12.5vh;
    right: 0;
    text-align: center;
    text-shadow: #000 0px 0px 10px;
    top: 6vh;
    z-index: 5;

    @media(min-width: 916px) {
        font-size: 1.45em;
        padding-bottom: 40vh;
    }
`;