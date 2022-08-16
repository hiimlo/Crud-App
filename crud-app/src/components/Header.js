import './Header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return(
        <header>
            <h1>Crud App</h1>
            <div className='links'>
                <NavLink to="/" className='link' activeClassName='active' exact>
                    Notes
                </NavLink>
                <NavLink to="/add" className='link' activeClassName='active' exact>
                    Add Notes
                </NavLink>
            </div>
        </header>
    );
}