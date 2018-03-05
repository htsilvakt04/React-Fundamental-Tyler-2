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
        let condition = !playerOneImg || !playerTwoImg;
        let style = {marginTop: '100px', display: (condition ? 'none' : 'block')};
        let linkToBattleResult = {
            pathname: this.props.location.pathname + '/results',
            search: '?playerOne=' + playerOneName + '&playerTwo=' + playerTwoName
        };

        return (
            <div className="battle-container">
                <div className="row">
                    {playerOneImg
                        ? <PlayerInfo onClick={this.handleReset} img={playerOneImg} username={playerOneName} id='playerOne'/>
                        : <PlayerInputForm label='Player One' onSubmit={this.handleSubmit} id='playerOne'/>}
                    {playerTwoImg
                        ? <PlayerInfo onClick={this.handleReset} img={playerTwoImg} username={playerTwoName} id='playerTwo'/>
                        : <PlayerInputForm label='Player Two' onSubmit={this.handleSubmit} id='playerTwo'/>}
                </div>
                <Link to={linkToBattleResult}  disabled={condition} style={style} className='button row'>
                    Battle
                </Link>
            </div>
        )
    }
}
module.exports = Battle;