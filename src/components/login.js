import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormattedMessage } from "react-intl";


function Login() {

  const [formValues, setFormValues] = useState({email:"", password:""})

  const handleEmailChange = ((e) => {
    setFormValues({...formValues, email: e.target.value})
  });
 
  const handlePasswordChange = ((e) => {
    setFormValues({...formValues, password: e.target.value})
  });
 
  const verificateEmail = ((email) => {
    email = email.trim()
    if(email.length < 9) return false
    if(email.indexOf("@") === -1) return false
    if(email.indexOf(".") === -1) return false
    return true
  })

  const verificatePassword = ((password) => {
    password = password.trim()
    if(password.length < 6) return false
    return true
    })

const clickSubmit = (event) => {
    event.preventDefault();

    fetch('https://back.com/api/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
    })
      .then(response => response.json())
      .then(responseData => {
      console.log(responseData);
      })
      .catch(error => {
      console.error('Error:', error);
      });
};

  return (
    <div>
      <h1><FormattedMessage id="InicioSesion"/></h1>
     
      <Form>
      <Form.Group className="mb-6" controlId="formBasicEmail">
        <Form.Label><FormattedMessage id="Correo"/></Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} value={formValues.email}/>
        {!verificateEmail(formValues.email) && <Form.Text className="text-muted"><FormattedMessage id="FormatoCorreo"/></Form.Text>}
      </Form.Group>
 
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><FormattedMessage id="Contraseña"/></Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password} />
        {!verificatePassword(formValues.password) && <Form.Text className="text-muted"><FormattedMessage id="FormatoContraseña"/></Form.Text>}
      </Form.Group>
      <Button variant="primary" onClick={clickSubmit}>
      <FormattedMessage id="InicioSesion"/>
      </Button>
    </Form>
    </div>
  );
}

export default Login;