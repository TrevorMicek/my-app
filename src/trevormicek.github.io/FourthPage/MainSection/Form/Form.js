import React, { useEffect } from 'react';
import styled from 'styled-components';
import MainSectionItem from '../../../Styles/MainSectionItem';

import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

//Form Styles
const Container = styled(MainSectionItem)`
  box-shadow: none;
  font-size: 1em;
  height: 45vh;
  margin: 0 auto;
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
const FormObject = styled.form`
  font-size: .9em;
  text-align: left;
`;
const Input = styled.input`
  font-size: .9em;
  font-family: calibri;
  height: 3vh;
  margin-top: .5vh;
  max-width: 60%;
  text-align: left;
`;
const EmailInput = styled(Input)`
  min-width: 75%;
`;
const Label = styled.label`
  margin-top: 1vh;
`;
const SubmitInput = styled.input`
  cursor: pointer;
  font-size: .9em;
  height: 4vh;
  margin-bottom: 1vh;
  min-width: 6vw;
  padding: 0;
`;
const TextArea = styled.textarea`
  font-size: 1em;
  margin-top: .5vh;
  resize: none;
  width: 85%;
`;
const Err = styled.div`
  font-size: .9em;
  color: red;
`;
//Form Logic w/ errors, reset, handle submit
function ContactForm() {
  const { register, handleSubmit, reset, errors } = useForm();
  function onSubmit(data, e) {
    console.log(data);
    emailjs.sendForm('gmail', 'contactform', e.target, 'user_tN4XKDZZkrN2RZ1CGvRyw')
  }
  
  return (
    <FormObject onSubmit={handleSubmit(onSubmit)}>
      <Label><b>Name:</b></Label><br />
      <Input name="name"  ref={register({ required: true })} /><br />
      {errors.name && <Err>*This field is required</Err>}<br />

      <Label><b>Email:</b></Label><br />
      <EmailInput name="email" ref={register({ required: true })} /><br />
      {errors.email && <Err name="err">*This field is required</Err>}<br />

      <Label><b>Message:</b></Label><br />
      <TextArea type="textarea" rows="4" name="message" ref={register({ required: true })} /><br />
      {errors.message && <Err>*This field is required</Err>}<br />
      
      <SubmitInput type="submit" />
        
    </FormObject>
  );
}
const Form = () => (
  <Container>
    <ContactForm />
  </Container>
)
export default Form;