import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';
import ProyectoState from './context/proyectoState';
import TareaState from './context/Tareas/tareaState';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autentificacion/authState';

function App() {

  console.log(process.env.REACT_APP_BACKEND_URL);

  return (
    <ProyectoState>
      <TareaState>
        <AlertaState>
          <AuthState>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
                <Route exact path="/proyectos" component={Proyectos} />
              </Switch>
            </BrowserRouter>
          </AuthState>
        </AlertaState>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
