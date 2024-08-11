import './App.css';
import { useState } from 'react';
import Contador from './components/Contador';
import Boton from './components/Boton';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const Sumar = () => { 
    setNumClicks(numClicks + 1);
  }
  const Reiniciar = () => {
    setNumClicks(0);
  }
  

  return (
    <div className="App">
      <Contador numClicks={numClicks} />
      <Boton
        text='Suma'
        esSuma={true}
        accion={Sumar} />
      <Boton
        text='Reiniciar'
        esSuma={false}
        accion={Reiniciar} />
    </div>
  );
}

export default App;
