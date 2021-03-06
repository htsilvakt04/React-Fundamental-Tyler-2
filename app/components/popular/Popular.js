import React from 'react';
import {PropTypes} from 'prop-types';
import {getHottestRepos} from '../../utils/apis/Api';

import RepoList from './RepoList';
import LangList from './LangList';
import Loading from '../shared/Loading';

class Popular extends React.Component {
    state = {
        selectedLang: 'All',
        repos: null
    };
    componentDidMount () {
       this.updateLang(this.state.selectedLang);
    }
    updateLang = async (langName) => {
        this.setState(() => ({
            selectedLang: langName, repos: null
        }));
        
        const repos = await getHottestRepos(langName);
        this.setState(() => ({repos}) );
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
export default Popular;
