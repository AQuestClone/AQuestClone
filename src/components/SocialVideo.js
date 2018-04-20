import React, { Component } from 'react';
import glamorous, { Div } from 'glamorous';
import ReactPlayer from 'react-player'
import { TransitionMotion, spring } from 'react-motion';

import CheckVisibility from './CheckVisibility';

const Wrapper = glamorous.div(
    {
        gridRowEnd: 'span 1',
        gridColumnEnd: 'span 2',
        width: '100%',
        height: '100%',
        position: 'absolute',
        transition: 'top .5s',
        background: 'white'
    }
)





export default class SocialVideo extends Component {

    render() {
        return (
            <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden', gridColumnEnd: 'span 2' }}>
                <CheckVisibility interval={(Math.random() * (500 - 100) + 100)}>
                    {
                        (isVisible) =>
                            <Wrapper style={{ top: !isVisible ? 500 : 0 }}>
                                <ReactPlayer url='https://www.youtube.com/watch?v=HqOjOzs4WRk' width='100%' height='100%' />
                            </Wrapper>
                    }

                </CheckVisibility>
            </div>
        )
    }
}