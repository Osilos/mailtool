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

        this.state = {
            inputDrage: null
        };

        this.chipOnMouseUp = this.chipOnMouseUp.bind(this);
        this.chipOnMouseDown = this.chipOnMouseDown.bind(this);
        this.chipOnMouseLeave = this.chipOnMouseLeave.bind(this);
        this.chipOnMouseMove = this.chipOnMouseMove.bind(this);
    }

    generateContent(content) {
        const inputs = content.split('%%');
        let i = 0;
        return inputs.map(text => {
            if (i++ % 2 == 0) {
                const words = text.split(' ');
                return words.map((word, index) => {
                    return <span key={word + index}>{word} </span>;
                });
            } else {
                let parsedinput = JSON.parse(text);
                if (parsedinput.type === 'space') return <br key={i} />;
                return (
                    <Chip
                        style={chipsStyle}
                        key={i}
                        label={parsedinput.type + ' : ' + parsedinput.id}
                        onMouseDown={this.chipOnMouseDown}
                        onMouseUp={this.chipOnMouseUp}
                        onMouseLeave={this.chipOnMouseLeave}
                        onMouseMove={this.chipOnMouseMove}
                    />
                );
            }
        });
    }

    chipOnMouseMove(e) {
        const chip =
            e.target.nodeName === 'div' ? e.target : e.target.parentElement;
        if (this.state.inputDrag === chip) {
            //e.target.style.left
            chip.style.left = e.clientX - 30 + 'px';
            chip.style.top = e.clientY - 15 + 'px';
        }
    }

    chipOnMouseDown(e) {
        const chip =
            e.target.nodeName === 'DIV' ? e.target : e.target.parentElement;
        this.setState({ inputDrag: chip });
        chip.style.position = 'absolute';
        chip.style.left = e.clientX - 30 + 'px';
        chip.style.top = e.clientY - 15 + 'px';

        console.log(e.clientX);
    }

    chipOnMouseUp(e) {
        const chip =
            e.target.nodeName === 'DIV' ? e.target : e.target.parentElement;
        if (this.state.inputDrag === chip) {
            this.setState({ inputDrag: null });
        }
    }

    chipOnMouseLeave(e) {
        const chip =
            e.target.nodeName === 'div' ? e.target : e.target.parentElement;
        if (this.state.inputDrag === chip) {
            console.log('mouse leave chip');
            this.setState({ inputDrag: null });
        }
    }

    getContent(content) {
        return this.generateContent(content);
    }

    render() {
        const content = this.getContent(this.props.content);
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
