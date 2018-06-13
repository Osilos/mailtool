import React, { Component } from 'react';
import { Chip } from 'material-ui';

class MovedInput extends Component {
    constructor() {
        super();
        this.state = {
            x: 0,
            y: 0
        };
        this.onMouseMove = this.onMouseMove.bind(this);
    }

    componentWillMount() {
        document.addEventListener('mousemove', this.onMouseMove);
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', this.onMouseMove);
    }

    onMouseMove(e) {
        this.setState({
            x: e.clientX - 30,
            y: e.clientY - 15
        });
    }

    render() {
        const style = {
            position: 'absolute',
            left: this.state.x + 'px',
            top: this.state.y + 'px'
        };

        return (
            <Chip
                id="moved"
                style={style}
                label={this.props.type + ' : ' + this.props.name}
            />
        );
    }
}

export default MovedInput;
