import React from 'react';
import queryParser from 'query-string';
import {getBattleResult} from '../../utils/apis/Api';
import {Link} from 'react-router-dom';

import DisplayWinLose from './DisplayWinLose';
import Loading from '../shared/Loading';

class ResultBattle extends React.Component {
    state = {
        loading: true,
        winner: null,
        loser: null,
        error: null
    }
    isError = (data) => {
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
        getBattleResult([playerOne, playerTwo]).then(([winner, loser]) => {
            // check error here
            let hasError = this.isError(winner);
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
export default ResultBattle;