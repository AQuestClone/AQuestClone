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
        margin: '0px auto',
    },
    {
        ' h1': {
            color: '#0083DD',
            fontFamily: "'Montserrat', 'sans-serif'",
            fontSize: 12,
            fontWeight: '500',
            letterSpacing: '0.2em',

        },
        ' p': {
            width: '95%',
            fontFamily: "'Roboto', sans-serif",
            color: 'rgb(170, 170, 170)',
            fontWeight: '300',
            margin: 12,
            lineHeight: '1.5em',
        },
    },
    {
        '@media(max-width: 768px)': {
            width: '100%',
            marginTop: 0,
            ' h1': {
                fontSize: 12
            },
        },
        '@media(max-width: 480px)': {
            ' h1': {
                fontSize: 9
            },
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
        '@media(max-width: 1500px)': {
            ' p': {
                fontSize: 16
            }
        },
        '@media(max-width: 1200px)': {
            '.paragraph-wrapper:nth-of-type(2n)': {
                display: 'none',
            },
        },
        '@media(max-width: 768px)': {
            '.paragraph-wrapper:nth-of-type(2n)': {
                display: 'none',
            },
            width: '90%',
            margin: '0px auto',
            ' p': {
                fontSize: 15,
                textAlign: 'center',

            }
        },
        '@media(max-width: 480px)': {
            ' p': {
                fontSize: 12
            }
        },
    }
)

let Content = glamorous.div(
    (props) => ({
        padding: props.padding
    }),
    {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        '@media(max-width: 768px)': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }
    },

)

let Header = glamorous.h1(
    {
        margin: 15,
    },
    (props) => ({
        marginTop: props.idx === 0 ? props.headerMargin : 5,
        paddingLeft: props.paddingLeft
    }),
    {
        '@media(max-width: 768px)': {
            marginTop: 20,
            paddingLeft: 0,
            textAlign: 'center'
        }
    }
)

let Paragraph = glamorous.p(
    { 
        textAlign: 'left', 
        padding: '0px'
    },
    (props) => ({
        paddingLeft: props.paddingLeft,
        textAlign: props.textAlign
    }),
    {
        '@media(max-width: 768px)': {
            textAlign: 'center',
            margin: 'auto',
            padding: 0
        }
    }

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

        console.log(paddingLeft)
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
                                                                return <Header key={`twitter_title_${idx}`} headerMargin={headerMargin} idx={idx} paddingLeft={paddingLeft}>{el}</Header>
                                                            })
                                                        }
                                                        {
                                                            text.map((el, idx) => {
                                                                return (
                                                                    <PWrapper width={pWidth} fontSize={pFontSize}>
                                                                        <Paragraph paddingLeft={paddingLeft} textAlign={textAlign}>{el}</Paragraph>
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