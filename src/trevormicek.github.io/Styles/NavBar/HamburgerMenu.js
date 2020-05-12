import React from 'react';
import styled from 'styled-components';
import HamburgerImg from '../../Images/HamburgerImg.png';



const HamburgerStyles = styled.img`
height: 5vh;
width: 9vw;
position: fixed;
z-index: 11;
margin: auto 0;
top: 3vh;
right: 6vw;

cursor: pointer;
-webkit-transition-y: transform .6s ease-out;
    -moz-transition: transform .6s ease-out;
    -o-transition: transform .6s ease-out;
    -ms-transition: transform .6s ease-out;
    transition: transform .6s ease-out;
    
@media(min-width: 915px) {
        display: none;
    }
    @media(max-width: 768px) {
        display: inline-block;
    }

`;

const Hamburger = () => (
    <>
    
        <HamburgerStyles src={require('../../Images/HamburgerImg.png')} />
    </>
);
export default Hamburger;