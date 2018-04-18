import React, { Component } from 'react';
import glamorous, { Div } from 'glamorous';
import ReactPlayer from 'react-player'

const Wrapper = glamorous.div(
    {
        gridRowEnd: 'span 1',
        gridColumnEnd: 'span 2',
        width: '100%',
        height: '100%',
    }
)

export default class SocialVideo extends Component {

    render() {
        return (
            <Wrapper>
                <ReactPlayer url='https://www.youtube.com/watch?v=HqOjOzs4WRk' width='100%' height='100%'/>
            </Wrapper>
        )
    }
}