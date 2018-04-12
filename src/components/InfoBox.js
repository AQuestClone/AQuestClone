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
            letterSpacing: '0.2em'
        },
        ' p': {
            width: '90%',
            border: '1px solid red',
            fontFamily: "'Roboto', sans-serif",
            color: 'rgb(170, 170, 170)',
            fontSize: '19px',
            fontWeight: '300'
        }
    },
    (props) => ({
        width: props.width,
        background: props.background,
        textAlign: props.textAlign
    })
)

export default class InfoBox extends Component {
    render() {
        let {
            width,
            background,
            textAlign,
            config,
            title,
            text
        } = this.props.config
        return (
            <Wrapper width={width}
                background={background}
                textAlign={textAlign}
                style={config}>
                <h1>{title}</h1>
                <p>{text}</p>
            </Wrapper>
        )
    }
}