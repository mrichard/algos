import React, {Component} from 'react';

export default class Note extends Component {

    render() {
        return <div>{this.props.text}</div>;
    }
}

Note.displayName = 'Note';

Note.propTypes = {
    text: React.PropTypes.string
};
