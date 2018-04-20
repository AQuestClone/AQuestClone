import React, { Component } from 'react';
import glamorous, { Div } from 'glamorous';
import ReactPlayer from 'react-player'
import {connect} from 'react-redux';

import CheckVisibility from './CheckVisibility';

const Wrapper = glamorous.div(
    {
        gridRowEnd: 'span 1',
        gridColumnEnd: 'span 2',
        width: '100%',
        height: '100%',
        position: 'absolute',
        background: 'red',
        transition: 'top .5s'
    }
)

class SocialVideo extends Component {

    render() {
        return (
            <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden', gridColumnEnd: 'span 2' }}>
                <CheckVisibility interval={(Math.random() * (500 - 100) + 100)}>
                    {
                        (isVisible) =>
                            <Wrapper style={{ top: isVisible && this.props.render ? 0 : 500 }}>
                                <ReactPlayer url='https://www.youtube.com/watch?v=HqOjOzs4WRk' width='100%' height='100%' />
                            </Wrapper>
                    }

                </CheckVisibility>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        render: state.render
    }
}

export default connect(mapStateToProps, {})(SocialVideo)