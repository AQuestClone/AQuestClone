import React, { Component } from 'react';
import glamorous from 'glamorous';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { TransitionMotion, spring } from 'react-motion';




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
        top: '-18px',
        transform: 'translate3d(-50px,0,0)',
        transition: 'transform .35s',
        position: 'relative',
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
        boxShadow: '0 1px 4px rgba(44, 44, 46, 0.32)',
        position: 'relative',
        zIndex: '6'
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

class BlogCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogPosts: []
        }
    }
    componentDidMount() {
        axios.get('/api/blogpost').then((res) => {
            this.setState({ blogPosts: res.data })
        })
    }

    render() {
        console.log('blog card state', this.state);
        let mappedCards = this.state.blogPosts.map((e, k) => {


            return (
                <Link to={`/blog/${e.blog_id}`}>
                    <PhotoWrapper key={k}>
                        <Card >
                            {/* <PhotoTitle><img style={{borderRadius:'50%', height:'7vh', padding:'5px'}} src={e.profile_image}/>{e.username}</PhotoTitle> */}
                            <br />
                            <HashTag>{e.title}</HashTag>
                            <Awards><img style={{ borderRadius: '50%', height: '7vh', padding: '5px' }} src={e.profile_image} />{e.username}</Awards>
                            <TransitionMotion
                                defaultStyles={[{

                                    style: { top: 100 }
                                }]}
                                styles={[{

                                    style: { top: spring(0, { stiffness: 250, damping: 30 }) }
                                }]}>
                                {
                                    styles =>
                                        <Photo
                                            style={{

                                                backgroundImage: `url(${e.image})`
                                            }}>

                                        </Photo>
                                }
                            </TransitionMotion>
                        </Card>
                    </PhotoWrapper>
                </Link>

            )

        })
        return (

            <div>

                {mappedCards}
            </div>
        )
    }
};


export default BlogCard
