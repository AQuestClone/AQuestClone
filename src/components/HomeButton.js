import React, { Component } from 'react';
import glamorous from 'glamorous';

import logo from './assets/logo-grigio-scuro.png';

const Wrapper = glamorous.div(
    {
        ' .logo-image:hover': {
            opacity: '1'
        }
    },
    {
        width: 100,
        height: 65,
        background: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '25px',
        transition: 'color .5s ease',
        cursor: 'pointer'

    }
)

const LogoWrapper = glamorous.div(
    'logo-image',
    {
        opacity: '.5',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'opacity .35s'
    }

)


export default class HomeButton extends Component {
    render() {
        return (
            <Wrapper>
                <LogoWrapper>
                    <img src={logo} alt='homelogo' />
                </LogoWrapper>
            </Wrapper>
        )
    }
}