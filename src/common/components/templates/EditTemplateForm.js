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
import MovedInput from './MovedInput';

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
            inputDragId: null,
            editState: editStateEnum[0],
            updateContent: props.updateContent
        };

        this.lastIndexPosition = -1;

        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.chipOnMouseDown = this.chipOnMouseDown.bind(this);
    }

    componentWillMount() {
        document.addEventListener('mouseup', this.onMouseUp);
        document.addEventListener('mousemove', this.onMouseMove);
    }

    componentWillUnmount() {
        document.removeEventListener('mouseup', this.onMouseUp);
        document.removeEventListener('mousemove', this.onMouseMove);
    }

    getInputs(content) {
        const contents = content.split('%%');
        let inputs = [];
        contents.forEach(item => {
            if (this.isJson(item)) {
                inputs.push(JSON.parse(item));
            }
        });

        return inputs;
    }

    getInput(id) {
        const inputs = this.getInputs(this.props.content);
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].id) {
                if (inputs[i].id === id) {
                    return inputs[i];
                }
            }
        }
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
                if (this.state.inputDragId == parsedInput.id) {
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
        return (
            <Chip
                style={movedChipStyle}
                key={'moved'}
                id="moved"
                label={parsedinput.type + ' : ' + parsedinput.id}
                onMouseDown={this.chipOnMouseDown}
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
            />
        );
    }

    isJson(text) {
        return text[0] === '{' && text[text.length - 1] === '}';
    }

    isInside(point, rect) {
        return (
            rect.x <= point.x &&
            point.x <= rect.x + rect.width &&
            rect.y <= point.y &&
            point.y <= rect.y + rect.height
        );
    }

    onMouseMove(e) {
        if (this.state.editState === editStateEnum[2]) {
            const mousePosition = { x: e.clientX, y: e.clientY };
            const domContainer = document.getElementById('mailContent');
            if (
                this.isInside(
                    mousePosition,
                    domContainer.getBoundingClientRect()
                )
            ) {
                const childs = domContainer.childNodes;
                for (let i = 0; i < childs.length; i++) {
                    const child = childs[i];
                    if (
                        child.id != this.state.inputDragId &&
                        child.id != 'moved'
                    ) {
                        if (
                            this.isInside(
                                mousePosition,
                                child.getBoundingClientRect()
                            )
                        ) {
                            if (i != this.lastIndexPosition) {
                                this.lastIndexPosition = i;
                                this.setInputPositionAt(
                                    i,
                                    this.getInput(this.state.inputDragId)
                                );
                            }
                            break;
                        }
                    }
                }
            }
        }
    }

    setInputPositionAt(position, input) {
        const content = this.props.content.split('%%');
        let i = 0;
        let newContent = '';
        for (var u = 0; u < content.length; u++) {
            const el = content[u];
            if (this.isJson(el)) {
                const elJson = JSON.parse(el);
                if (elJson.id != this.state.inputDragId) {
                    newContent += '%%' + el + '%% ';
                }
                i++;
            } else {
                const words = el.split(' ');
                for (let y = 0; y < words.length; y++) {
                    const word = words[y];

                    newContent += word + ' ';
                    if (position === i) {
                        newContent += '%%' + JSON.stringify(input) + '%% ';
                    }
                    i++;
                }
            }
        }
        this.state.updateContent(newContent);
    }

    chipOnMouseDown(e) {
        const chip =
            e.target.nodeName === 'DIV' ? e.target : e.target.parentElement;
        this.setState({ inputDragId: chip.id, editState: editStateEnum[2] });
    }

    onMouseUp(e) {
        this.setState({ editState: editStateEnum[0] });
    }

    getContent(content) {
        if (this.state.editState == editStateEnum[0]) {
            return this.generateContentIdle(content);
        }
        if (this.state.editState == editStateEnum[2]) {
            return this.generateContentInput(content);
        }
    }

    render() {
        const content = this.getContent(this.props.content);

        let type;
        if (this.state.inputDragId) {
            let input = this.getInput(this.state.inputDragId);
            type = input.type;
        }

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
                        {this.state.editState === editStateEnum[2] && (
                            <MovedInput
                                name={this.state.inputDragId}
                                type={type}
                            />
                        )}
                        {content}
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default EditTemplateForm;
