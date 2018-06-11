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

const movingChipStyle = {
    position: 'absolute',
    backgroundColor: 'green'
};

const movedChipStyle = {
    backgroundColor: 'red'
};

const editStateEnum = ['IDLE', 'TEXT', 'INPUT'];

class EditTemplateForm extends Component {
    constructor(props) {
        super();

        this.state = {
            inputDrag: null,
            editState: editStateEnum[0]
        };

        this.chipOnMouseUp = this.chipOnMouseUp.bind(this);
        this.chipOnMouseDown = this.chipOnMouseDown.bind(this);
        this.chipOnMouseLeave = this.chipOnMouseLeave.bind(this);
        this.chipOnMouseMove = this.chipOnMouseMove.bind(this);
    }

    generateContentIdle(content) {
        const inputs = content.split('%%');
        let i = 0;
        return inputs.map(text => {
            if (this.isJson(text)) {
                return this.getInputAsChip(text, i++);
            } else {
                return <span key={i++}>{text} </span>;
            }
        });
    }

    generateContentInput(content) {
        const inputs = content.split('%%');
        let i = 0;
        return inputs.map((text, index) => {
            if (this.isJson(text)) {
                const parsedInput = JSON.parse(text);
                if (this.state.inputDrag.id == parsedInput.id) {
                    return this.getInputAsMoved(text);
                } else {
                    return this.getInputAsChip(text, i++);
                }
            } else {
                const words = text.split(' ');
                return words.map(word => {
                    return <span key={i++}>{word} </span>;
                });
            }
        });
    }

    getInputAsMoved(input) {
        let parsedinput = JSON.parse(input);
        if (parsedinput.type === 'space') return <br key={index} />;
        return (
            <Chip
                style={movedChipStyle}
                key={'moved'}
                label={parsedinput.type + ' : ' + parsedinput.id}
                onMouseDown={this.chipOnMouseDown}
                onMouseUp={this.chipOnMouseUp}
                onMouseLeave={this.chipOnMouseLeave}
                onMouseMove={this.chipOnMouseMove}
            />
        );
    }

    getInputAsChip(input, index = 0) {
        let parsedinput = JSON.parse(input);
        if (parsedinput.type === 'space') return <br key={index} />;
        return (
            <Chip
                style={chipsStyle}
                key={index}
                id={parsedinput.id}
                label={parsedinput.type + ' : ' + parsedinput.id}
                onMouseDown={this.chipOnMouseDown}
                onMouseUp={this.chipOnMouseUp}
                onMouseLeave={this.chipOnMouseLeave}
                onMouseMove={this.chipOnMouseMove}
            />
        );
    }

    isJson(text) {
        return text[0] === '{' && text[text.length - 1] === '}';
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
        this.setState({ inputDrag: chip, editState: editStateEnum[2] });
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
        console.log(this.state.editState);
        if (this.state.editState == editStateEnum[0]) {
            return this.generateContentIdle(content);
        }
        if (this.state.editState == editStateEnum[2]) {
            return this.generateContentInput(content);
        }
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
