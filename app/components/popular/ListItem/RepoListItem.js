let React = require('react');
let PropTypes = require('prop-types');

function RepoListItem ({repo}) {
    return (
        <ul className='space-list-item'>
            <li>
                <img className='avatar' src={repo.owner.avatar_url} alt='Repo image'/>
            </li>
            <li><a href={repo.html_url}>{repo.name}</a></li>
            <li>@{repo.owner.login}</li>
            <li>{repo.stargazers_count} starts</li>
        </ul>
    )
}
RepoListItem.propTypes = {
    repo: PropTypes.object.isRequired
};
module.exports = RepoListItem;
