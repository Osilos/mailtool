import express from 'express';
import cors from 'cors';
import { renderToString } from 'react-dom/server';
import App from '../common/components/App';
import React from 'react';
import serialize from 'serialize-javascript';
import { StaticRouter, matchPath } from 'react-router-dom';
import routes from '../common/routes';
import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { MuiThemeProvider, createGenerateClassName } from 'material-ui/styles';
import theme from '../common/theme';
import axios from 'axios';

const app = express();

app.use(cors());

app.use(express.static('public'));

app.get('*', handleRequest);

app.listen(3000, () => {
    console.log(`Server is listening on port: 3000`);
});

function renderFullPage(html, css, data) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Mail tool</title>
        <link rel="stylesheet" type="text/css" href="/css/index.css" media="screen" /> 
        <script src="/bundle.js" defer></script>
        <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
      </head>
      <body>
        <div id="root">${html}</div>
        <style id="jss-server-side">${css}</style>
      </body>
    </html>
  `;
}

function handleRequest(req, res, next) {
    // Create a sheetsRegistry instance.
    const sheetsRegistry = new SheetsRegistry();

    // Create a theme instance.
    const generateClassName = createGenerateClassName();

    const activeRoute = routes.find(route => matchPath(req.url, route)) || {};

    const promise = activeRoute.getInitialData
        ? activeRoute.getInitialData(req.path)
        : Promise.resolve();

    promise
        .then(data => {
            const context = { data };
            let html, css;

            html = renderToString(
                <StaticRouter location={req.url} context={context}>
                    <JssProvider
                        registry={sheetsRegistry}
                        generateClassName={generateClassName}
                    >
                        <MuiThemeProvider
                            theme={theme}
                            sheetsManager={new Map()}
                        >
                            <App />
                        </MuiThemeProvider>
                    </JssProvider>
                </StaticRouter>
            );
            css = sheetsRegistry.toString();

            res.send(renderFullPage(html, css, data));
        })
        .catch(next);
}
