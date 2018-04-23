import React, { Component } from 'react';
import glamorous from 'glamorous';
import { TransitionMotion, spring } from 'react-motion';

import CheckVisibility from './CheckVisibility';
import {connect} from 'react-redux';

class InfoBox extends Component {
    render() {
        let {
            width,
            height,
            padding,
            color,
            background,
            textAlign,
            pWidth,
            config,
            title,
            text,
            pFontSize,
            headerMargin,
            paddingLeft
        } = this.props.config

        let pWrapper = {
            width: pWidth,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
        return (
            <Wrapper width={width}
                height={height}
                background={background}
                textAlign={textAlign}
                style={config}
            >
                <CheckVisibility interval={(Math.random() * (500 - 100) + 100)}>
                    {
                        (isVisible) =>
                            <TransitionMotion
                                defaultStyles={isVisible && this.props.render ? [{
                                    key: 'infobox',
                                    style: { top: 500 }
                                }] : []}
                                styles={isVisible && this.props.render ? [{
                                    key: 'infobox',
                                    style: { top: spring(0, { stiffness: 250, damping: 30 }) }
                                }] : []}
                                willEnter={() => ({ top: 500 })}
                                willLeave={() => ({top: spring(500)})}>
                                {
                                    styles =>
                                        <div style={{ height: '100%', width: '100%' }}>
                                            {
                                                styles.map(({key, style}) => {
                                                    return <Content style={{...style}} key={key}>
                                                        {
                                                            title.map((el, idx) => {
                                                                return <h1 style={{ marginTop: idx === 0 ? headerMargin : 5, paddingLeft: paddingLeft }}>{el}</h1>
                                                            })
                                                        }
                                                        {
                                                            text.map((el, idx) => {
                                                                return (
                                                                    <div style={pWrapper}>
                                                                        <p style={{ textAlign: 'left', padding: '0px', fontSize: pFontSize, paddingLeft: paddingLeft }}>{el}</p>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </Content>
                                                })
                                            }

                                        </div>
                                }

                            </TransitionMotion>
                    }
                </CheckVisibility>
            </Wrapper>
        )
    }
}

function mapStateToProps(state){
    return {render: state.render}
}

export default connect(mapStateToProps, {})(InfoBox)


let Wrapper = glamorous.div(
    {
        margin: '0px auto',
    },
    {
        ' h1': {
            color: '#0083DD',
            fontFamily: "'Montserrat', 'sans-serif'",
            fontSize: '12px',
            fontWeight: '500',
            letterSpacing: '0.2em',
            margin: 15,
            marginTop: 25,
        },
        ' p': {
            width: '95%',
            fontFamily: "'Roboto', sans-serif",
            color: 'rgb(170, 170, 170)',
            fontWeight: '300',
            margin: 12,
            lineHeight: '1.5em',

        }
    },
    (props) => (
        {
            position: 'relative',
            height: props.height,
            width: props.width,
            background: props.background,
            textAlign: props.textAlign,
            overflow: 'hidden'
        }
    )
)

let Content = glamorous.div(
    {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    (props) => ({
        padding: props.padding
    })
)