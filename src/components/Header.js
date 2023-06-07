import {  useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../Header.css'
import { Link } from 'react-router-dom';
import { LogOutButton } from './LogOutButton';
import { LoginButton } from './LoginButton';
import { Profile } from './Profile';
import { Button } from 'react-bootstrap';



export const Header = () => {
  const {isAuthenticated} = useAuth0();
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
      setIsOpen(!isOpen);
    };


  return (
    <header>
      <img src='/LogoDisbyte_blanco.png' alt="Logo Disbyte" />
      <div style={{ flex: '1', textAlign: 'center' }}>
        <h1>Disbyte</h1>
      </div>
      <div>
        <button onClick={handleMenuToggle} >
          ☰
        </button>
        {isOpen && (
          <ul>
            <li>
            {
        isAuthenticated ? 
          <Link to={`/info-user/aaa`}>
            <p>Info</p>
          </Link>
            : <Profile/>
            }
            </li>
            <li>
            {
              isAuthenticated ? <LogOutButton/> : <LoginButton/>
            }
            </li>
            <Link to='https://www.disbyte.com/' target='_blank'><li>Web Disbyte</li></Link>
          </ul>
        )}
      </div>
    </header>
  )
}
