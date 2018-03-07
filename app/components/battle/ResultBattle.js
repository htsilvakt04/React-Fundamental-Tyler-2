let React = require('react');
let queryParser = require('query-string');
let Api = require('../../utils/apis/Api');
let Link = require('react-router-dom').Link;

let DisplayWinLose = require('./DisplayWinLose');

class ResultBattle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            winner: null,
            loser: null,
            error: null
        };
        this.isError = this.isError.bind(this);
    }
    isError (data) {
        let result = false;
        if (!data) {
            this.setState(() => {
                return {
                    error: 'There was error occurred, please try again',
                    loading: false
                }
            });
            result =  true;
        }
        return result;
    }
    componentDidMount () {
        let players = queryParser.parse(
            this.props.location.search
        );

        Api.getBattleResult([players.playerOne, players.playerTwo]).then(data => {
            // check error here
            let hasError = this.isError(data);

            if(hasError === false) {
                 //data[0] === winner; data[1] === loser
                this.setState(function () {
                     return {
                         loading: false,
                         winner: data[0],
                         loser: data[1],
                         error: null
                     }
                });
            } // end if
        })
    }

    render () {
        let error = this.state.error;
        let winner = this.state.winner;
        let loser = this.state.loser;
        let loading = this.state.loading;

        // check error here
        if (error) {
            return (
                <div>
                    <p>{error}</p>
                    <Link to='/battle'>Make New Match</Link>
                </div>
            );
        }

        return (
            <div className='row'>
                {!loading
                    ? <DisplayWinLose winner={winner} loser={loser}/>
                    : <p>Loading...</p>  }
            </div>
        )
    }
}
module.exports = ResultBattle;