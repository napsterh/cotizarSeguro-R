import React from 'react';
import './App.scss';
import { Steps, Step, NavigationComponentProps } from "react-step-builder";
import Login from './components/Login';
import Paciente from './components/Pariente';
import Plan from './components/Plan';
import Gracias from './components/Gracias';


const App = () => {

  return (
    <div>
      <Steps >
        <Step component={Login}/>
        <Step component={Paciente}/>
        <Step component={Plan}/>
        <Step component={Gracias}/>
      </Steps>
    </div>
  );
}

export default App;
