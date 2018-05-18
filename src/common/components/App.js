import React, { Component } from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainMenu from './MainMenu';
import TemplateForm from './TemplateForm';
import routes from '../routes';

class App extends Component {
    constructor(props) {
        super();
        //console.log(props.data);
    }

    render() {
        return (
            <div>
                <Grid container>
                    <MainMenu />
                    <Switch>
                        {routes.map(
                            ({ path, exact, component: C, ...rest }) => (
                                <Route
                                    key={path}
                                    path={path}
                                    exact={exact}
                                    render={props => <C {...props} {...rest} />}
                                />
                            )
                        )}
                    </Switch>
                </Grid>
            </div>
        );
    }
}

export default App;
