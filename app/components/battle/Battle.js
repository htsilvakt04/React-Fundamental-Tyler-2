import React from 'react';
import {Link} from 'react-router-dom';

import PlayerInputForm from './PlayerInputForm';
import PlayerInfo from './PlayerInfo';

class Battle extends React.Component {
    state = {
        playerOneName: '',
        playerOneImg: null,
        playerTwoImg: null,
        playerTwoName: '',
    }
    handleReset = (id) => {
        this.setState(() => ({
            [id + 'Name']: '',
            [id + 'Img']: null
        }))
    }

    handleSubmit = (id, playerName) => {
        this.setState(() => ({
            [id + 'Name']: playerName,
            [id + 'Img']: `https://github.com/${playerName}.png?size=200`
        }));
    }

    render () {
        let {playerOneImg, playerTwoImg, playerOneName, playerTwoName} = this.state;

        let linkToBattleResult = {
            pathname: this.props.location.pathname + '/results',
            search: '?playerOne=' + playerOneName + '&playerTwo=' + playerTwoName
        };

        return (
            <div className="battle-container">
                <div className="row">
                    {playerOneImg
                        ? <PlayerInfo img={playerOneImg} username={playerOneName}>
                                <button className='reset' onClick={this.handleReset.bind(null, 'playerOne')}>Reset</button></PlayerInfo>
                        : <PlayerInputForm label='Player One' onSubmit={this.handleSubmit} id='playerOne'/>}
                    {playerTwoImg
                        ? <PlayerInfo img={playerTwoImg} username={playerTwoName}>
                            <button className='reset' onClick={this.handleReset.bind(null, 'playerTwo')}>Reset</button></PlayerInfo>
                        : <PlayerInputForm label='Player Two' onSubmit={this.handleSubmit} id='playerTwo'/>}
                </div>
                {playerOneImg && playerTwoImg &&
                    <Link to={linkToBattleResult} style={{marginTop: '100px'}} className='button row'>
                        Battle
                    </Link>}

            </div>
        )
    }
}

export default Battle;