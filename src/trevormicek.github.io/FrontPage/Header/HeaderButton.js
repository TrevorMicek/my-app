import React from 'react';
import styled from 'styled-components';

//Header Button
export default styled.button`
    text-align: center;
    position: relative;
    margin: 0vh auto 0 auto;
    padding: 1vh 2vw;
    color: #fff;
    font-size: 2.5vh;
    text-shadow: #000 0px 0px 10px;
    letter-spacing: .75px;
    border-color: #006060;
    background-color: #307D7E; /*greenish blue*/
    cursor: pointer;
    min-height: 40px;
    top: 7.5vh;
    z-index: 5;
    outline: none;

    :active {
        -webkit-box-shadow: inset 0px 0px 5px #006060;
        -moz-box-shadow: inset 0px 0px 5px #006060;
        box-shadow: inset 0px 0px 5px #006060;
    }
     @media(max-width: 768px) {
        background-color: #328CA5;
    }
    @media(min-width: 768px) {
        font-size: 1.1em;
    }
    @media(min-width: 916px) {
        font-size: 1em;
        margin-bottom: 3vh;
        padding: 1.5vh 1vw;
    }
    @media(min-width: 1060px) {
        margin-bottom: 0vh;
    }
`;