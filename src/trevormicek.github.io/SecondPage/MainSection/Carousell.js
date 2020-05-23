import React, { useState } from 'react';
import styled from 'styled-components';

import SecondPane from './Carousel/SecondPane';
import FirstPane from './Carousel/FirstPane';
import ThirdPane from './Carousel/ThirdPane';
import FourthPane from './Carousel/FourthPane';
import MainSectionItem from '../../Styles/MainSectionItem';
import SectionTitle from '../../Styles/SectionTitle';


//MainSection Title(Freelance||Side Projects)
const Container = styled(MainSectionItem)`
    box-shadow: none;
    cursor: default;
    height: 0;
    margin: inherit auto;
    min-width: 75%;
    padding-bottom: 9vh;
    padding-left: 0;

    @media(min-width: 916px) {
        font-size: 1.35em;
    }
`;

const TitleOne = styled(SectionTitle)`
    background-color: #dedede;
    border: 1px solid;
    color: #000;
    font-family: "Times New Roman";
    font-size: 1.2em;
    left: .5vw;
    margin: auto 0;
    min-width: 46.5%;
    padding: 2.6vh 1vw;
    position: absolute;
    text-shadow: none;
    top: 0vh;
    box-shadow: inset 0px 0px 5px lightgrey;
    -moz-box-shadow: inset 0px 0px 5px lightgrey;
    -webkit-box-shadow: inset 0px 0px 5px lightgrey; 

    @media(min-width: 915px) {
        left: 1.5vw;
    }
`;
const TitleTwo = styled(SectionTitle)`
    background-color: #fff;
    border: 1px solid;
    color: #000;
    cursor: pointer;
    font-family: "Times New Roman";
    font-size: 1.2em;
    right: .5vw;
    margin: auto 0;
    min-width: 45%;
    padding: 2.6vh 2vw;
    position: absolute;
    text-shadow: none;
    top: 0vh;
    box-shadow: inset 0px 0px 5px lightgrey;
    -moz-box-shadow: inset 0px 0px 5px lightgrey;
    -webkit-box-shadow: inset 0px 0px 5px lightgrey; 

    @media(min-width: 915px) {
        right: 1.5vw;
    }
`;
const TitleThree = styled(SectionTitle)`
    background-color: #dedede;
    border: 1px solid;
    color: #000;
    cursor: pointer;
    font-family: "Times New Roman";
    font-size: 1.2em;
    right: 0vw;
    margin: auto 0;
    min-width: 45%;
    padding: 2.6vh 2vw;
    position: absolute;
    text-shadow: none;
    top: 0vh;
    box-shadow: inset 0px 0px 5px lightgrey;
    -moz-box-shadow: inset 0px 0px 5px lightgrey;
    -webkit-box-shadow: inset 0px 0px 5px lightgrey; 

    @media(min-width: 915px) {
        right: 1.5vw;
    }
`;
const TitleFour = styled(SectionTitle)`
    background-color: #fff;
    border: 1px solid;
    color: #000;
    cursor: pointer;
    font-family: "Times New Roman";
    font-size: 1.2em;
    left: 0vw;
    margin: auto 0;
    min-width: 46.5%;
    padding: 2.6vh 1vw;
    position: absolute;
    text-shadow: none;
    top: 0vh;
    box-shadow: inset 0px 0px 5px lightgrey;
    -moz-box-shadow: inset 0px 0px 5px lightgrey;
    -webkit-box-shadow: inset 0px 0px 5px lightgrey; 

    @media(min-width: 915px) {
        left: 1.5vw;
    }
`;

//Toggle State Component Between Both Sets of Titles
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