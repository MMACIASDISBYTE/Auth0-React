import {  useState } from 'react';
import '../Header.css'

export const Header = () => {
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
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/profile">Profile</a>
            </li>
            <li>
              <a href="/logout">LogOut</a>
            </li>
          </ul>
        )}
      </div>
    </header>
  )
}
