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

const containerBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '12px',
    alignItems: 'center'
};

const labelTitleStyle = {
    fontSize: '32px'
};

const weekDays = [
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
    'Dimanche'
];

class ScheduleInput extends Component {
    constructor(props) {
        super();
        this.update = props.onChange;
        this.state = {
            id: props.id,
            hours: this.calculateHours(props.start, props.end, props.delta),
            days: {}
        };
    }

    calculateHours(start, end, delta) {
        let hours = [];
        for (let i = start; i <= end; i += delta) {
            hours.push(i);
        }
        return hours;
    }

    getStateCheck(day, hour) {
        if (this.state.days[day]) {
            return this.state.days[day].indexOf(hour) > -1;
        }
        return false;
    }

    onCheck(day, hour, b) {
        const days = this.state.days;
        if (b) {
            if (!days[day]) {
                days[day] = [];
            }
            if (days[day].indexOf(hour) === -1) days[day].push(hour);
        } else {
            if (days[day]) {
                const index = days[day].indexOf(hour);
                if (index > -1) {
                    days[day].splice(index, 1);
                }
                if (days[day].length == 0) {
                    delete days[day];
                }
            }
        }
        this.setState(days);
        this.update(this.state.id, days);
    }

    render() {
        return (
            <FormControl fullWidth={true}>
                <FormLabel style={labelTitleStyle} component="legend">
                    Planning
                </FormLabel>
                {weekDays.map(day => {
                    return (
                        <div key={day}>
                            <FormLabel component="legend">{day}</FormLabel>
                            <FormGroup row={true}>
                                {this.state.hours.map(hour => {
                                    return (
                                        <div
                                            key={hour}
                                            style={containerBoxStyle}
                                        >
                                            {hour}h
                                            <Checkbox
                                                checked={this.getStateCheck(
                                                    day,
                                                    hour
                                                )}
                                                onChange={(e, b) => {
                                                    this.onCheck(day, hour, b);
                                                }}
                                                style={checkboxStyle}
                                            />
                                        </div>
                                    );
                                })}
                            </FormGroup>
                        </div>
                    );
                })}
            </FormControl>
        );
    }
}

export default ScheduleInput;
