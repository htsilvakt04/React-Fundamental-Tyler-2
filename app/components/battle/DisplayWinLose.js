let React = require('react');
let PropTypes = require('prop-types');
let PlayerInfo = require('./PlayerInfo');


function WinLosePlayer(props) {
    let data = props.data;
    let info = data.info;
    let score = data.score,
        img = data.info.avatar_url,
        username = data.info.name;
    return (
        <div>
            <h1 className='header'>{props.label}</h1>
            <h3 style={{textAlign: 'center'}}>Score: {score}</h3>
            <PlayerInfo img={img} username={username}>
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

function DisplayWinLose (props) {
    return (
        <div className='row'>
            <WinLosePlayer data={props.winner} label='Winner'/>
            <WinLosePlayer data={props.loser} label='Loser'/>
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