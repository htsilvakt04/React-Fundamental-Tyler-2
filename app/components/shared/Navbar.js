import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Navbar (props) {
    return (
        <ul className='nav'>
            <li>
                <NavLink exact to='/' activeClassName='active'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/popular' activeClassName='active'>Popular</NavLink>
            </li>
            <li>
                <NavLink exact to='/battle' activeClassName='active'>Battle</NavLink>
            </li>
        </ul>
    );
}
