let React = require('react');
let PropTypes = require('prop-types');

function WinLosePlayer(props) {
    return (
        <div>
            {JSON.stringify(props, null, 2)}
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
        <div>
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