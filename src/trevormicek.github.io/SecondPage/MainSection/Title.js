import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

import MainSectionItem from '../../Styles/MainSectionItem';
import SectionTitle from '../../Styles/SectionTitle';

import FirstPane from './Carousel/FirstPane';
import CarouselOne from './CarouselOne';
import CarouselTwo from './CarouselTwo';
import Title from './Carousel/Title';

//MainSection Title
const Container = styled(MainSectionItem)`
    height: 0;
    min-width: 75%;
    padding-bottom: 9vh;
    box-shadow: none;
    padding-left: 0;
    cursor: default;
    margin: inherit auto;

    @media(min-width: 916px) {
        
        font-size: 1.35em;

        
    }

`;


const TitleOne = styled(SectionTitle)`
    font-family: "Times New Roman";
    font-size: 1.2em;
    color: #000;
    background-color: #dedede;
    padding: 2.6vh 1vw;
    text-shadow: none;
    position: absolute;
    margin: auto 0;
    min-width: 46.5%;
        -webkit-box-shadow: inset 0px 0px 5px lightgrey;
        -moz-box-shadow: inset 0px 0px 5px lightgrey;
        box-shadow: inset 0px 0px 5px lightgrey;
        top: 0vh;
        left: 0vw;
        border: 1px solid;
    


    
`;
const TitleTwo = styled(SectionTitle)`
font-family: "Times New Roman";
    font-size: 1.2em;
    color: #000;
    background-color: #fff;
    padding: 2.6vh 2vw;
    text-shadow: none;
    position: absolute;
    margin: auto 0;
    min-width: 45%;
    cursor: pointer;
        -webkit-box-shadow: inset 0px 0px 5px lightgrey;
        -moz-box-shadow: inset 0px 0px 5px lightgrey;
        box-shadow: inset 0px 0px 5px lightgrey;
        top: 0vh;
        right: 0vw;
        border: 1px solid;
`;
const TitleThree = styled(SectionTitle)`
font-family: "Times New Roman";
    font-size: 1.2em;
    color: #000;
    background-color: #dedede;
    padding: 2.6vh 2vw;
    text-shadow: none;
    position: absolute;
    margin: auto 0;
    min-width: 45%;
        -webkit-box-shadow: inset 0px 0px 5px lightgrey;
        -moz-box-shadow: inset 0px 0px 5px lightgrey;
        box-shadow: inset 0px 0px 5px lightgrey;
        top: 0vh;
        right: 0vw;
        border: 1px solid;
`;
const TitleFour = styled(SectionTitle)`
font-family: "Times New Roman";
    font-size: 1.2em;
    color: #000;
    background-color: #fff;
    padding: 2.6vh 1vw;
    text-shadow: none;
    position: absolute;
    margin: auto 0;
    min-width: 46.5%;
    cursor: pointer;
        -webkit-box-shadow: inset 0px 0px 5px lightgrey;
        -moz-box-shadow: inset 0px 0px 5px lightgrey;
        box-shadow: inset 0px 0px 5px lightgrey;
        top: 0vh;
        left: 0vw;
        border: 1px solid;
`;

