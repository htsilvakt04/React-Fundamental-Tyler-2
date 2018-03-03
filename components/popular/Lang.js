let React = require('react');
let PropTypes = require('prop-types');

function Lang (props) {
    return (
        <li className={props.class} onClick={props.onClick.bind(null, props.name)}>{props.name}</li>
    )
}

Lang.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    class: PropTypes.string
};

module.exports = Lang;