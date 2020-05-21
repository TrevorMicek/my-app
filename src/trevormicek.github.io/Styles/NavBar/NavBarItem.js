import React from 'react';
import styled from 'styled-components';

//Navigation Bar Items
export default styled.button`
    text-decoration: none;
    z-index: 3;
    border: 1px solid;
    margin: 0 .75vw;
    padding: 1vh 1.5vw;
    position: relative;
    right: 14vw;
    color: #000;
    background: #fff;
    box-shadow: lightgrey 2px 4px 7px;
    cursor: pointer;
    min-height: 30px;
    outline: none;
    
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
        padding: 1.5vh 1.5vw;
        font-size: 1em;
    }
`;