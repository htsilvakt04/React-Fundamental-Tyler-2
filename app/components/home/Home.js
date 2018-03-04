let React = require('react');
let Link = require('react-router-dom').Link;

function Home (props) {
    return (
        <div>
            <h1 className='battle-text'>Github Battle: Battle your friends... and stuff.</h1>
            <Link to='/battle'>Battle</Link>
        </div>
    )
}
module.exports = Home;
