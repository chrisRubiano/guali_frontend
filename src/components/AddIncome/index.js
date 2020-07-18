import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthContext';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';

const AddIncome = () => { 
  const { isAuth } = useContext(AuthContext);
  const  idUser  = isAuth.idUser;
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [isExpense, setIsExpense] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();
    const jsonSend = {
      amount,
      isExpense,
      title,
      category
    };
    const MOVEMENT_URI = `${process.env.REACT_APP_BASE_URL}/users/${idUser}/movement`;
    
    try {
      await axios.post(MOVEMENT_URI, jsonSend, {
        headers: { Authorization: `Bearer ${localStorage.getItem('maui_token')}` }
      },);
      setAmount('');
      setTitle('');
      setCategory('');
      alert('Successfull movement!');
    } catch (error) {
      alert(error);
    }
  };

  if (!isAuth) return <Redirect to="/" />    

  return (
    <React.Fragment>
      <div className="fondoC">
        <h1 className="mb-4 centrarT">Agregar un Ingreso</h1>
        <Form onSubmit={handleForm}>
            <FormGroup>
              <Label>Monto: </Label>
              <Input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                id="amount"
                name="inputamount"
                placeholder="Ingresa el monto" />
            </FormGroup>
            <FormGroup>
              <Label>Titulo: </Label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                name="title"
                id="inputLastname"
                placeholder="Ingresa el nombre del gasto" />
            </FormGroup>
            <FormGroup>
              <Label>Categoria</Label>
              <Input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                name="category"
                id="examplecategory"
                placeholder="Ingresa la categoria" />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
      </div>
    </React.Fragment>
  );
}

export default AddIncome