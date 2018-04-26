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
        '::-webkit-scrollbar-thumb': {
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
            clicked: 0,
            hovered: 0
        }

    }

    toggleMenu = () => {
        let hoveredCopy = this.state.hovered;
        if (this.state.hovered === 3) {
            this.setState({
                menuActive: !this.state.menuActive,
                hovered: 1
            })
        } 
        else {
            this.setState({
                menuActive: !this.state.menuActive,
                hovered: 3,
            })
        }
    }

    toggleHover = () => {
        let hoveredCopy = this.state.hovered
        if (this.state.hovered !== 3) {
            if (this.state.hovered === 2) {
                this.setState({
                    hovered: --hoveredCopy
                })
            }
            else {
                this.setState({
                    hovered: ++hoveredCopy
                })
            }
        }

    }

    render() {
        return (
            <Wrapper>
                <MenuBox
                    toggleMenu={this.toggleMenu}
                    hoverEnter={this.hoverEnter}
                    hoverLeave={this.hoverLeave}
                    toggleHover={this.toggleHover}
                    menuActive={this.state.menuActive}
                    clicked={this.state.clicked} 
                    hovered={this.state.hovered}/>
                <MainMenu toggle={this.toggleMenu} active={this.state.menuActive} />                    
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/blog' component={BlogRouter} />
                </Switch>
            </Wrapper>
        )
    }
}
