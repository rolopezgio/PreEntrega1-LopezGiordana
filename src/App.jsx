import { useState } from 'react';
import NavBarComponents from './components/NavBarComponents/NavBarComponents';
import ButtonComponent from './components/ButtonComponent/ButtonComponent';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const App = () => {

  const [count, setCount] = useState(0);

  const sumar = () => {
    setCount(count + 1);
  }

  const restar = () => {
    setCount(count - 1);
  }

  return (
    <div>

      < ItemListContainer greeting="Bienvenido a nuestra tienda" />
      < NavBarComponents />
      <br />

      <div>
        <h2>Generá tu contador</h2>
        <h3>{count}</h3>
        <ButtonComponent label="Sumar" bsButtonType="outline-success" onClickFunction={sumar} />
        <ButtonComponent label="Restar" bsButtonType="outline-danger" onClickFunction={restar} />

      </div>
    </div>
  )
}

export default App; 
