let React = require('react');

function LangItem(props) {
    return (
        <li className={props.currentLang === props.lang ? 'selected' : null} key={props.lang} onClick={props.onClick.bind(null, props.lang)}>{props.lang}</li>
    );
}

module.exports = LangItem;