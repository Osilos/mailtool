import React from 'react'
import { hydrate } from 'react-dom'
import App from '../common/components/App'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { green, red } from 'material-ui/colors';
import theme from '../common/theme';


class Main extends React.Component {
  // Remove the server-side injected CSS.
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    return <App {...this.props} />
  }
}

if (__PRODUCTION__) {
  hydratePage();
} else {
  setTimeout(() => {
    console.log("PAGE IS HYDRATE")
    hydratePage();
  }, 10);
}


function hydratePage () {
  hydrate(
    <MuiThemeProvider theme={theme}>
      <Main data={ window.__INITIAL_DATA__ } />
    </MuiThemeProvider>,
    document.querySelector('#root'),
  );
}
