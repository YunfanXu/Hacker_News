import React, { useState } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./styles/Theme"
import Header from './components/Header';
import Footer from './components/Footer';
import browserHistory from './browserHistory';
import { useDarkMode } from "./styles/useDarkMode"
import HomePage from './pages/HomePage';
import StarredPage from './pages/StarredPage';

const App = () => {
    const [theme, themeToggler] = useDarkMode();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <Router history={browserHistory}>
                <Header setMode={themeToggler}  theme={theme} />
                <Switch>
                  <Route path="/" exact component={HomePage} />
                  <Route path="/starred" exact component={StarredPage} />
              </Switch>
              <Footer />
            </Router>
        </ThemeProvider>
    );
};

export default App;
