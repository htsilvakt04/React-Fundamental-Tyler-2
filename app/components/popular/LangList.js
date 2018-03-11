let React = require('react');
let PropTypes = require('prop-types');

let LangItem = require('./ListItem/LangItem');


function LangList (props) {
    let languages = ['All','Javascript', 'Ruby', 'Java', 'Css', 'Python'];
    let {currentLang, onClick} = props;

    return (
        <ul className='lang-wrapper'>
            {languages.map( lang => (<LangItem key={lang} lang={lang} currentLang={currentLang} onClick={onClick}/>)  )}
        </ul>
    )
}

LangList.propTypes = {
    onClick: PropTypes.func.isRequired,
    currentLang: PropTypes.string.isRequired
};

module.exports = LangList;