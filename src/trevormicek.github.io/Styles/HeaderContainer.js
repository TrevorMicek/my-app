import React from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';

//Header Section Styles
export default styled(Wrapper)`
    padding-bottom: 12.5vh;
    margin-bottom: 5vh;
    background: none;
    background-size: 100% 100%;
    box-shadow: #000 0px 0px 10px; 
    color: #fff;
    letter-spacing: 1px;
    text-shadow: #000 0px 0px 10px;
    text-align: center;
    top: 6vh;
    right: 0;
    z-index: 5;
    max-width: 100%;
    
    @media(min-width: 916px) {
        padding-bottom: 40vh;
        font-size: 1.45em;
    }
`;