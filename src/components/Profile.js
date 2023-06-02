// import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import 'react-json-pretty/themes/monikai.css'; // es opcional le da el estilo al JSONPretty

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently  } = useAuth0();
  const [ token, setToken ] = useState('');

  // const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  // const client_id = process.env.REACT_APP_AUTH0_CLIENT_ID;

  // const [userMetadata, setUserMetadata] = useState(null);
  
    //NO DEVUELVE EL TOKEN FUNCIONAL
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

  // const location = useLocation();
  // const history = useHistory();
  // const handleInfoClick = () =>{
  //  history.push('/info-user', { token: token});
  // }
  
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
            <Link
            to={`/info-user/${token}`}
            // to={{ pathname: '/info-user', state: { token: token } }} onClick={handleInfoClick}
            >
              <Button variant="primary">Info</Button>
            </Link>
          </Card.Body>
        </Card>
        
        </div>
        
        <Link to='/guest'><Button variant="primary">Guest</Button></Link>
      </>
    )
  )
}
