let React = require('react');
let PropTypes = require('prop-types');

function Lang(props) {
    return (
        <li className={props.currentLang === props.lang ? 'selected' : null} key={props.lang} onClick={props.onClick.bind(null, props.lang)}>{props.lang}</li>
    );
}


function LangList (props) {
    let languages = ['All','Javascript', 'Ruby', 'Java', 'Css', 'Python'];

    return (
        <ul className='lang-wrapper'>
            {languages.map(function (lang) {
               return <Lang key={lang} lang={lang} currentLang={props.currentLang} onClick={props.onClick}/>
            })}
        </ul>
    )
}

LangList.propTypes = {
    onClick: PropTypes.func.isRequired,
    currentLang: PropTypes.string.isRequired
};

module.exports = LangList;