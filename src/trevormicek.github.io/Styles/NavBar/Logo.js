import React from 'react';
import styled from 'styled-components';

//Logo Style
export default styled.div`
    position: relative;
    margin: auto;
    margin-left: 7.5vw;
    top: 0;
    left: 7.5vw;
    text-align: left;
        
    @media(max-width:768px) {
        left: 1.5vw;
        top: 0;
        font-size: 1.25em
    }

    @media(min-width: 916px) {
        display: inline-block;
        font-size: 1.25em;
    }

`;
