import React, { Component } from 'react';
import glamorous from 'glamorous';
import { css } from 'glamor';

let Wrapper = glamorous.div(
    {
        height: 350,
        width: '50%',
        fontFamily: '"Oswald", sans-serif',
        fontSize: 190,
        color: '#0083DD',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
)

let NumberWrapper = glamorous.div(
    {
        height: '55%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
    }
)

let slideDown = css.keyframes({
    '0%': { opacity: '0', top: 0,textShadow: 'rgba(84, 117, 140, 0.41)' },
    '5%': { opacity: '1' ,textShadow: 'rgba(84, 117, 140, 0.41)'},
    '60%': { textShadow: 'rgba(84, 117, 140, 0.41)' },
    '100%': { opacity: '1', top: 200, ttextShadow: 'rgba(84, 117, 140, 0.41)' }
})

let slideFromTop = css.keyframes({
    '0%': { top: -200, ttextShadow: 'rgba(84, 117, 140, 0.41)' },
    '60%': { ttextShadow: 'rgba(84, 117, 140, 0.41)'},
    '100%': { top: 0, opacity: '1', textShadow: 'none' }
})

let Five = glamorous.div(
    {
        opacity: '0',
        position: 'relative',
        animation: `${slideDown} .2s, ${slideFromTop} .05s`,
        animationDelay: '1s, 2s',
        animationFillMode: 'forwards'
    },

)

let Zero = glamorous.div(
    {
        opacity: '0',
        position: 'relative',
        animation: `${slideDown} .2s, ${slideFromTop} .05s`,
        animationDelay: '1.2s, 2.2s',
        animationFillMode: 'forwards'
    },
)

let Plus = glamorous.div(
    {
        opacity: '0',
        position: 'relative',
        animation: `${slideFromTop} .05s`,
        animationDelay: '2.4s',
        animationFillMode: 'forwards'
    }
)

export default class FiftyAnim extends Component {
    render() {
        return (
            <Wrapper>
                <NumberWrapper>
                    <Five>5</Five>
                    <Zero>0</Zero>
                    <Plus>+</Plus>
                </NumberWrapper>
            </Wrapper>
        )
    }
}