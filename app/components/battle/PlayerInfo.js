let React = require('react');
let PropTypes = require('prop-types');

function PlayerInfo (props) {
    return (
        <div className='user-info column'>
            <img src={props.img} className='avatar' alt="User Avatar"/>
            <p className='username'>@{props.username}</p>
            <button className='reset' onClick={props.onClick.bind(null, props.id)}>Reset</button>
        </div>
    );
}
PlayerInfo.propTypes = {
    img: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};
module.exports = PlayerInfo;