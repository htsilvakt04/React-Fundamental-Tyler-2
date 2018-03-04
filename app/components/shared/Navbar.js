let React = require('react');
let NavLink = require('react-router-dom').NavLink;

function Navbar (props) {
    return (
        <ul className='navbar'>
            <li>
                <NavLink exact to='/' activeClassName='active'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/popular' activeClassName='active'>Popular</NavLink>
            </li>
            <li>
                <NavLink to='/battle' activeClassName='active'>Battle</NavLink>
            </li>

        </ul>
    );
}

module.exports = Navbar;