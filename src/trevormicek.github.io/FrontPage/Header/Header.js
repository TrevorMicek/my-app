import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Theme from './../../Theme';
import SecondImg from '../../Images/SecondImg.jpg';
import Resume from './Resume.pdf';
import Overlay from './../../Styles/Overlay';
import HeaderContainer from './../../Styles/HeaderContainer';
import HeaderTitle from './HeaderTitle';
import HeaderText from './HeaderText';
import HeaderButton from './HeaderButton';

//Header Component
const HeaderWrap = styled(HeaderContainer)`
    background: url(${SecondImg}) no-repeat top center;
    background-size: 100% 100%;
    padding-bottom: 12.5vh;
    
    @media(min-width: 768px) {
        
        
        padding-bottom: 15vh;
        
    }

    @media(min-width: 916px) {
      padding-bottom: 10vh;
      font-size: 1em;
        
    }

    @media(min-width: 1060px) {
        
        padding-bottom: 17.5vh;
        font-size: 1.1em;
        
    }

    @media(min-width: 1360px) {
        
        padding-bottom: 15vh;
        font-size: 1.1em;
        
    }
    
`;
const OverlayStyle = styled(Overlay)`
    background: rgba(00, 00, 00, .05);

    @media(max-width: 768px) {
        background: rgba(00, 00, 50, .15);
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
        
        
        <Link to="/portfolio">
        <HeaderButton>Portfolio</HeaderButton>
        </Link>
    </HeaderWrap>
)
export default Header;
