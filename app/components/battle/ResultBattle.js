let React = require('react');
let queryParser = require('query-string');
let Api = require('../../utils/apis/Api');

let DisplayWinLose = require('./DisplayWinLose');

class ResultBattle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            winner: null,
            loser: null
        };
    }

    componentDidMount () {
        let urlInfo = queryParser.parse(
            this.props.location.search
        );
        let playerOneName = urlInfo.playerOne;
        let playerTwoName = urlInfo.playerTwo;

        Api.getBattleResult(playerOneName, playerTwoName).then(data => {
            //data[0] === winner; data[1] === loser
            this.setState(function () {
                return {
                    loading: false,
                    winner: data[0],
                    loser: data[1]
                }
            });
        })
    }

    render () {
        return (
            <div>
                {!this.state.loading
                    ? <DisplayWinLose winner={this.state.winner} loser={this.state.loser}/>
                    : <p>Loading...</p> }
            </div>
        )
    }
}
module.exports = ResultBattle;