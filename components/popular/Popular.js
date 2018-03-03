let React = require('react');
let PropTypes = require('prop-types');

let Lang = require('./Lang');


class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLang: 'All'
        };
        this.updateLang = this.updateLang.bind(this);
    }

    updateLang (langName) {
        this.setState({selectedLang: langName});
    }

    render () {
        let allLangs = ['All','Javascript', 'Ruby', 'Java', 'Css', 'Python'];

        return (
            <ul className='lang-wrapper'>
                {allLangs.map(function (lang) {
                    return <Lang class={this.state.selectedLang === lang ? 'selected': null}
                                 name={lang} key={lang} onClick={this.updateLang}/>
                }.bind(this))}
            </ul>
        )
    }
}
module.exports = Popular;