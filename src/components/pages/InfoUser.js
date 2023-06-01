import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';
import Button from 'react-bootstrap/Button';



export const InfoUser = () => {

  const { user } = useAuth0();
  const { token } = useParams()
  return (
    <>
    <h2>Informacion que llega de AUTH0 del usuario</h2>
        <JSONPretty data={user} />
        <h3>Token:</h3>
        <JSONPretty data={token} />
    <Link to='/'><Button variant="primary">Home</Button></Link>

    </>
  )
}
