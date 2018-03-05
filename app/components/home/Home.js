let React = require('react');
let Link = require('react-router-dom').Link;
let PropTypes = require('prop-types');

function Home (props) {
    return (
        <div className='home-container  '>
            <h1 className='battle-text'>{props.title}</h1>
            <Link className='button'>{props.linkText}</Link>
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

module.exports = Home;
