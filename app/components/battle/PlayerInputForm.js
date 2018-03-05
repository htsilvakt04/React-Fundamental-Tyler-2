let React = require('react');
let PropTypes = require('prop-types');

class PlayerInputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerName: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (event) {
        this.setState({
            playerName: event.target.value
        });
    }
    handleSubmit (event) {
        event.preventDefault();
        this.props.onSubmit(this.props.id, this.state.playerName);
    }
    render () {
        let playerName = this.state.playerName;
        return (
            <div>
                <form onSubmit={this.handleSubmit} onChange={this.handleChange} className='column'>
                    <label htmlFor={this.props.id} className='header'>{this.props.label}</label>
                    <input type="text" id={this.props.id} value={this.state.playerName} autoComplete='off'/>
                    <button className='button' type='submit' disabled={!playerName || playerName.length < 3}>Submit</button>
                </form>
            </div>
        )
    }
}
PlayerInputForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

module.exports = PlayerInputForm;