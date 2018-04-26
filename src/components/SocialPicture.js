import React, { Component } from 'react';
import glamorous, { Div } from 'glamorous';
import { TransitionMotion, spring } from 'react-motion';
import {connect} from 'react-redux';

import CheckVisibility from './CheckVisibility';


const Wrapper = glamorous.div(
    {
        width: '100%',
        height: '100%',
        gridColumnEnd: 'span 1',
        gridRowEnd: 'span 1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'absolute'
    },
    (props) => ({
        backgroundImage: `url(${props.photo})`,
    })
)

class SocialPicture extends Component {

    render() {
        let {
            photo
        } = this.props
        return (
            <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
            <CheckVisibility interval={(Math.random() * (500 - 100) + 100)}>
                    {
                        (isVisible) =>
                            <TransitionMotion
                                defaultStyles={isVisible && this.props.render ? [{
                                    key: 'socialpicslide',
                                    style: { top: 500 }
                                }] : []}
                                styles={isVisible && this.props.render ? [{
                                    key: 'socialpicslide',
                                    style: { top: spring(0, { stiffness: 250, damping: 30 }) }
                                }] : []}
                                willEnter={() => ({ top: 500 })}
                                willLeave={() => ({top: spring(500)})}>
                                {
                                    styles =>
                                        <div style={{ width: '100%', height: '100%' }}>
                                            {
                                                styles.map(({ key, style }) => {
                                                    return <Wrapper key={key} style={{ top: style.top }} photo={photo} />
                                                })
                                            }
                                        </div>
                                }
                            </TransitionMotion>
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

export default connect(mapStateToProps, {})(SocialPicture)