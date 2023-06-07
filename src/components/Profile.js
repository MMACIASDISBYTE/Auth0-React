// import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import 'react-json-pretty/themes/monikai.css'; // es opcional le da el estilo al JSONPretty
import './pages/pages.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Profile = () => {
  // const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  // const client_id = process.env.REACT_APP_AUTH0_CLIENT_ID;

  const { user, isAuthenticated, getAccessTokenSilently  } = useAuth0();
  
  
  
  // NO DEVUELVE EL TOKEN FUNCIONAL (siendo invalido)
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


  
    // METODO DE Libreria de AUTH0  https://auth0.com/docs/quickstart/spa/react/02-calling-an-api
  //   const [userMetadata, setUserMetadata] = useState(null);
  // useEffect(() => {
  //   const getUserMetadata = async () => {
  //     const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  
  //     try {
  //       const accessToken = await getAccessTokenSilently({
  //         authorizationParams: {
  //           audience: `https://${domain}/api/v2/`,
  //           scope: "read:current_user",
  //         },
  //       });
  //       console.log(accessToken);

  //       const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
  
  //       console.log(userDetailsByIdUrl)

  //       const metadataResponse = await fetch(userDetailsByIdUrl, {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       });
  
  //       const { user_metadata } = await metadataResponse.json();
  
  //       setUserMetadata(user_metadata);
  //       console.log(user_metadata);
  //     } catch (e) {
  //       console.log(e.message);
  //     }
  //   };
  
  //   getUserMetadata();
  // }, [getAccessTokenSilently, user?.sub]);

  // console.log(userMetadata);
  
  return (
    //valido que el usuario este autenticado para traerlo a la vista, sino rompe
    isAuthenticated && (
      <>
        <div className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={user.picture} />
          <Card.Body>
            <Card.Title><h3>{user.nickname}</h3></Card.Title>
            <Card.Text>
            <p>{user.name} {user.email}</p>
            {/* <p>{userMetadata}</p> */}
            </Card.Text>
            <Link
            // to={`/info-user/${userMetadata}`}
            to={`/info-user/${token}`}
            // to={{ pathname: '/info-user', state: { token: token } }} onClick={handleInfoClick}
            >
              <Button variant="primary">Info</Button>
            </Link>
          </Card.Body>
        </Card>
        </div>
        <div>

        </div>
        
        {/* <Link to='/guest'><Button variant="primary">Guest</Button></Link> */}
      </>
    )
  )
}