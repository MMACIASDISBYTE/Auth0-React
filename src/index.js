import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

// Configuracion del dominio y clientId, deben de generarlas nuevamente en una variable de entorno (archivo .ENV)
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId =  process.env.REACT_APP_AUTH0_CLIENT_ID;

root.render(
  <React.StrictMode>
    {/* DEBEMOS ENCERRAR LA APP EN EL AuthPrivider0 para poder manejar la sesion en toda la APP */}
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      useRefreshTokens={true}
      useRefreshTokensFallback={false}
      authorizationParams={{
      redirect_uri:"http://localhost:3000//dev-7qwkde4r318nfwz7.us.auth0.com/capacitor/http://localhost:3000/callback"
    }}
    >
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
