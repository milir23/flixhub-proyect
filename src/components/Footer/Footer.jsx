import React from 'react';
import './footer.css';
import logo from '../assets/image6.png';

function Footer() {
  return (
    <footer className='footer margsec'>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <a href="#">Sobre Nosotros</a>
        <a href="#">Contacto</a>
        <a href="#">Rating</a>
      </div>
    </footer>
  );
}
export default Footer;