import React, { useState } from 'react';
import styled from 'styled-components';

import SecondPane from './Carousel/SecondPane';
import FirstPane from './Carousel/FirstPane';
import ThirdPane from './Carousel/ThirdPane';
import FourthPane from './Carousel/FourthPane';

import MainSectionItem from '../../Styles/MainSectionItem';
import CarouselOne from './CarouselOne';

import SectionTitle from '../../Styles/SectionTitle';

const Container = styled(MainSectionItem)`
    height: 0;
    min-width: 75%;
    padding-bottom: 5vh;
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

const Toggle = () => {
    const [isToggled, setToggled] = useState(false);
    
    const toggleTrueFalse = () => setToggled(!isToggled);

    return (
    <>
        {isToggled === false ? 
            <>
                <Container>
                    <a onClick={toggleTrueFalse}>
                        <TitleTwo>Side Projects</TitleTwo>
                    </a> 
                    <TitleOne>Freelance</TitleOne>
                </Container> 
                <>
                <FirstPane />
                <SecondPane />
                </>
            </>
            : null}


        {isToggled !== false ? 
            <>
                <Container> 
                <TitleThree>Side Projects</TitleThree>
                <a onClick={toggleTrueFalse}>
                    <TitleFour>Freelance</TitleFour>
                </a>
                </Container> 

                <ThirdPane />
                <FourthPane />
            </> 
        : null}

    </>
    );
};




export default Toggle;