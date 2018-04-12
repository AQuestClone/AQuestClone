import React, { Component } from 'react';
import glamorous from 'glamorous';

let Wrapper = glamorous.div(
    {
        margin: '0px auto',
        padding: 50
    },
    {
        ' h1': {
            color: '#0083DD',
            fontFamily: "'Montserrat', 'sans-serif'",
            fontSize: '12px',
            fontWeight: '500',
            letterSpacing: '0.2em',
            marginTop: 50
        },
        ' p': {
            width: '90%',
            fontFamily: "'Roboto', sans-serif",
            color: 'rgb(170, 170, 170)',
            fontSize: '19px',
            fontWeight: '300',
            marginTop: 25,
            lineHeight: '1.5em'
        }
    },
    (props) => (
        {
        height: props.height,
        width: props.width,
        background: props.background,
        textAlign: props.textAlign
        }
    )
)

export default class InfoBox extends Component {
    render() {
        let {
            width,
            height,
            color,
            background,
            textAlign,
            config,
            title,
            text
        } = this.props.config
        return (
            <Wrapper width={width}
                height={height}
                color={color}
                background={background}
                textAlign={textAlign}
                style={config}>
                <h1>{title}</h1>
                {
                    text.map((el, idx) => {
                        return <p style={{color: color}}>{el}</p>
                    })
                }
            </Wrapper>
        )
    }
}