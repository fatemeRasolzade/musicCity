import React from 'react'
import MainLayout from './layout/MainLayout';
import { Route, Router, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import history from './Utils/history';

const App = () => {

    const theme = createTheme({
        direction:'rtl',
    });

    const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

    return (
        <Router history={history}>
            <ThemeProvider theme={theme}>
            <StylesProvider jss={jss}>
                <MainLayout>
                    <Switch>
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route exact path="/" component={Header}/>
                    </Switch>
            </MainLayout>
            </StylesProvider>
            </ThemeProvider>
        </Router>
    )
}

export default App
