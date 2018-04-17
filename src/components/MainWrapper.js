import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import glamorous from 'glamorous';

import HomePage from './HomePage';
import BlogRouter from './BlogRouter';
import MenuBox from './MenuBox'
import MainMenu from './MainMenu';

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
    constructor() {
        super();

        this.state = {
            menuActive: false,
            clicked: 0
        }

    }

    toggleMenu = () => {
        let clickedCopy = this.state.clicked;
        if (this.state.clicked === 2) {
            this.setState({
                menuActive: !this.state.menuActive,
                clicked: --clickedCopy
            })
        } else {
            this.setState({
                menuActive: !this.state.menuActive,
                clicked: ++clickedCopy
            })
        }
    }

    render() {
        console.log(this.state.menuActive);
        return (
            <Wrapper>
                <MenuBox toggleMenu={this.toggleMenu} menuActive={this.state.menuActive} clicked={this.state.clicked}/>
                <MainMenu active={this.state.menuActive} />
                <Switch>
                    <Route exact path = '/' component={HomePage} />
                    <Route path='/blog' component={BlogRouter} />
                </Switch>
            </Wrapper>
        )
    }
}
