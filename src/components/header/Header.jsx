import './header.css'
import { NavLink } from 'react-router'
import { EllipsisVertical, CircleX } from 'lucide-react';
import { useState } from 'react';


export const Header = () => {

  const [open, setOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleOpen = () => {
    if (open) {
      setIsClosing(true);
      setTimeout(() => {
        setOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setOpen(true);
      setIsClosing(false);
    }
  };
  return (
    <header className='header'>
      <NavLink to="/">
        <img className="header-logo" src="/img/ICONO.png" alt="Logo" />  </NavLink>
         <NavLink to="/"> <img className="header-logo-desk" src="/img/LOGO.png" alt="Logo" /></NavLink>


<div className="header-menu-container">
        {open ? <CircleX className="close-icon" onClick={handleOpen} /> : <EllipsisVertical onClick={handleOpen} />}

{
  open && (
   
    <ul className={`header-ul ${isClosing ? 'closing' : ''}`}>
      <li className="header-li"><NavLink to="/portfolio">PORTFOLIO</NavLink></li>
      <li className="header-li"><NavLink to="/contact">CONTACTO</NavLink></li>
    </ul>
  )
}
</div>



{/* nav desk */}
         <ul className="header-ul-desk">
          <li className="header-li"><NavLink to="/portfolio">PORTFOLIO</NavLink></li>
          <li className="header-li"><NavLink to="/contact">CONTACTO</NavLink></li>
         </ul>
    
    </header>
  )
}

