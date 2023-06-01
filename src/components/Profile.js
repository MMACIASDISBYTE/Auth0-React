// import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css'; // es opcional le da el estilo al JSONPretty

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently  } = useAuth0();
  const [ token, setToken ] = useState('');
  
  useEffect(() =>{

    const fetchToken = async () =>{
      try{
        const accessToken = await getAccessTokenSilently();
        console.log(accessToken);
        setToken(accessToken);
      }catch(error){
        console.log('Error al obtener el token de acceso:', error);
      }
    }
    
    if(isAuthenticated){
      fetchToken();
    }
  }, [getAccessTokenSilently, isAuthenticated]);
  
  return (
    //valido que el usuario este autenticado para traerlo a la vista, sino rompe
    isAuthenticated && (
      <>
        <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={user.picture} />
          <Card.Body>
            <Card.Title><h3>{user.nickname}</h3></Card.Title>
            <Card.Text>
            <p>{user.name} {user.email}</p>
            </Card.Text>
            <Link to={`/info-user/${token}`}><Button variant="primary">Info</Button></Link>
          </Card.Body>
        </Card>
        
        </div>
        
        <Link to='/guest'><Button variant="primary">Guest</Button></Link>
      </>
    )
  )
}
