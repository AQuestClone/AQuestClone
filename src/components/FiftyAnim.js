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
    '0%': { opacity: '0', top: 0, filter: 'blur(0px)' },
    '5%': { opacity: '1', filter: 'blur(1px)' },
    '80%': { filter: 'blur(7px)' },
    '90%': { filter: 'blur(7px)' },
    '100%': { opacity: '1', top: 200,  filter: 'blur(10px)' }
})

let slideFromTop = css.keyframes({
    '0%': { top: -200,  filter: 'blur(7px)' },
    '60%': {  filter: 'blur(5px)' },
    '100%': { top: 0, opacity: '1', filter: 'none' }
})

let Five = glamorous.div(
    {
        opacity: '0',
        position: 'relative',
        animation: `${slideDown} .1s, ${slideFromTop} .05s`,
        animationDelay: '1s, 2s',
        animationFillMode: 'forwards',
        filter: 'blur(1px)'
    },

)

let Zero = glamorous.div(
    {
        opacity: '0',
        position: 'relative',
        animation: `${slideDown} .1s, ${slideFromTop} .05s`,
        animationDelay: '1.1s, 2.15s',
        animationFillMode: 'forwards'
    },
)

let Plus = glamorous.div(
    {
        opacity: '0',
        position: 'relative',
        animation: `${slideFromTop} .05s`,
        animationDelay: '2.3s',
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