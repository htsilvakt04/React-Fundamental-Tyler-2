import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function Home ({title, linkText}) {
    return (
        <div className='home-container'>
            <h1 className='battle-text'>{title}</h1>
            <Link className='button'>{linkText}</Link>
        </div>
    )
}

Home.propTypes = {
    title: PropTypes.string,
    linkText: PropTypes.string
};
Home.defaultProps = {
    title: 'Github Battle: Battle your friends... and stuff.',
    linkText: 'Battle'
};
Link.defaultProps = {
    to: '/battle'
};

export default Home;
