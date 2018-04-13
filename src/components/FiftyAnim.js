import React, { Component } from 'react';
import glamorous from 'glamorous';

let Wrapper = glamorous.div(
    {
        height: 350,
        width: '50%',
        fontFamily: '"Oswald", sans-serif',
        fontSize: 190,
        color: '#0083DD'
    }
)

export default class FiftyAnim extends Component {
    render() {
        return (
            <Wrapper>
                50+
            </Wrapper>
        )
    }
}