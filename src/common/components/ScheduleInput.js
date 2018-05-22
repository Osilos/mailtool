import React, { Component } from 'react';
import { FormControl } from 'material-ui';
import { FormLabel } from 'material-ui';
import { Checkbox } from 'material-ui';
import { FormGroup } from 'material-ui';

const checkboxStyle = {
    width: '20px',
    height: '20px',
    borderRadius: '0px',
    margin: '0px'
};

const labelTitleStyle = {
    fontSize: '32px'
};

class ScheduleInput extends Component {
    constructor(props) {
        super();
        this.state = {
            hours: this.calculateHours(props.start, props.end, props.delta)
        };
    }

    calculateHours(start, end, delta) {
        let hours = [];
        for (let i = start; i <= end; i += delta) {
            hours.push(i);
        }
        return hours;
    }

    render() {
        return (
            <FormControl fullWidth={true}>
                <FormLabel style={labelTitleStyle} component="legend">
                    Planning
                </FormLabel>
                <FormLabel component="legend">Lundi</FormLabel>
                <FormGroup row={true}>
                    {this.state.hours.map(hour => {
                        return <Checkbox style={checkboxStyle} />;
                    })}
                </FormGroup>
            </FormControl>
        );
    }
}

export default ScheduleInput;
