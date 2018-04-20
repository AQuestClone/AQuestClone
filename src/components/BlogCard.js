import React, { Component } from 'react';
import glamorous from 'glamorous';
import { Link } from 'react-router-dom'
import { TransitionMotion, spring } from 'react-motion';
import CheckVisibility from './CheckVisibility'

class BlogCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            boxShadowValues: ''
        }
    }

    render() {

        let { title, blog_id, profile_image, username, image } = this.props.post
        return (

            !this.state.boxShadowValues && this.props.isVisible ? setTimeout(() => {
                this.setState({
                    boxShadowValues: 'rgba(44, 44, 46, .55) -3px 3px 15px'

                })
            }, 380) : null,
            <Link to={`/blog/${blog_id}`}>
                <PhotoWrapper style={this.props.shouldRender?{ boxShadow: this.state.boxShadowValues, transition: '.4s' }:{}}>
                    <TransitionMotion
                        defaultStyles={
                            this.props.isVisible && this.props.shouldRender ?
                                [{
                                    key: title,
                                    style: { top: 500 }
                                }]
                                : []
                        }
                        styles={
                            this.props.isVisible && this.props.shouldRender ?
                                [{
                                    key: title,
                                    style: { top: spring(0, { stiffness: 250, damping: 30 }) }
                                }]
                                : []
                        }
                        willEnter={() => ({
                            top: 500
                        })}
                        willLeave={()=>({
                            top: spring(500)
                        })}
                    >
                        {
                            styles =>
                                <div>
                                    {
                                        styles.map(({ key, style }) =>
                                            <Card style={{ ...style, position: 'relative' }} key={key}  >
                                                <HashTag>{title}</HashTag>
                                                <Awards id='awards'><img style={{ borderRadius: '50%', height: '7vh', padding: '5px' }} src={profile_image} />{username}</Awards>
                                                <Photo
                                                    style={{
                                                        backgroundImage: `url(${image})`,
                                                    }}>

                                                </Photo>
                                            </Card>
                                        )
                                    }
                                </div>
                        }
                    </TransitionMotion>
                </PhotoWrapper>
            </Link>
        )
    }
};
export default BlogCard

const Card = glamorous.div(
    {
        width: '45vw',
        height: '30vw',
        overflow: 'hidden',


    },

)
let Photo = glamorous.div(
    'photo-div',
    {
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
        backgroundPosition: 'center',
        width: 'calc(100% + 50px)',
        height: '100%',
        transform: 'translate3d(-50px,0,0)',
        transition: 'transform .35s',
        position: 'relative',
        bottom: 0
    },

)

let PhotoWrapper = glamorous.div(
    {
        ':hover .awards-text': {
            opacity: '1',
            left: 50
        },
        ':hover .photo-div': {
            transform: 'translate3d(0px,0,0)',
        },
        ':hover .photo-div:before': {
            opacity: '1'
        },
        ':hover .photo-div:after': {
            opacity: '0'
        }
    },
    {

        margin: '15',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        zIndex: '6',
        overflow: 'hidden',
        // transition: '.4s',
        width: '45vw',
        height: '30vw'

    },
    (props) => ({
        backgroundImage: `url(${props.backgroundImage})`
    })
)

let PhotoTitle = glamorous.h1(
    {
        position: 'absolute',
        top: 30,
        left: 50,
        zIndex: '5',
        fontFamily: "'Montserrat', 'sans-serif'",
        color: 'white',
        fontSize: '15px',
        fontWeight: '500',
        letterSpacing: '0.2em',
        display: 'flex',
        alignItems: 'center'
    },
    (props) => ({
        bottom: props.bottom
    })
)

let HashTag = glamorous.h2(
    {
        position: 'absolute',
        top: 0,
        left: 50,
        zIndex: '5',
        fontFamily: "'Libre Baskerville', 'serif'",
        fontSize: '20px',
        fontWeight: '400',
        letterSpacing: '0.05em',
        color: '#e6e6e6'
    },
    (props) => ({
        bottom: props.bottom
    })
)

let Awards = glamorous.div(
    'awards-text',
    {
        fontFamily: "'Libre Baskerville', 'serif'",
        color: '#e6e6e6',
        position: 'absolute',
        zIndex: '3',
        bottom: 33,
        left: -5,
        opacity: '0',
        transition: 'opacity .35s, left .35s'

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
