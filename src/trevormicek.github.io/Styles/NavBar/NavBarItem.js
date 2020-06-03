import React from 'react';
import styled from 'styled-components';

//Navigation Bar Items
export default styled.button`

    background: #fff;
    border: 1px solid;
    box-shadow: lightgrey 2px 4px 7px;
    color: #000;
    cursor: pointer;
    margin: 0 .75vw;
    min-height: 30px;
    outline: none;
    padding: 1vh 1.5vw;
    position: relative;
    right: 14vw;
    text-decoration: none;
    z-index: 3;

    :active {
        -webkit-box-shadow: inset 0px 0px 5px lightgrey;
        -moz-box-shadow: inset 0px 0px 5px lightgrey;
        box-shadow: inset 0px 0px 5px lightgrey;
        top: .25vh;
    }
    @media(max-width: 915px) {
        display: none;
    }
    @media(min-width: 916px) {
        display: inline-block;
        font-size: 1em;
        padding: 1.5vh 1.5vw;
    }
`;