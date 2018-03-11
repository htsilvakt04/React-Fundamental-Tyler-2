let React = require('react');
let PropTypes = require('prop-types');

function PlayerInfo ({img, username, children}) {
    return (
        <div className='user-info column'>
            <img src={img} className='avatar' alt="User Avatar"/>
            <p className='username'>@{username}</p>
            {children}
        </div>
    );
}
PlayerInfo.propTypes = {
    img: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
};
module.exports = PlayerInfo;