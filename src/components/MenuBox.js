import React, { Component } from 'react';
import glamorous from 'glamorous';

import Hamburger from './Hamburger';
import HomeButton from './HomeButton';

let Wrapper = glamorous.div(
    {
        width: 193,
        height: 65,
        display: 'flex',
        position: 'fixed',
        zIndex: '25',
        top: 50,
        left: 0,
        backfaceVisibility: 'hidden'
    }
)

export default class MenuBox extends Component {
    render() {
        return (
            <Wrapper>
                <Hamburger toggleMenu={this.props.toggleMenu}/>
                <HomeButton />
            </Wrapper>
        )
    }
}