import React from 'react';
import {PropTypes} from 'prop-types';

export default function PlayerInfo ({img, username, children}) {
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
