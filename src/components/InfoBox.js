import React, { Component } from 'react';
import glamorous from 'glamorous';
import { TransitionMotion, spring } from 'react-motion';
import { connect } from 'react-redux';

import CheckVisibility from './CheckVisibility';


let Wrapper = glamorous.div(
    (props) => (
        {
            position: 'relative',
            height: props.height,
            width: props.width,
            background: props.background,
            textAlign: props.textAlign,
            overflow: 'hidden'
        }
    ),
    {
        '@media(max-width: 768px)': {
            width: '100%',
            ' h1': {
                fontSize: 9
            }
        }
    },
    {
        margin: '0px auto',
    },
    {
        ' h1': {
            color: '#0083DD',
            fontFamily: "'Montserrat', 'sans-serif'",
            fontSize: 12,
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

)

let PWrapper = glamorous.div(
    'paragraph-wrapper',
    (props) => ({
        width: props.width,
        fontSize: props.fontSize
    }),
    {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '@media(max-width: 768px)': {
            '.paragraph-wrapper:nth-of-type(2n)': {
                display: 'none',
            },
            ' p': {
                fontSize: 12
            }
        }
    }
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
                                willLeave={() => ({ top: spring(500)})}>
                                {
                                    styles =>
                                        <div style={{ height: '100%', width: '100%' }}>
                                            {
                                                styles.map(({key, style}) => {
                                                    return <Content style={{...style}} key={key}>
                                                        {
                                                            title.map((el, idx) => {
                                                                return <h1 key={`twitter_title_${idx}`} style={{ marginTop: idx === 0 ? headerMargin : 5, paddingLeft: paddingLeft }}>{el}</h1>
                                                            })
                                                        }
                                                        {
                                                            text.map((el, idx) => {
                                                                return (
                                                                    <PWrapper width={pWidth} fontSize={pFontSize}>
                                                                        <p style={{ textAlign: 'left', padding: '0px', paddingLeft: paddingLeft }}>{el}</p>
                                                                    </PWrapper>
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

function  mapStateToProps(state) {
    return {
        render: state.render
    }
}

export default connect(mapStateToProps, {})(InfoBox);