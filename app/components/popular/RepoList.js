let React = require('react');
let PropTypes = require('prop-types');


function RepoList (props) {
    return (
        <ul>
            {props.list && props.list.map(repo => {
                return <li key={repo.name}>{repo.name}</li>
            })}
        </ul>
    )
}

RepoList.propTypes = {
    list: PropTypes.array
};

module.exports = RepoList;