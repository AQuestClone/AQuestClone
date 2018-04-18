import React, { Component } from 'react';
import glamorous from 'glamorous';
import {Link} from 'react-router-dom';

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
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        left: 93

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


class HomeButton extends Component {
    render() {
        return (
            <a href='http://localhost:3000/' >
            <Wrapper>
                <LogoWrapper>
                    <img src={logo} alt='homelogo' />
                </LogoWrapper>
            </Wrapper>
            </a>
        )
    }
}

export default HomeButton