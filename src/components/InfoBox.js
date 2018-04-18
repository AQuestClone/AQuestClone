import React, { Component } from 'react';
import glamorous from 'glamorous';

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
            margin: '25px',
            marginTop: 25
        },
        ' p': {
            width: '95%',
            fontFamily: "'Roboto', sans-serif",
            color: 'rgb(170, 170, 170)',
            fontWeight: '300',
            margin: '25px',
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
        }
    )
)

let Content = glamorous.div(
    {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    },
    (props) => ({
        padding: props.padding
    })
)

export default class InfoBox extends Component {
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
            headerMargin
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
                <Content>
                    {
                        title.map((el, idx) => {
                            return <h1 style={{marginTop: idx === 0 ? headerMargin : 5}}>{el}</h1>
                        })
                    }
                    
                    {
                        text.map((el, idx) => {
                            return (
                                <div style={pWrapper}>
                                    <p style={{ textAlign: 'left', padding: '0px', fontSize: pFontSize }}>{el}</p>
                                </div>
                            )
                        })
                    }
                </Content>
            </Wrapper>
        )
    }
}