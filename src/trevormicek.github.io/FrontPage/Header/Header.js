import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import HeaderContainer from './../../Styles/HeaderContainer';
import HeaderTitle from './HeaderTitle';
import HeaderText from './HeaderText';
import HeaderButton from './HeaderButton';
import Overlay from './../../Styles/Overlay';
import SecondImg from '../../Images/SecondImg.jpg';
import Theme from './../../Theme';
import TrevorMicekResume from './TrevorMicekResume.pdf';

//Home Page Header Component
const HeaderWrap = styled(HeaderContainer)`
    background: url(${SecondImg}) no-repeat top center;
    background-size: 100% 100%;
    padding-bottom: 12.5vh;
    
    @media(min-width: 768px) {
        padding-bottom: 15vh;
    }
    @media(min-width: 916px) {
        font-size: 1em;
        padding-bottom: 10vh;
    }
    @media(min-width: 1060px) {
        font-size: 1.1em;
        padding-bottom: 17.5vh;
    }
    @media(min-width: 1360px) {
        font-size: 1.1em;
        padding-bottom: 15vh;
    }
`;
const OverlayStyle = styled(Overlay)`
    background: rgba(00, 00, 00, .15);

    @media(max-width: 768px) {
        background: rgba(00, 00, 50, .15);
    }
`;
const PDF = styled.a`
    color: #fff;
    display: inline-block;
    margin: 0 2vw 3vh auto;
    padding-right: 0;
    position: relative;
    top: 4vh;
    text-align: left;
    z-index: 5;
    
    @media(min-width: 768px) {
        font-size: 1.2em;
    }

    @media(min-width: 916px) {
        font-size: 1em;
        margin-right: 15vw;
    }
`;
const Email = styled.a`
    color: #fff;
    display: inline-block;
    margin: 0 2vw 0vh auto;
    padding-right: 0;
    position: relative;
    top: 5vh;
    text-align: right;
    z-index: 5;
    
    @media(min-width: 768px) {
        font-size: 1.1em;
    }

    @media(min-width: 916px) {
        margin-right: 15vw;
        font-size: 1.15em;
        margin-bottom: 0;
    }
`;
const Header = (props) => (
    <HeaderWrap>
        <OverlayStyle />
        <HeaderTitle>
            Welcome to my website made<br /> 100% with ReactJS!
        </HeaderTitle>
        <HeaderText>
            Hello, I'm Trevor Micek and I am a Front End Developer, <br />
            looking for a position at a business in Colorado.
        </HeaderText>
        <PDF href={TrevorMicekResume} download="TrevorMicekResume.pdf">Resume</PDF>
        <Email href="mailto:miceking@comcast.net">E-mail Me</Email>
        <Link to="/portfolio">
        <HeaderButton>Portfolio</HeaderButton>
        </Link>
    </HeaderWrap>
)
export default Header;