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
        },


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
        ':hover .awards-text': {
            opacity: '1'
        }
    },
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
        letterSpacing: '0.2em',
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

let Awards = glamorous.div(
    'awards-text',
    {
        position: 'absolute',
        zIndex: '5',
        bottom: 33,
        left: 50,
        opacity: '0',
        transition: 'opacity .5s'
    },
    {
        ' span': {
            color: 'white',
            display: 'inline-block',
            marginRight: 25,
            fontFamily: "'Lato', 'sans-serif'",
            fontSize: '6.5px',
            letterSpacing: '.25em'

        },
        ' span > i, span > h1': {
            display: 'inline-block',
            fontWeight: '300'
        },
        ' span i': {
            fontSize: '25px',
            marginRight: 15
        }
    },
    (props) => ({

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
            hashtagBottom,
            awards
        } = this.props.config
        return (
            <PhotoWrapper style={{ gridRowEnd: `span ${rowSpan}` }}>
                <PhotoTitle top={titleTop} bottom={titleBottom}>{title}</PhotoTitle>
                <HashTag top={hashtagTop} bottom={hashtagBottom}>{hashtag}</HashTag>
                <Awards>
                    {
                        awards
                        ?
                            awards.map((award, idx) => {
                                return (
                                  <span>
                                      <i class="fa fa-trophy"></i> 
                                      <h1>{award}</h1>
                                  </span>
                                )
                                
                            })
                        :
                        null
                    }
                </Awards>
                <Photo rowSpan={rowSpan} color={color} image={image}>

                </Photo>
            </PhotoWrapper>
        )
    }
}