import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import { Typography, Paper, Snackbar } from 'material-ui';
import { green, red, orange } from 'material-ui/colors';
import TextInput from './TextInput';
import { Button } from 'material-ui';
import ScheduleInput from './ScheduleInput';
import weekDays from '../../constants/weekDays';

const copyButtonStyle = {
    marginTop: '50px'
};

class TemplateForm extends Component {
    constructor(props) {
        super();

        this.state = {
            values: {}
        };
    }

    generateContent(content) {
        const inputs = content.split('%%');
        let i = 0;
        return inputs.map(input => {
            if (i++ % 2 == 0) {
                return <span key={i}>{input}</span>;
            } else {
                let parsedinput = JSON.parse(input);
                let value = '';
                if (this.state.values[parsedinput.id]) {
                    value = this.state.values[parsedinput.id];
                } else if (parsedinput.default) {
                    value = parsedinput.default;
                }
                switch (parsedinput.type) {
                    case 'space':
                        return <br key={i} />;
                        break;
                    case 'text':
                        return <span key={i}>{value}</span>;
                        break;
                    case 'schedule':
                        return (
                            <span key={i}>
                                {this.computeSheduleToDisplay(value)}
                            </span>
                        );
                        break;
                    default:
                        return <span key={i}>{value}</span>;
                }
            }
        });
    }

    computeSheduleToDisplay(shedule) {
        return (
            <ul>
                {weekDays.map(day => {
                    if (shedule[day]) {
                        return (
                            <li key={day}>
                                <strong>{day}</strong> :
                                {shedule[day].map(hour => {
                                    return ' ' + hour + 'h /';
                                })}
                            </li>
                        );
                    }
                })}
            </ul>
        );
    }

    generateInputs(content) {
        let inputs = content.split('%%');
        for (var i = inputs.length - 1; i >= 0; i -= 2) {
            inputs.splice(i, 1);
        }

        inputs = inputs.map(item => {
            return JSON.parse(item);
        });

        return inputs;
    }

    createInput(input) {
        switch (input.type) {
            case 'text':
                return (
                    <TextInput
                        key={input.id}
                        id={input.id}
                        default={input.default}
                        onChange={this.handleTextInputChange.bind(this)}
                    />
                );
                break;
            case 'schedule':
                return (
                    <ScheduleInput
                        key={input.id}
                        start={9}
                        end={18}
                        delta={1}
                        id="planning"
                        onChange={this.handleScheduleChange.bind(this)}
                    />
                );
            case 'space':
                return '';
            default:
                throw 'Sorry we run I a problem, please reload the page. INFO : no match type for ' +
                    input.type;
        }
    }

    handleTextInputChange(e) {
        const values = this.state.values;
        values[e.target.id] = e.target.value;
        this.setState(() => {
            return {
                values: values
            };
        });
    }

    handleButtonCopy() {
        const content = document.getElementById('mailContent');

        const selected =
            document.getSelection().rangeCount > 0
                ? document.getSelection().getRangeAt(0)
                : false;

        document.getSelection().removeAllRanges();
        const range = new Range();
        range.setStart(content, 0);
        range.setEnd(content, content.childNodes.length);
        document.getSelection().addRange(range);
        document.execCommand('copy');

        document.getSelection().removeAllRanges();
        if (selected) {
            document.getSelection().addRange(selected);
        }

        this.setState({ openCopyMessage: true });
    }

    handleScheduleChange(id, value) {
        const values = this.state.values;
        values[id] = value;
        this.setState(() => {
            return {
                values: values
            };
        });
    }

    render() {
        const content = this.generateContent(this.props.content);
        const inputs = this.generateInputs(this.props.content);

        return (
            <Grid container item xs={12}>
                <Grid item xs={4}>
                    <Paper square elevation={5} className="sideForm">
                        {inputs.map(item => this.createInput(item))}
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper
                        square
                        elevation={2}
                        className="mailContainer"
                        id="mailContent"
                    >
                        {content}

                        <Button
                            onClick={this.handleButtonCopy.bind(this)}
                            style={copyButtonStyle}
                            fullWidth={true}
                            color="primary"
                            variant="raised"
                            children={'COPY'}
                        />
                        {this.state.openCopyMessage && (
                            <Snackbar
                                anchorOrigin={{
                                    horizontal: 'left',
                                    vertical: 'bottom'
                                }}
                                open={true}
                                autoHideDuration={3000}
                                message={
                                    'Congrats ! Your mail has been well saved in your clipboard.'
                                }
                                onClose={() => {
                                    this.setState({ openCopyMessage: false });
                                }}
                            />
                        )}
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default TemplateForm;
