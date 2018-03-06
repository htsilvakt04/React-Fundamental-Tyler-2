let React = require('react');
let PropTypes = require('prop-types');

function DisplayWinLose () {
    return (
        <div>DIsplay win-lose component</div>
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