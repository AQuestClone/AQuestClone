import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import glamorous from 'glamorous';

import HomePage from './HomePage';
import BlogRouter from './BlogRouter';
import MenuBox from './MenuBox'

const Wrapper = glamorous.div(
    {
        '::-webkit-scrollbar': {
            background: 'red',
            width: '35px'
        },
        '::-webkit-scrollbar-thumb' : {
            background: 'orange',
            width: '35px'
        }
    }
)


export default class MainWrapper extends Component {
    render() {
        return (
            <Wrapper>
                <MenuBox />
                <Switch>
                    <Route exact path = '/' component={HomePage} />
                    <Route path='/blog' component={BlogRouter} />
                </Switch>
            </Wrapper>
        )
    }
}