import React, { Component } from 'react';
import { TextField } from 'material-ui';
import PropTypes from 'prop-types';

class TextInput extends Component {
    render() {
        return (
            <TextField
                label={this.props.id}
                id={this.props.id}
                type="text"
                defaultValue={this.props.default ? this.props.default : ''}
                onChange={this.props.onChange}
            />
        );
    }
}

TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    default: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default TextInput;
