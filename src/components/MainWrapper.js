import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import BlogRouter from './BlogRouter';
import MenuBox from './MenuBox'

export default class MainWrapper extends Component {
    render() {
        return (
            <div>
                <MenuBox />
                <Switch>
                    <Route exact path = '/' component={HomePage} />
                    <Route path='/blog' component={BlogRouter} />
                </Switch>
            </div>
        )
    }
}