import React, { Component } from 'react';
import glamorous, { Div } from 'glamorous';

const Wrapper = glamorous.div(
    {
        width: '100%',
        height: '100%',
        gridColumnEnd: 'span 1',
        gridRowEnd: 'span 1',
        background: '#eee',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
)

const Content = glamorous.div(
    {
        width: '80%',
        height: '50%',
    }
)

const TwitterButton = glamorous.div(
    {
        width: 55,
        height: 55,
        marginLeft: 10,
        borderRadius: '50%',
        background: '#0083DD',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: 25
    }
)

const TimeDiv = glamorous.div(
    {
        ' p': {
            margin: 5,
            fontFamily: "'Roboto', sans-serif",
            color: '#0083DD'
        },
        ' h1': {
            fontSize: 14,
            fontWeight: '200',
            color: '#0083DD',
            fontFamily: "'Montserrat', 'sans-serif'"
        }
    },
    {
        marginLeft: 10,
        color: '#0083DD'
    }
)

const Message = glamorous.div(
    {
        color: 'gray',
        marginTop: 25,
        lineHeight: '1.5em'
    }
)

export default class TwitterSlide extends Component {
    constructor() {
        super();

    }

    render() {
        let {
            time,
            text
        } = this.props.config
        return (
            <Wrapper>
                <Content>
                    <div style={{
                        height: 100,
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}>
                        <TwitterButton>
                            <i class="fa fa-twitter"></i>
                        </TwitterButton>
                        <TimeDiv>
                            <h1>{time}</h1>
                            <p>@aquest</p>
                        </TimeDiv>
                    </div>
                    <Message>
                        <p>
                            {text}
                        </p>
                    </Message>

                </Content>
            </Wrapper>
        )
    }
}