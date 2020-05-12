import React, { useEffect } from 'react';
import styled from 'styled-components';
import MainSectionItem from '../../../Styles/MainSectionItem';

import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

const Container = styled(MainSectionItem)`
  box-shadow: none;
  margin: 0 auto;
  
  height: 45vh;
  font-size: 1em;
  padding: 3vh 10vw 5vh 10vw;
 

  @media(max-width: 768px) {
    position: relative;
  }
  @media(min-width: 768px) {
    max-width: 40%;
    margin-left: 0;
  }
  @media(min-width: 1060px) {
    max-width: 30%;
  }
`;
const Form = styled.form`
  text-align: left;
  font-size: .9em;


`;
const Input = styled.input`
  
  margin-top: .5vh;
  height: 3vh;
  max-width: 60%;
  text-align: left;
  font-size: .9em;
  font-family: calibri;

  
  
  
`;

const EmailInput = styled(Input)`
  min-width: 75%;
`;
const Label = styled.label`
  margin-top: 1vh;
`;
const SubmitInput = styled.input`
cursor: pointer;
  padding: 0;
  margin-bottom: 1vh;
  height: 4vh;
  min-width: 6vw;
  font-size: .9em;
`;
const TextArea = styled.textarea`
margin-top: .5vh;
font-size: 1em;
width: 85%;
resize: none;
  
`;
const Err = styled.div`
  font-size: .9em;
  color: red;
`;


function ContactForm() {
  const { register, handleSubmit, reset, errors } = useForm();
  

  function onSubmit(data, e) {
    
    console.log(data);
    emailjs.sendForm('gmail', 'contactform', e.target, 'user_tN4XKDZZkrN2RZ1CGvRyw')
    


  }

  

  
    
      
    
      




  return (
    
    <Form onSubmit={handleSubmit(onSubmit)}>

      <Label><b>Name:</b></Label><br />
      <Input name="name"  ref={register({ required: true })} /><br />
      {errors.name && <Err>*This field is required</Err>}<br />

      <Label><b>Email:</b></Label><br />
      <EmailInput name="email" ref={register({ required: true })} /><br />
      {errors.email && <Err>*This field is required</Err>}<br />

      <Label><b>Message:</b></Label><br />
      <TextArea type="textarea" rows="4" name="message" ref={register({ required: true })} /><br />
      {errors.message && <Err>*This field is required</Err>}<br />

      <SubmitInput type="submit" />

    </Form>
  );
}

const FormItems = () => (
  <Container>
    <ContactForm />
  </Container>
)
export default FormItems;
