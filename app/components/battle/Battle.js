let React = require('react');
let Api = require('../../utils/apis/Api');
let Link = require('react-router-dom').Link;

let PlayerInputForm = require('./PlayerInputForm');
let PlayerInfo = require('./PlayerInfo');

class Battle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerOneName: '',
            playerOneImg: null,
            playerTwoImg: null,
            playerTwoName: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleBattle = this.handleBattle.bind(this);
    }
    handleBattle () {

    }
    handleReset (id) {
        this.setState(() => {
            let newState = {};
            newState[id + 'Name'] = '';
            newState[id + 'Img'] = null;
            return newState;
        })
    }

    handleSubmit (id, playerName) {
        let newState = {};
        newState[id + 'Name'] = playerName;
        newState[id + 'Img'] = 'https://github.com/' + playerName + '.png?size=200';
        this.setState(() => newState);
    }

    render () {
        let playerOneImg = this.state.playerOneImg,
            playerTwoImg = this.state.playerTwoImg,
            playerOneName = this.state.playerOneName,
            playerTwoName = this.state.playerTwoName;

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
module.exports = Battle;