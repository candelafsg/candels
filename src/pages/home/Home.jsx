

import './home.css';
import { NavLink } from 'react-router';

export default function Home() {
    return (
        <div>
            <NavLink to="/portfolio">PORTFOLIO</NavLink>
        </div>
    );
}