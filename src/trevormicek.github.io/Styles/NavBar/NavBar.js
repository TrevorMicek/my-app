import React from 'react';
import styled from 'styled-components';
import { HashRouter, Route, Link } from 'react-router-dom';

import Logo from './Logo';
import NavBarContainer from './NavBarContainer';
import NavBarItem from './NavBarItem';
import ScrollToTop from './ScrollToTop';
import MobileNav from './MobileNav';
import Hamburger from '../../Styles/NavBar/MobileNav';
import FirstPage from '../../FrontPage/FirstPage';
import SecondPage from '../../SecondPage/SecondPage';
import ThirdPage from '../../ThirdPage/ThirdPage';
import FourthPage from '../../FourthPage/FourthPage';


const NavBarStyles = styled.section`
        display: inline-block;
        width: 100%;
`;
const NavBar = () => (
        <NavBarStyles>
        <HashRouter>
                <ScrollToTop />
                <NavBarContainer>
                        <Logo>Trevor's Code!</Logo>

                        <MobileNav />	
                        
                        <Link to="/" activeStyle={{
                                backgroundColor: "lightgrey",
                                textDecoration: "underline"
                        }}>
                                <NavBarItem>Home</NavBarItem>
                        </Link>
                        <Link to="/portfolio">
                                <NavBarItem>Portfolio</NavBarItem>
                        </Link>
			<Link to="/about">
                                <NavBarItem>About</NavBarItem>
                         </Link>
			<Link to="/contact">
                                <NavBarItem>Contact</NavBarItem>
                        </Link>
	        </NavBarContainer>
	        
		<Route exact path="/" component={FirstPage} />
		<Route path="/portfolio" component={SecondPage} />
        	<Route path="/about" component={ThirdPage} />
        	<Route path="/contact" component={FourthPage} />
                
                
        </HashRouter>
        </NavBarStyles>
    
    
)
export default NavBar;
