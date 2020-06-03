import React from 'react';
import styled from 'styled-components';
import MainSectionItem from '../../Styles/MainSectionItem';
import Title from '../../Styles/SectionTitle';
import Form from './Form/Form';

const Container = styled(MainSectionItem)`
    box-shadow: none;
    height: 0;
    margin-bottom: 2.5vh;
    margin-top: 5vh;
`;
const FormBorder = styled.div`
    border: 2px solid #000;
`;
const SectionTitle = styled(Title)`
    color: #000;
    margin-bottom: 5vh;
    margin-left: 2vw;
    text-align: left;
    text-shadow: none;
`;
const SubText = styled(SectionTitle)`
    font-size: .65em;
    font-weight: normal;
    margin-bottom: 2vh;
    margin-left: 1vw;
`;
const PrimarySection = () => (
    <Container>
        <SectionTitle>
            Get in Touch <br />
            <SubText>I'll email you back as soon as I can!</SubText>
        </SectionTitle>
        <FormBorder>
            <Form />
        </FormBorder>
    </Container>
)
export default PrimarySection;