const React = require('react');
const PropTypes = require('prop-types');
const PlayerInfo = require('./PlayerInfo');


function WinLosePlayer({data, label}) {
    let {info, score} = data;

    return (
        <div>
            <h1 className='header'>{label}</h1>
            <h3 style={{textAlign: 'center'}}>Score: {score}</h3>
            <PlayerInfo img={info.avatar_url} username={info.login}>
                <ul className='space-list-item'>
                    {info.name && <li>{info.name}</li>}
                    {info.location && <li>{info.location}</li>}
                    {info.company && <li>{info.company}</li>}
                    <li>Followers: {info.followers}</li>
                    <li>Following: {info.following}</li>
                    <li>Public repos: {info.public_repos}</li>
                    {info.blog && <li><a href={info.blog}>{info.blog}</a></li>}
                </ul>
            </PlayerInfo>
        </div>
    );
}

WinLosePlayer.propTypes = {
    data: PropTypes.shape({
        score: PropTypes.number,
        info: PropTypes.object
    }).isRequired,
    label: PropTypes.string.isRequired
};

function DisplayWinLose ({winner, loser}) {
    return (
        <div className='row'>
            <WinLosePlayer data={winner} label='Winner'/>
            <WinLosePlayer data={loser} label='Loser'/>
        </div>
    )
}

DisplayWinLose.propTypes = {
    winner: PropTypes.shape({
        score: PropTypes.number,
        info: PropTypes.object
    }),
    loser: PropTypes.shape({
        score: PropTypes.number,
        info: PropTypes.object
    })
};
module.exports = DisplayWinLose;