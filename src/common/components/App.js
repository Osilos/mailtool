import React, { Component } from "react";
import { render } from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import { green, red } from "material-ui/colors";
import AppBar from "material-ui/AppBar";
import Grid from "material-ui/Grid";
import { Typography } from "material-ui";
import { Paper } from "material-ui";
import TextInput from "./TextInput";
import axios from 'axios';
import data from '../../server/data';

class App extends Component {
    constructor(props) {
        super();
        this.state = {
                title: "loading",
                form: {},
                formDescription: [],
                baseContent: "loading",
                content: "loading"
            };
    }

    componentWillMount () {
    }

    setInitialState (data) {
        this.setState({
            title: data.title,
            form: {},
            formDescription: this.generateForm(data.content),
            baseContent: data.content,
            content: this.generateContent(data.content)
        });
    }

    generateForm(content) {
        let inputs = content.split("%%");
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
            case "text":
                return (
                    <TextInput
                        key={input.id}
                        id={input.id}
                        default={input.default}
                        onChange={this.handleTextChange.bind(this)}
                    />
                );
                break;
            default:
                throw "Sorry we run I a problem, please reload the page. INFO : no match type for " +
                    input.type;
        }
    }

    handleTextChange(e) {
        const form = this.state.form;
        form[e.target.id] = e.target.value;
        this.setState(() => {
            return {
                form: form,
                content: this.generateContent(this.state.baseContent)
            };
        });
    }

    generateContent(content) {
        let inputs = content.split("%%");
        for (let i = inputs.length - 2; i >= 0; i -= 2) {
            let parsedinputs = JSON.parse(inputs[i]);
            if (this.state.form[parsedinputs.id] !== undefined) {
                inputs[i] = this.state.form[parsedinputs.id];
            } else {
                inputs[i] = parsedinputs.default;
            }
        }

        return inputs.join("");
    }

    render() {
        return (
            <div>
                <Grid container>
                    <Grid item container xs={12}>
                        <AppBar className="header" elevation={10}>
                            <Typography align="center" variant={"title"}>
                                {this.state.title}
                            </Typography>
                        </AppBar>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper square className="sideForm" elevation={5}>
                            {this.state.formDescription.map(item =>
                                this.createInput(item)
                            )}
                        </Paper>
                    </Grid>
                    <Grid item xs={8}>
                        <Paper square elevation={0} className="mailContainer">
                            {this.state.content}
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default App;
