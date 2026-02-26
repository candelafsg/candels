import './header.css'
import { NavLink } from 'react-router'

export const Header = () => {
  return (
    <header className='header'>
      <NavLink to="/">
        <img className="header-logo" src="/img/ICONO.png" alt="Logo" />  </NavLink>
         <NavLink to="/"> <img className="header-logo-desk" src="/img/LOGO.png" alt="Logo" /></NavLink>

         <ul className="header-ul">
          <li className="header-li"><NavLink to="/about">PORTFOLIO</NavLink></li>
          <li className="header-li"><NavLink to="/contact">CONTACTO</NavLink></li>
         </ul>
    
    </header>
  )
}

