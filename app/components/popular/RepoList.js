let React = require('react');
let PropTypes = require('prop-types');
let RepoListItem = require('./ListItem/RepoListItem');


function RepoList (props) {
    return (
        <ul className='popular-list'>
            {props.list && props.list.map((repo, index) => {
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

module.exports = RepoList;