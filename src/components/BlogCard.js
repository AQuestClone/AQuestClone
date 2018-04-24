import React, { Component } from 'react';
import glamorous from 'glamorous';
import { Link } from 'react-router-dom'
import { TransitionMotion, spring } from 'react-motion';

import CheckVisibility from './CheckVisibility';
import PageChange from './PageChange';
import padding from 'polished/lib/shorthands/padding';

class BlogCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            boxShadowValues: ''
        }
        this.estTimeToRead = this.estTimeToRead.bind(this)
    }
    estTimeToRead(bodyText) {
        //according to Medium the average reading speed for an adult is (about 275 wpm)
        let wordLength = (bodyText.split(' ').length) / (275)
        return `${Math.ceil(wordLength)} min read`
    }

    render() {
        let clappingIcon = <Svg id="clap--icon" xmlns="http://www.w3.org/2000/svg" viewBox="-549 338 100.1 125"> <path d="M-471.2 366.8c1.2 1.1 1.9 2.6 2.3 4.1.4-.3.8-.5 1.2-.7 1-1.9.7-4.3-1-5.9-2-1.9-5.2-1.9-7.2.1l-.2.2c1.8.1 3.6.9 4.9 2.2zm-28.8 14c.4.9.7 1.9.8 3.1l16.5-16.9c.6-.6 1.4-1.1 2.1-1.5 1-1.9.7-4.4-.9-6-2-1.9-5.2-1.9-7.2.1l-15.5 15.9c2.3 2.2 3.1 3 4.2 5.3zm-38.9 39.7c-.1-8.9 3.2-17.2 9.4-23.6l18.6-19c.7-2 .5-4.1-.1-5.3-.8-1.8-1.3-2.3-3.6-4.5l-20.9 21.4c-10.6 10.8-11.2 27.6-2.3 39.3-.6-2.6-1-5.4-1.1-8.3z" /><path d="M-527.2 399.1l20.9-21.4c2.2 2.2 2.7 2.6 3.5 4.5.8 1.8 1 5.4-1.6 8l-11.8 12.2c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l34-35c1.9-2 5.2-2.1 7.2-.1 2 1.9 2 5.2.1 7.2l-24.7 25.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l28.5-29.3c2-2 5.2-2 7.1-.1 2 1.9 2 5.1.1 7.1l-28.5 29.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.4 1.7 0l24.7-25.3c1.9-2 5.1-2.1 7.1-.1 2 1.9 2 5.2.1 7.2l-24.7 25.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l14.6-15c2-2 5.2-2 7.2-.1 2 2 2.1 5.2.1 7.2l-27.6 28.4c-11.6 11.9-30.6 12.2-42.5.6-12-11.7-12.2-30.8-.6-42.7m18.1-48.4l-.7 4.9-2.2-4.4m7.6.9l-3.7 3.4 1.2-4.8m5.5 4.7l-4.8 1.6 3.1-3.9" /> </Svg>
        let { title, blog_id, profile_image, username, image, claps, time_stamped, content } = this.props.post
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let slicedDate = time_stamped.slice(5, 10).split('-')
        let date = `${monthNames[+slicedDate[0][0] === 0 ? slicedDate[0].slice(1, 2) - 1 : slicedDate[0]]} ${slicedDate[1]}`
        return (

            !this.state.boxShadowValues && this.props.isVisible ? setTimeout(() => {
                this.setState({
                    boxShadowValues: 'rgba(44, 44, 46, .55) -3px 3px 15px'

                })
            }, 380) : null,

            <PageChange newPage={`/blog/${blog_id}`}>
                <PhotoWrapper style={this.props.shouldRender ? { boxShadow: this.state.boxShadowValues, transition: '.4s' } : {}}>
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
                        willLeave={() => ({
                            top: spring(500)
                        })}
                    >
                        {
                            styles =>
                                <div>
                                    {
                                        styles.map(({ key, style }) =>
                                            <Card style={{ ...style, position: 'relative' }} key={key}  >


                                                <HashTag>
                                                    <div>{title}</div>
                                                    <div style={{ fontSize: 18 }}>{`- ${date}, ${this.estTimeToRead(content)}`}</div>
                                                </HashTag>

                                                <Awards id='awards'>
                                                    <img style={{ borderRadius: '50%', height: '7vh', padding: '5px' }} src={profile_image} />
                                                    <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                                        <p style={{ margin: 0, padding: 5, fontSize: 20 }}>{username}</p>
                                                        <section style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                                                        <p style={{ margin: 0, fontSize: 13 }}>{claps}</p>
                                                        {clappingIcon}
                                                        </section>
                                                    </section>


                                                </Awards>
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
            </PageChange>
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
        height: '30vw',

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
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: 0,
        left: 50,
        zIndex: '5',
        fontFamily: "'Libre Baskerville', 'serif'",
        fontSize: '30px',
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
        transition: 'opacity .35s, left .35s',
        display: 'flex',


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
const Svg = glamorous.svg(
    'clappingSvg',
    {
        height: '35px',
        width: '35px',
        fill: '#1976D2',
        // stroke: 'white'
        // border: '1px solid',
        // borderRadius: '50%',
        // borderColor: 'black',
    }
)

