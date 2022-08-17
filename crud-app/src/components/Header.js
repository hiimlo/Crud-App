import './Header.css';
import { NavLink } from 'react-router-dom';
import './Letter Magic.ttf';

export default function Header() {
    return(
        <header>
            <div className='title'>Note Board</div>
            <div className='links'>
                <NavLink to="/" className='link' activeClassName='active' exact>
                    Notes
                </NavLink>
                <NavLink to="/addnotes" className='link' activeClassName='active'>
                    Add Notes
                </NavLink>
            </div>
        </header>
    );
}