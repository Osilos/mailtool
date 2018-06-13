import React, { Component } from 'react';
import { green, red, orange } from 'material-ui/colors';
import Grid from 'material-ui/Grid';
import { Typography } from 'material-ui';
import { Button } from 'material-ui';
import TemplateForm from '../templates/TemplateForm';
import EditTemplateForm from '../templates/EditTemplateForm';
import ActionButton from '../templates/ActionButton';

const titleStyle = {
    backgroundColor: green['600'],
    height: '50px'
};

const elementProps = {
    className: 'template-header',
    item: true,
    container: true,
    justify: 'center',
    alignItems: 'center'
};

const deleteButton = {
    backgroundColor: red['600'],
    height: '50px'
};

const editButton = {
    backgroundColor: orange['600']
};

const confirmButton = {
    backgroundColor: green['700']
};

class Demo extends Component {
    constructor(props) {
        super();

        if (__isBrowser__) {
            this.data = window.__INITIAL_DATA__;
            delete window.__INITIAL_DATA__;
        } else {
            this.data = props.staticContext.data;
        }

        this.state = {
            title: this.data ? this.data.title : 'Loading...',
            content: this.data ? this.data.content : 'Loading content...',
            loading: this.data ? false : true,
            edit: false
        };

        this.getInitialData = this.getTemplateData.bind(this);
    }

    componentDidMount() {
        if (!this.data) {
            this.getInitialData('demo');
        }
    }

    getTemplateData(name) {
        this.setState(() => ({
            loading: true
        }));

        this.props.getInitialData(name).then(data => {
            this.data = data;
            this.setState(() => ({
                title: this.data.title,
                content: this.data.content,
                loading: false
            }));
        });
    }

    handleEditButton(e) {
        this.setState({
            edit: true
        });
    }

    handleConfirmButton(e) {
        this.setState({
            edit: false
        });
    }

    handleUpdateContent(content) {
        this.setState({ content: content });
    }

    render() {
        return (
            <Grid container item xs={12}>
                <Grid
                    {...elementProps}
                    xs={4}
                    style={this.state.edit ? confirmButton : editButton}
                >
                    <ActionButton
                        name={this.state.edit ? 'confirm' : 'edit'}
                        onClick={
                            this.state.edit
                                ? this.handleConfirmButton.bind(this)
                                : this.handleEditButton.bind(this)
                        }
                    />
                </Grid>
                <Grid {...elementProps} xs={8} style={titleStyle}>
                    <Typography align="center" variant={'title'}>
                        {this.state.title}
                    </Typography>
                </Grid>
                {this.state.edit ? (
                    <EditTemplateForm
                        content={this.state.content}
                        updateContent={this.handleUpdateContent.bind(this)}
                    />
                ) : (
                    <TemplateForm content={this.state.content} />
                )}
            </Grid>
        );
    }
}

export default Demo;
