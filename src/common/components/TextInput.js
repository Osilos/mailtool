import React, { Component } from "react";
import { TextField } from "material-ui";

class TextInput extends Component {
    
    render () {
        return <TextField id={this.props.id} type="text" defaultValue={this.props.default} onChange={this.props.onChange} />
    }
}

export default TextInput;