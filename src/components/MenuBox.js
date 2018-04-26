import React, { Component } from 'react';
import { TransitionMotion, spring } from 'react-motion';
import glamorous from 'glamorous';

import Hamburger from './Hamburger';
import HomeButton from './HomeButton';
import MenuX from './MenuX';

let Wrapper = glamorous.div(
    {
        width: 193,
        height: 65,
        display: 'flex',
        position: 'fixed',
        zIndex: '25',
        top: 50,
        left: 0,
        backfaceVisibility: 'hidden',
        '@media(max-width: 768px)': {
            top: 0
        }
    }
)

export default class MenuBox extends Component {
    render() {
        return (
            <Wrapper>
                <Hamburger
                    toggleMenu={this.props.toggleMenu}
                    menuActive={this.props.menuActive}
                    toggleHover={this.props.toggleHover}
                    hovered={this.props.hovered} />
                <HomeButton />
            </Wrapper>
        )
    }
}