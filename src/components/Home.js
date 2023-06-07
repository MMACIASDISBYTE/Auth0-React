import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LogOutButton } from './LogOutButton';
import { LoginButton } from './LoginButton';
import { Profile } from './Profile';
import { Header } from './Header';
import { Footer } from './Footer';

export const Home = () => {

    // metodos de Auth0
  const {isAuthenticated, isLoading} = useAuth0();

  if(isLoading) return <h1>Loading...</h1>;

  return (
    <>
    <Header />
        {/* vemos si esta eutenticado, si lo esta mostramos solo logout, sino login */}
      {
        isAuthenticated ? <LogOutButton/> : <LoginButton/>
      }
        <Profile />
      <Footer/>
    </>
  )
}