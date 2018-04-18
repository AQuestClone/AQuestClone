import React, { Component } from 'react';
import glamorous, { Div } from 'glamorous';

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
        backgroundPosition: 'center'
    },
    (props) => ({
        backgroundImage: `url(${props.photo})`,
    })
)

export default class SocialPicture extends Component {

    render() {
        let {
            photo
        } = this.props
        return (
            <Wrapper photo={photo}/>
        )
    }
}