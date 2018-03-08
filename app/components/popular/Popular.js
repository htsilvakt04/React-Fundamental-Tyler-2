let React = require('react');
let PropTypes = require('prop-types');
let Api = require('../../utils/apis/Api');

let RepoList = require('./RepoList');
let LangList = require('./LangList');
let Loading = require('../shared/Loading');

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLang: 'All',
            repos: null
        };
        this.updateLang = this.updateLang.bind(this);
    }

    componentDidMount () {
       this.updateLang(this.state.selectedLang);
    }
    updateLang (langName) {
        this.setState((prevState, props) => {
            return {
                selectedLang: langName,
                repos: null
            }
        });

        Api.getHottestRepos(langName).then(repos => {
           this.setState(function () {
               return {
                   repos: repos
               }
           })
        });
    }

    render () {
        return (
            <div className='container'>
                <LangList currentLang={this.state.selectedLang} onClick={this.updateLang}/>
                {this.state.repos
                    ? <RepoList list={this.state.repos}/>
                    : <Loading/>}
            </div>
        )
    }
}
module.exports = Popular;