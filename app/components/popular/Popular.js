const React = require('react');
const PropTypes = require('prop-types');
const Api = require('../../utils/apis/Api');

const RepoList = require('./RepoList');
const LangList = require('./LangList');
const Loading = require('../shared/Loading');

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
        this.setState(() => ({
            selectedLang: langName, repos: null
        }));

        Api.getHottestRepos(langName).then(repos => {
           this.setState(() => ({repos}) );
        });
    }

    render () {
        let {selectedLang, repos} = this.state;
        return (
            <div className='container'>
                <LangList currentLang={selectedLang} onClick={this.updateLang}/>
                {repos
                    ? <RepoList list={repos}/>
                    : <Loading/>}
            </div>
        )
    }
}
module.exports = Popular;