import React from 'react';
import styled from 'styled-components';
import HeaderContainer from './../../Styles/HeaderContainer';
import Title from '../../Styles/SectionTitle';


//Header For Second Page
const HeaderWrap = styled(HeaderContainer)`
    align-items: flex-end;
    background-image: linear-gradient(to bottom right, #014421, #007070);
    padding-bottom: 30vh;
    box-shadow: #000 0px 0px 10px;
   
`;
const TitleText = styled(Title)`
    font-size: 2em;
    top: 15vh;

    @media(min-width: 916px) {
        top: 20vh;
    
    }

`;
const Header = () => (
    <HeaderWrap>
        <TitleText>
            Portfolio
        </TitleText>
    </HeaderWrap>
)
export default Header;