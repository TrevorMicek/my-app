import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import NavBarContainer from './NavBarContainer';
import NavBarItem from './NavBarItem';
import MobileNav from './MobileNav';


const NavBarItemMobile = styled(NavBarItem)`
    @media only screen and (min-device-width: 320px) {
        display: inline-block;
       
        min-width: 80%;
        margin: 0;
        margin-top: 1.5vh;

        padding: 1.5vh 4vw;
        top: 0vh;
        left: 5vw;
        font-size: .9em;
        box-shadow: none;

        :active {
        -webkit-box-shadow: inset 0px 0px 5px lightgrey;
        -moz-box-shadow: inset 0px 0px 5px lightgrey;
        box-shadow: inset 0px 0px 5px lightgrey;
        
        top: .25vh;
        
    }
    }
`;


const XStyles = styled.img`
    
    display: block;
    height: 5vh;
    width: 6vw;
    position: fixed;
    z-index: 11;
   
   
    top: 3.5vh;
    right: 7.5vw;
    
    cursor: pointer;
  
    -webkit-transition-y: transform .6s ease-out;
    -moz-transition: transform .6s ease-out;
    -o-transition: transform .6s ease-out;
    -ms-transition: transform .6s ease-out;
    transition: transform .6s ease-out;
    

    @media only screen and (max-device-width: 560px) {
        display: inline-block;
        
    };
    @media only screen and (min-device-width: 768px) and (max-device-width: 1060px) {
        display: none;
    };

`;


const DropDownMenu = () => (
    
<>
        <XStyles src={require('../../Images/X.png')} />
        
            
                <NavLink to="/">
                    <NavBarItemMobile>Home</NavBarItemMobile>
                </NavLink>

                <NavLink to="/portfolio">
                    <NavBarItemMobile>Portfolio</NavBarItemMobile>
                </NavLink>

                <NavLink to="about">
                    <NavBarItemMobile>About</NavBarItemMobile>
                </NavLink>

                <NavLink to="contact">
                    <NavBarItemMobile>Contact</NavBarItemMobile>
                </NavLink>
            
        </>
    
)
export default DropDownMenu;