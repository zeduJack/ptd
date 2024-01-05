import '../styles/globals.css';

import NextApp from 'next/app'
import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider as MaterialThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { ParallaxProvider } from 'react-scroll-parallax';
import mediaQuery from "css-mediaquery";
import deepCopy from 'lodash';
import UAParser from "ua-parser-js";
import TemporaryBanner from "../components/temporary-banner";

const baseTheme = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  typography: {
    h1: {
      fontFamily: 'inherit',
      fontSize: '1.5rem',
      paddingBottom: '2rem'
    },
    h2: {
      fontFamily: 'inherit',
      fontSize: '1.3rem',
      paddingBottom: '2rem'
    },
    h3: {
      fontFamily: 'inherit',
      fontSize: '1.1rem',
      paddingBottom: '2rem'
    }
  },
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
};

const theme = createMuiTheme(baseTheme);

// https://stackoverflow.com/questions/61510890/how-to-implement-ssr-for-material-uis-media-queries-in-nextjs
const mobileSsrMatchMedia = query => ({
  matches: mediaQuery.match(query, {
    // The estimated CSS width of the browser.
    width: "0px"
  })
});
const desktopSsrMatchMedia = query => ({
  matches: mediaQuery.match(query, {
    // The estimated CSS width of the browser.
    width: "1024px"
  })
});

const mobileThemeObject = deepCopy(baseTheme);
mobileThemeObject['props'] = {
  // Change the default options of useMediaQuery
  MuiUseMediaQuery: { ssrMatchMedia: mobileSsrMatchMedia }
};

const mobileMuiTheme = createMuiTheme(mobileThemeObject);

const desktopThemeObject = deepCopy(baseTheme);
mobileThemeObject['props'] = {
  // Change the default options of useMediaQuery
  MuiUseMediaQuery: { ssrMatchMedia: desktopSsrMatchMedia }
};

const desktopMuiTheme = createMuiTheme(desktopThemeObject);


export default class App extends NextApp {
  static async getInitialProps(ctx) {
    const initialProps = await NextApp.getInitialProps(ctx);

    // Mögliche Alternative: https://www.npmjs.com/package/next-useragent
    let uaParser: UAParser = null;
    if (ctx.ctx.req) { // if you are on the server and you get a 'req' property from your context
      uaParser = new UAParser(ctx.ctx.req.headers["user-agent"]);
    } else { // if you are on the client you can access the navigator from the window object
      uaParser = new UAParser(navigator.userAgent);
    }

    const deviceType = uaParser.getDevice().type || "desktop";
    console.log('deviceType: ', deviceType);
    return { pageProps: { ...initialProps, deviceType } };
  }

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <StyledThemeProvider theme={theme}>
        <MaterialThemeProvider
          theme={
            pageProps.deviceType === "mobile" ? mobileMuiTheme : desktopMuiTheme
          }
        >
          <CssBaseline />

          <ParallaxProvider>
            <TemporaryBanner />
            <Component {...pageProps} />
          </ParallaxProvider>
        </MaterialThemeProvider>
      </StyledThemeProvider>
    )
  }
}
