import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import {
  Button,  
  Form,  
  FormGroup,
  Label,  
  Input,
} from 'reactstrap';

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    const jsonSend = {
      first_name: firstName,
      last_name: lastName,
      email,
      password
    };
    const SIGNUP_URI = `${process.env.REACT_APP_BASE_URL}/signup`;
    try {
      await axios.post(SIGNUP_URI, jsonSend);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      alert('Successfull signup!');
    } catch (error) {
      alert('Error on signup');
    }
  };

  return (
    <React.Fragment>
      <h1 className="mb-4">Signup on Waldo App</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <Label>First Name</Label>
          <Input 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            id="firstName"
            name="inputFirstName" 
            placeholder="type your first name" />
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text" 
            name="lastName" 
            id="inputLastname" 
            placeholder="type your last name" />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="type your email" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="examplePassword"
            placeholder="type your password here" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </React.Fragment>
  );
}
 
export default Signup;