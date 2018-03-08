let React = require('react');
let PropTypes = require('prop-types');

function PlayerInfo (props) {
    return (
        <div className='user-info column'>
            <img src={props.img} className='avatar' alt="User Avatar"/>
            <p className='username'>@{props.username}</p>
            {props.children}
        </div>
    );
}
PlayerInfo.propTypes = {
    img: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
};
module.exports = PlayerInfo;