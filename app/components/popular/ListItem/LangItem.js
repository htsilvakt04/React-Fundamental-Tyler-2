let React = require('react');
let PropTypes = require('prop-types');
function LangItem({currentLang, lang, onClick}) {
    return (
        <li className={currentLang === lang ? 'selected' : null} key={lang} onClick={onClick.bind(null, lang)}>{lang}</li>
    );
}

LangItem.propTypes = {
    currentLang: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};


module.exports = LangItem;