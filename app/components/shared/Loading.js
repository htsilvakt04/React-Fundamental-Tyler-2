let React = require('react');
let PropTypes = require('prop-types');

class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label: props.label
        };
    }

    componentDidMount () {
        let stopper = this.props.label + '...';

        this.interval = setInterval(function () {
            if (this.state.label === stopper) {
                this.setState(() => {
                    return {label: this.props.label}
                })
            } else {
                this.setState((prevState)=> {
                    return {label: prevState.label + '.'}
                });
            }
        }.bind(this), this.props.intervalTime);
    }

    componentWillUnmount () {
        clearInterval(this.interval);
    }

    render () {
        return (
            <p className='loading-label' style={this.props.style}>{this.state.label}</p>
        )
    }
}

Loading.propTypes = {
    label: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired,
    intervalTime: PropTypes.number.isRequired
};

Loading.defaultProps = {
    label: 'Loading',
    style: {color: '#00D1B2', textAlign: 'center'},
    intervalTime: 200
};
module.exports = Loading;