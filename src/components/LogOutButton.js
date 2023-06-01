import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';


// import React from 'react';

export const LogOutButton = () => {

  // Metodo para cerrar sesion de Auth0
    const { logout } = useAuth0();
  return (
    <div>
        <Button variant="primary" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out:</Button>{' '}
    </div>
  )
}
