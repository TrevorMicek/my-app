import React from 'react';
import styled from 'styled-components';

//Header Text
export default styled.h4`
    font-size: 1em;
    font-family: helvetica;
   
    margin: 0 auto 2vh auto;
    max-width: 46vw;
    text-align: left;
    padding-right: 30%;
    z-index: 5;


    @media(min-width: 768px) {
        
        
        max-width: 46%;
        
    }


    @media(min-width: 916px) {
        
        margin-bottom: 0;
        font-size: 1.25em;
        max-width: 40%;
        
    }


`;
