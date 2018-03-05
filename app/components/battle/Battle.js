let React = require('react');
let Api = require('../../utils/apis/Api');

let PlayerInputForm = require('./PlayerInputForm');
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
    }

    handleSubmit (id, playerName) {
        let newState = {};
        newState[id + 'Name'] = playerName;
        newState[id + 'Img'] = 'https://github.com/' + playerName + '.png?size=200';
        this.setState(() => newState);
    }

    render () {
        return (
            <div className="row">
                {this.state.playerOneImg
                    ? <p>Player info</p>
                    : <PlayerInputForm label='Player One' onSubmit={this.handleSubmit} id='playerOne'/>}
                {this.state.playerTwoImg
                    ? <p>Player info</p>
                    : <PlayerInputForm label='Player Two' onSubmit={this.handleSubmit} id='playerTwo'/>}
            </div>
        )
    }
}
module.exports = Battle;