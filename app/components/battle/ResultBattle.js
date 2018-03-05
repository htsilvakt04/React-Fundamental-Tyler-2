let React = require('react');
let queryParser = require('query-string');
class ResultBattle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render () {
        let urlInfo = this.props.location;
        return (
            <div>
                info from Url: {urlInfo.pathname} + 'and queries are' + {urlInfo.search}
                <p>
                    {JSON.stringify(queryParser.parse(urlInfo.search))}
                </p>
            </div>

        )
    }
}
module.exports = ResultBattle;