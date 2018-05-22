import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import { Typography, Paper, Snackbar } from 'material-ui';
import { yellow } from 'material-ui/colors';
import TextInput from './TextInput';
import { Button } from 'material-ui';
import ScheduleInput from './ScheduleInput';

const headerStyle = {
    backgroundColor: yellow['600'],
    height: '50px'
};

const copyButtonStyle = {
    marginTop: '50px'
};

class TemplateForm extends Component {
    constructor(props) {
        super();

        if (__isBrowser__) {
            this.data = window.__INITIAL_DATA__;
            delete window.__INITIAL_DATA__;
        } else {
            this.data = props.staticContext.data;
        }

        if (this.data) {
            this.inputs = this.generateInputs(this.data.content);
        }

        this.state = {
            content: 'Generating content...',
            values: {},
            loading: this.data ? false : true
        };

        this.getInitialData = this.getTemplateData.bind(this);
    }

    componentWillMount() {
        if (this.data) {
            this.setState({
                content: this.generateContent(this.data.content),
                loading: false
            });
        }
    }

    componentDidMount() {
        if (!this.data) {
            this.getInitialData(this.props.match.params.name);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.name !== this.props.match.params.name) {
            this.getInitialData(this.props.match.params.name);
        }
    }

    getTemplateData(name) {
        this.setState(() => ({
            loading: true
        }));

        this.props.getInitialData(name).then(data => {
            this.data = data;
            this.inputs = this.generateInputs(this.data.content);
            this.setState(() => ({
                content: this.generateContent(this.data.content),
                loading: false
            }));
        });
    }

    generateContent(content) {
        let inputs = content.split('%%');
        for (let i = inputs.length - 2; i >= 0; i -= 2) {
            let parsedinput = JSON.parse(inputs[i]);
            if (this.state.values[parsedinput.id]) {
                inputs[i] = this.state.values[parsedinput.id];
            } else {
                inputs[i] = parsedinput.default;
            }
        }

        return inputs.join('');
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
                values: values,
                content: this.generateContent(this.data.content)
            };
        });
    }

    getHeader(title) {
        return (
            <Grid container item xs={12}>
                <Grid
                    className="template-header"
                    item
                    container
                    xs={12}
                    justify="center"
                    alignItems="center"
                    style={headerStyle}
                >
                    <Typography align="center" variant={'title'}>
                        {title}
                    </Typography>
                </Grid>
            </Grid>
        );
    }

    handleButtonCopy() {
        const element = document.createElement('textarea');
        element.value = this.state.content;
        element.setAttribute('readonly', '');
        element.style.position = 'absolute';
        element.style.left = '-9999px';
        document.body.appendChild(element);
        const selected =
            document.getSelection().rangeCount > 0
                ? document.getSelection().getRangeAt(0)
                : false;
        element.select();
        document.execCommand('copy');
        document.body.removeChild(element);
        if (selected) {
            document.getSelection().removeAllRanges();
            document.getSelection().addRange(selected);
        }
        this.setState({ openCopyMessage: true });
    }

    render() {
        if (this.state.loading) {
            this.getHeader('Loading...');
        }

        return this.state.loading ? (
            this.getHeader('loading')
        ) : (
            <Grid container item xs={12}>
                {this.getHeader(this.data.title)}
                <Grid item xs={4}>
                    <Paper square className="sideForm" elevation={0}>
                        {this.inputs.map(item => this.createInput(item))}
                        <ScheduleInput start={9} end={18} delta={1} />
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper square elevation={5} className="mailContainer">
                        {this.state.content}
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
