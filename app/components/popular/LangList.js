let React = require('react');
let PropTypes = require('prop-types');

let LangItem = require('./ListItem/LangItem');


function LangList (props) {
    let languages = ['All','Javascript', 'Ruby', 'Java', 'Css', 'Python'];

    return (
        <ul className='lang-wrapper'>
            {languages.map(function (lang) {
               return <LangItem key={lang} lang={lang} currentLang={props.currentLang} onClick={props.onClick}/>
            })}
        </ul>
    )
}

LangList.propTypes = {
    onClick: PropTypes.func.isRequired,
    currentLang: PropTypes.string.isRequired
};

module.exports = LangList;