import React, { Component } from 'react';
import glamorous from 'glamorous';

let Photo = glamorous.div(
    {
        ':hover': {
            transform: 'translate3d(0px,0,0)'
        },
        ':hover:before': {
            opacity: '1'
        },
        ':hover:after': {
            opacity: '0'
        },

        ':before': {
            position: 'absolute',
            zIndex: '1',
            background: 'linear-gradient(to bottom,rgba(51,51,51,0) 0,rgba(51,51,51,.5) 90%)',
            opacity: '0',
            transform: 'translate3d(0, 0%,0)',
            transition: 'opacity .35s,transform .35s',
            left: '0',
            top: '0',
            width: '100%',
            height: '100%',
            content: '""'
        },
        ':after': {
            position: 'absolute',
            zIndex: '1',
            background: 'linear-gradient(to bottom,rgba(51,51,51,.5) 0,rgba(51,51,51,0) 100%)',
            transition: 'opacity .35s, transform .35s',
            left: '0',
            top: '0',
            width: '100%',
            height: '100%',
            content: '""'
        }

    },
    {
        backgroundSize: 'cover',
        width: 'calc(100% + 50px)',
        height: '100%',
        transform: 'translate3d(-50px,0,0)',
        transition: 'transform .35s'
    },
    (props) => ({
        background: props.color,
        backgroundImage: `url(${props.image})`,
    })
)

let PhotoWrapper = glamorous.div(
    {
        gridColumnEnd: 'span 2',
        overflow: 'hidden',
        position: 'relative'
    }
)

let PhotoTitle = glamorous.h1(
    {
        position: 'absolute',
        left: 50,
        zIndex: '5',
        fontFamily: "'Montserrat', 'sans-serif'",
        color: 'white',
        fontSize: '12px',
        fontWeight: '500',
        letterSpacing: '0.25em',
    },
    (props) => ({
        top: props.top,
        bottom: props.bottom
    })
)

let HashTag = glamorous.h2(
    {
        position: 'absolute',
        left: 50,
        zIndex: '5',
        fontFamily: "'Libre Baskerville', 'serif'",
        fontSize: '15px',
        fontWeight: '400',
        letterSpacing: '0.05em',
        color: '#e6e6e6'
    },
    (props) => ({
        top: props.top,
        bottom: props.bottom
    })
)



export default class ProjLink extends Component {
    render() {
        let {
            color,
            image,
            rowSpan,
            title,
            hashtag,
            titleTop,
            titleBottom,
            hashtagTop,
            hashtagBottom
        } = this.props
        return (
            <PhotoWrapper style={{ gridRowEnd: `span ${rowSpan}` }}>
                <PhotoTitle top={titleTop} bottom={titleBottom}>{title}</PhotoTitle>
                <HashTag top={hashtagTop} bottom={hashtagBottom}>{hashtag}</HashTag>
                <Photo rowSpan={rowSpan} color={color} image={image}>

                </Photo>
            </PhotoWrapper>
        )
    }
}