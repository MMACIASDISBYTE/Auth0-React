// import React from 'react'
import '../components/pages/pages.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';


export const LoginButton = () => {
    const { user, loginWithRedirect, getAccessTokenSilently } = useAuth0();

    // METODO DE Libreria de AUTH0  https://auth0.com/docs/quickstart/spa/react/02-calling-an-api
    const [userMetadata, setUserMetadata] = useState(null);
  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  
      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: `https://${domain}/api/v2/`,
            scope: "read:current_user",
          },
        });
        console.log(accessToken);

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
  
        console.log(userDetailsByIdUrl)

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        const { user_metadata } = await metadataResponse.json();
  
        setUserMetadata(user_metadata);
        console.log(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };
  
    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);
  // HASTA METODO DE LIBRERIA
  console.log(userMetadata);


  return (
    <div className='LogButton'>
      <Button variant="primary" onClick={() => loginWithRedirect()}>Login:</Button>{' '}
    </div>
  )
}
