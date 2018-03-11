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
        let {playerName} = this.state;
        let {id, label} = this.props;
        return (
            <div>
                <form onSubmit={this.handleSubmit} onChange={this.handleChange} className='column'>
                    <label htmlFor={id} className='header'>{label}</label>
                    <input type="text" id={id} value={playerName} autoComplete='off'/>
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
export default PlayerInputForm;