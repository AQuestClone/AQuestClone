import React, { Component } from 'react';
import glamorous from 'glamorous';

const Wrapper = glamorous.div(
    {
        ':hover': {
            color: 'black'
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
        color: 'gray',
        transition: 'color .5s ease',
        cursor: 'pointer'

    }
)

export default class HomeButton extends Component {
    render() {
        return (
            <Wrapper>
                AQ
            </Wrapper>
        )
    }
}