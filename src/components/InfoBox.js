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
            marginTop: 50
        },
        ' p': {
            width: '95%',
            fontFamily: "'Roboto', sans-serif",
            color: 'rgb(170, 170, 170)',
            fontSize: '19px',
            fontWeight: '300',
            margin: '25px',
            lineHeight: '1.5em',

        }
    },
    (props) => (
        {
        height: props.height,
        width: props.width,
        background: props.background,
        textAlign: props.textAlign,
        padding: props.padding
        }
    )
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
            text
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
                padding={padding}
                background={background}
                textAlign={textAlign}
                style={config}>
                <h1>{title}</h1>
                {
                    text.map((el, idx) => {
                        return (
                            <div style={pWrapper}>
                                <p style={{textAlign: 'left', padding: '0px'}}>{el}</p>   
                            </div>
                        )
                    })
                }
            </Wrapper>
        )
    }
}