import React, { Component } from 'react';
import { FormControl } from 'material-ui';
import { FormLabel } from 'material-ui';
import { Checkbox } from 'material-ui';
import { FormGroup } from 'material-ui';
import PropTypes from 'prop-types';
import weekDays from '../../constants/weekDays';

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

    sort(a, b) {
        return a - b;
    }

    onCheck(day, hour, check) {
        const days = this.state.days;
        if (check) {
            if (!days[day]) {
                days[day] = [];
            }
            if (days[day].indexOf(hour) === -1) {
                days[day].push(hour);
                days[day].sort((a, b) => a - b);
            }
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

ScheduleInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
    delta: PropTypes.number.isRequired
};

export default ScheduleInput;
