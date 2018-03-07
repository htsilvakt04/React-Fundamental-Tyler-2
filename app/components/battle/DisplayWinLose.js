let React = require('react');
let PropTypes = require('prop-types');

function DisplayWinLose (props) {
    return (
        <div>
            <h2>Winner is: {props.winner.info.name} with score: {props.winner.score}</h2>
            <h2>Loser is: {props.loser.info.name} with score: {props.loser.score}</h2>
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