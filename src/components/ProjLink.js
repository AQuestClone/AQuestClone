import React, { Component } from 'react';
import glamorous from 'glamorous';

let Photo = glamorous.div(
    {
        backgroundSize: 'cover',
        width: 'calc(100% + 50px)',
        height: '100%'
    },
    (props) => ({
        background: props.color,
        backgroundImage: `url(${props.image})`,
    })
)

let PhotoWrapper = glamorous.div (
    {
        gridColumnEnd: 'span 2',
        overflow: 'hidden'
    }
)



export default class ProjLink extends Component {
    render() {
        let {
            color,
            image,
            rowSpan
        } = this.props
        return (
            <PhotoWrapper style={{ gridRowEnd: `span ${rowSpan}`}}>
                <Photo rowSpan={rowSpan} color={color} image={image}>

                </Photo>
            </PhotoWrapper>
        )
    }
}