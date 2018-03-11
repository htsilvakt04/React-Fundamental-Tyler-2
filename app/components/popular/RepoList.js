let React = require('react');
let PropTypes = require('prop-types');
let RepoListItem = require('./ListItem/RepoListItem');


export default function RepoList ({list: repoList}) {
    return (
        <ul className='popular-list'>
            {repoList && repoList.map((repo, index) => {
                return (
                    <li key={repo.name} className='popular-item'>
                        <div className='popular-rank'>#{index + 1}</div>
                        <RepoListItem repo={repo}/>
                    </li>)
            })}
        </ul>
    )
}

RepoList.propTypes = {
    list: PropTypes.array
};

