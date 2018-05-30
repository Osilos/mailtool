import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import { Typography, Paper, Snackbar, TextField } from 'material-ui';
import { green, red, orange } from 'material-ui/colors';
import TextInput from './TextInput';
import { Button } from 'material-ui';
import ScheduleInput from './ScheduleInput';
import weekDays from '../../constants/weekDays';
import { Chip } from 'material-ui';

const mailStyle = {
    cursor: 'text'
};

const chipsStyle = {
    cursor: 'move'
};

class EditTemplateForm extends Component {
    constructor(props) {
        super();
    }

    generateContent(content) {
        const inputs = content.split('%%');
        let i = 0;
        return inputs.map(input => {
            if (i++ % 2 == 0) {
                return <span key={i}>{input}</span>;
            } else {
                let parsedinput = JSON.parse(input);
                if (parsedinput.type === 'space') return <br key={i} />;
                return (
                    <Chip
                        style={chipsStyle}
                        key={i}
                        label={parsedinput.type + ' : ' + parsedinput.id}
                    />
                );
            }
        });
    }

    render() {
        const content = this.generateContent(this.props.content);
        //const inputs = this.generateInputs(this.props.content);

        return (
            <Grid container item xs={12}>
                <Grid item xs={4}>
                    <Paper square elevation={5} className="sideForm">
                        {'here go input'}
                    </Paper>
                </Grid>
                <Grid item xs={8} style={mailStyle}>
                    <Paper
                        square
                        elevation={2}
                        className="mailContainer"
                        id="mailContent"
                    >
                        {content}
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default EditTemplateForm;
