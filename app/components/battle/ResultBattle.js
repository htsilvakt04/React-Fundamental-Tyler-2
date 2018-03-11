const React = require('react');
const queryParser = require('query-string');
const Api = require('../../utils/apis/Api');
const Link = require('react-router-dom').Link;

const DisplayWinLose = require('./DisplayWinLose');
const Loading = require('../shared/Loading');

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
            this.setState(() => ({
                error: 'There was error occurred, please try again',
                loading: false
            }));
            result =  true;
        }
        return result;
    }
    componentDidMount () {
        let {playerOne, playerTwo} = queryParser.parse(
            this.props.location.search
        );

        Api.getBattleResult([playerOne, playerTwo]).then(([winner, loser]) => {
            // check error here
            let hasError = this.isError(data);

            if(hasError === false) {
                 //data[0] === winner; data[1] === loser
                this.setState(() => ({
                     loading: false,
                     winner,
                     loser,
                     error: null
                }));
            } // end if
        })
    }

    render () {
        let {error, winner, loser, loading} = this.state;
        // check error here
        if (error) {
            return (
                <div>
                    <p>{error}</p>
                    <Link className="link-back" to='/battle'>Make New Match</Link>
                </div>
            );
        }

        return (
            <div>
                {!loading
                    ? <DisplayWinLose winner={winner} loser={loser}/>
                    : <Loading/>  }
            </div>
        )
    }
}
module.exports = ResultBattle;