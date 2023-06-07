// import React from 'react'
import '../components/pages/pages.css';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';


export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

  return (
    <div className='LogButton'>
      <Button variant="primary" onClick={() => loginWithRedirect()}>Login:</Button>{' '}
    </div>
  )
}
