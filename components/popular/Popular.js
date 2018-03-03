let React = require('react');
let PropTypes = require('prop-types');

let Lang = require('./Lang');


class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLang: 'All'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (langName) {

        if (langName !== this.state.selectedLang) {
            this.setState({selectedLang: langName})
        }

    }

    render () {
        let allLangs = ['All','Javascript', 'Ruby', 'Java', 'Css', 'Python'];

        return (
            <ul>
                {allLangs.map(function (lang) {
                    return <Lang class={this.state.selectedLang === lang ? 'selected': ''}
                                 name={lang} key={lang} onClick={this.handleClick}/>
                }.bind(this))}
            </ul>
        )
    }
}
module.exports = Popular;