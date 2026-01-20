import './header.css'
import { NavLink } from 'react-router'

export const Header = () => {
  return (
    <header className='header'>
      <NavLink to="/">
        <img className="header-logo" src="/img/ICONO.png" alt="Logo" />
      </NavLink>
    </header>
  )
}

