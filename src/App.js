import React from 'react';
import { useState } from 'react';
import { Container, Button, Alert, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [contador, setContador] = useState(0);

const incrementar = () => {
  setContador(contador + 1);
};

const decrementar = () => {
  if (contador > 0){
    setContador(contador - 1);
  }
};
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Contador de Pessoas</Navbar.Brand>
      </Navbar>
      <Container className="mt-5 container-custom" style={{ maxWidth: '250px', margin: 'auto', textAlign: 'center'}}>
        <Alert variant="info">
          Pessoas atualmente: {contador}
        </Alert>
  
        <Button variant="success" onClick={incrementar} className="mr-2">
          Incrementar
        </Button>
  
        <Button variant="danger" onClick={decrementar}>
          Decrementar
        </Button>
      </Container>
    </div>
  )
}

export default App;
