import React, { Component } from 'react';
import glamorous from 'glamorous';
import axios from 'axios';
import { css } from 'glamor';
import { getUser, getPost, shouldRender } from '../ducks/reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { log } from 'util';
import Sidebar from './SideBar'
import { TransitionMotion, spring } from 'react-motion';
import { isEmpty } from './BlogHeader';

class BlogPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: [],
            response: '',
            responses: [],
            menuToggle: false,
            activeIdx: -1,
            resPosition: 0
        }
        this.deletePost = this.deletePost.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.addClaps = this.addClaps.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
        this.formatDate = this.formatDate.bind(this)
        this.estTimeToRead = this.estTimeToRead.bind(this)
        this.deleteResponse = this.deleteResponse.bind(this)

    }
    async componentDidMount() {
        await this.props.getPost(this.props.match.params.id)
        axios.get(`/api/responses/${this.props.match.params.id}`).then(res => {
            this.setState({
                responses: res.data,
            })
            setTimeout(() => document.getElementById('resInput') ? this.setState({ resPosition: document.getElementById('resInput').offsetTop }) : null, 300)
        })

        this.props.shouldRender(true)

    }

    deletePost() {
        alert('are you sure?')
        axios.delete(`/api/blogpost/${this.props.match.params.id}`).then(() => this.props.history.push('/blog'))
        
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit() {
        let obj = {
            user_id: this.props.user.id,
            content: this.state.response,
            claps: 0
        }
        axios.post(`/api/responses/${this.props.post.id}`, obj).then(res=>this.setState({ response: '', responses: res.data}))
      
    }
    handleToggle() {
        this.setState({
            menuToggle: !this.state.menuToggle
        })
    }
    addClaps(x) {
        let ans = this.state.responses[x].claps++
        this.setState({
            e: ans
        })
        axios.put(`/api/responses/${this.state.responses[x].res_id}`, { claps: this.state.responses[x].claps })
    }
    deleteResponse(x) {
        let copy = [...this.state.responses]
        copy.splice(x, 1)

        console.log(copy)
        this.setState({
            responses: copy
        })
        console.log(this.state.responses[x].res_id)
        axios.delete(`/api/responses/${this.state.responses[x].res_id}`).then((res) => console.log(res.data))

    }
    formatDate(fullDate) {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let slicedDate = fullDate.slice(5, 10).split('-')
        return `${monthNames[+slicedDate[0][0] === 0 ? slicedDate[0].slice(1, 2) - 1 : slicedDate[0]]} ${slicedDate[1]}`
    }
    estTimeToRead(bodyText) {
        //according to Medium the average reading speed for an adult is (about 275 wpm)
        let wordLength = (bodyText.split(' ').length) / (275)
        return `${Math.ceil(wordLength)} min read`
    }
    render() {
        console.log(this.state)
        const position =
            {
                position: 'absolute',
                height: `calc( ${this.state.resPosition}px)`,

            }

        const postAppear = this.props.render && this.props.post.title;
        let sidebarAppear = this.props.render && this.state.resPosition;
        let respAppear = this.state.responses.length

        const { title, image, content } = this.state.activeIdx !== -1 ? this.state.activeIdx : this.props.post
        let clappingIcon = <Svg id="clap--icon" xmlns="http://www.w3.org/2000/svg" viewBox="-549 338 100.1 125"> <path d="M-471.2 366.8c1.2 1.1 1.9 2.6 2.3 4.1.4-.3.8-.5 1.2-.7 1-1.9.7-4.3-1-5.9-2-1.9-5.2-1.9-7.2.1l-.2.2c1.8.1 3.6.9 4.9 2.2zm-28.8 14c.4.9.7 1.9.8 3.1l16.5-16.9c.6-.6 1.4-1.1 2.1-1.5 1-1.9.7-4.4-.9-6-2-1.9-5.2-1.9-7.2.1l-15.5 15.9c2.3 2.2 3.1 3 4.2 5.3zm-38.9 39.7c-.1-8.9 3.2-17.2 9.4-23.6l18.6-19c.7-2 .5-4.1-.1-5.3-.8-1.8-1.3-2.3-3.6-4.5l-20.9 21.4c-10.6 10.8-11.2 27.6-2.3 39.3-.6-2.6-1-5.4-1.1-8.3z" /><path d="M-527.2 399.1l20.9-21.4c2.2 2.2 2.7 2.6 3.5 4.5.8 1.8 1 5.4-1.6 8l-11.8 12.2c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l34-35c1.9-2 5.2-2.1 7.2-.1 2 1.9 2 5.2.1 7.2l-24.7 25.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l28.5-29.3c2-2 5.2-2 7.1-.1 2 1.9 2 5.1.1 7.1l-28.5 29.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.4 1.7 0l24.7-25.3c1.9-2 5.1-2.1 7.1-.1 2 1.9 2 5.2.1 7.2l-24.7 25.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l14.6-15c2-2 5.2-2 7.2-.1 2 2 2.1 5.2.1 7.2l-27.6 28.4c-11.6 11.9-30.6 12.2-42.5.6-12-11.7-12.2-30.8-.6-42.7m18.1-48.4l-.7 4.9-2.2-4.4m7.6.9l-3.7 3.4 1.2-4.8m5.5 4.7l-4.8 1.6 3.1-3.9" /> </Svg>

        let resCard = this.state.responses.map((e, k) => {
            return (
                <TransitionMotion
                    key={`response_${k}`}
                    defaultStyles={respAppear ? [{ key: `response_Transition_${k}`, style: { top: 50, opacity: 0 } }] : []}
                    styles={respAppear ? [{ key: `response_Transition_${k}`, style: { top: spring(0), opacity: spring(1) } }] : []}
                    willEnter={() => ({ top: 50, opacity: 0 })}
                    willLeave={() => ({ top: spring(50), opacity: spring(0) })}
                >
                    {styles =>
                        <div>
                            {styles.map(({ key, style }) => (
                                <ResHeader key={key} style={style}>
                                    <div style={{ display: 'flex', flexDirection: 'row', paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px' }}>
                                        <img style={{ borderRadius: '50%', height: '50px' }} src={e.profile_image} src={e.profile_image} />
                                        <div style={{ padding: 10 }}>
                                            {e.username}
                                            <br />
                                            {`${this.formatDate(e.time_stamped)} - ${this.estTimeToRead(e.content)}`}
                                        </div>
                                    </div>
                                    <div style={{ padding: '20px' }}>
                                        {e.content}
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingTop: 15 }}>
                                            <div>
                                                <span style={{ cursor: 'pointer' }} onClick={() => this.addClaps(k)}>{clappingIcon}</span> {e.claps}
                                            </div>
                                            <div>
                                                <span onClick={() => this.handleToggle()}>menu</span>
                                                {this.state.menuToggle ?
                                                    <div>
                                                        <span onClick={() => this.deleteResponse(k)}>Delete</span>
                                                    </div>
                                                    :
                                                    ''
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </ResHeader>
                            ))

                            }
                        </div>
                    }
                </TransitionMotion>
            )


        })


        return (

            <TransitionMotion
                defaultStyles={postAppear ? [{ key: 'blogPost', style: { top: 70, opacity: 0 } }] : []}

                styles={postAppear ? [{ key: 'blogPost', style: { top: spring(40), opacity: spring(1) } }] : []}

                willEnter={() => ({ top: 70, opacity: 0 })}

                willLeave={() => ({ top: spring(70), opacity: spring(0) })}
            >
                {styles =>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>

                        {styles.map(({ key, style }) => (
                            <BlogPageWrapper key={key} style={{ ...style }} >
                                <TransitionMotion
                                    defaultStyles={sidebarAppear ? [{ key: 'sidebar', style: { left: -250, opacity: 0 } }] : []}

                                    styles={sidebarAppear ? [{ key: 'sidebar', style: { left: spring(-166), opacity: spring(1) } }] : []}

                                    willEnter={() => ({ left: -250, opacity: 0 })}

                                    willLeave={() => ({ left: spring(-250), opacity: spring(0) })}
                                >{styles =>
                                    <div>
                                        {styles.map(({ key, style }) => (
                                            <div key={key} style={{ ...position, ...style }}>
                                                <Sidebar blog_id={this.props.post.id} claps={this.props.post.claps} />
                                            </div>
                                        ))}
                                    </div>
                            }
                            </TransitionMotion>

                            <HashTag fontWeight='400' lineHeight='1em' marginTop={65}>{title}</HashTag>
                            <img style={{ height: '50vh', backgroundPosition: 'center', backgroundSize: 'cover' }} src={`${image}`} />
                            <HashTag id={'bodyText'} fontSize={'21px'} fontWeight='200' lineHeight='1.6em'>{content}</HashTag>

                            <div>
                                {
                                    this.props.user ?
                                        this.props.user.admin ?
                                            <div style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <Link style={{ textDecoration: 'none' }} to='/blog/create'><CardButton>Edit</CardButton></Link>
                                                <CardButton onClick={this.deletePost}>Delete</CardButton>
                                            </div> : ''
                                        : ''
                                }
                            </div>
                            
                            <LineBreak />
                            

                            <div id='resInput' style={{ boxShadow: '0 1px 4px rgba(44, 44, 46, 0.32)', padding: '10px', width: '28.8vw' }}>
                                {
                                    this.props.user.id ?
                                        <div  >

                                            <ResponseInput value={this.state.response} name='response' onChange={this.handleChange} placeholder='Write a response' />

                                            <Button onClick={this.handleSubmit} >Publish</Button>
                                        </div>
                                        :
                                        <a href={process.env.REACT_APP_LOGIN}> <ResponseInput placeholder='Write a Response' /> </a>
                                }
                            </div>

                                {resCard}


                            </BlogPageWrapper>))}
                    </div>}
            </TransitionMotion>
        )
    }
};
function mapStateToProps(state) {
    return {
        user: state.user,
        post: state.post,
        blogs: state.blogs,
        activePost: state.activePost,
        render: state.render
    }
}
export default connect(mapStateToProps, { getUser, getPost, shouldRender })(BlogPage)

const BlogPageWrapper = glamorous.div(
    {
        position: 'absolute',
        top: '40px',
        zIndex: '1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '45vw',
    },

)
const ResponseInput = glamorous.textarea(
    {
        width: '98%',
        height: '4vw',
        border: 'none',

    }
)
let HashTag = glamorous.h2(
    'HashTag',
    {
        fontFamily: "'Libre Baskerville', 'serif'",
        fontFamily: "'Lora', serif",
        fontSize: '30px',
        fontWeight: '200',
        letterSpacing: '0.05em'
    },
    (props) => ({
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        lineHeight: props.lineHeight,
        marginTop: props.marginTop
    })
)
const CardButton = glamorous.button(
    {
        background: 'white',
        border: '1px solid #b3b3b3',
        color: '#b3b3b3',
        borderRadius: 3,
        margin: '0px 3px',
        display: 'block',
        fontFamily: "'Tinos', serif",
        letterSpacing: 1,
        transition: 'all .2s',
        textDecoration: 'none',
        ':hover': {
            background: '#b3b3b3',
            color: 'white',
            cursor: 'pointer'
        }
    }
)
const ResHeader = glamorous.div(
    {
        position: 'relative',
        width: '30vw',
        // height: '345px',
        boxShadow: '0 1px 4px rgba(44, 44, 46, 0.32)',


    }

)
const clapFade = css.keyframes({
    '0%': { boxShadow: '0px 0px 3px #1976D2' },
    // '50%': { boxShadow: '0 0px 25px #1976D2' },
    '100%': { boxShadow: '0 0px 40px #0083dd1f' }

})
const Svg = glamorous.svg(
    'clappingSvg',
    {
        height: '35px',
        width: '35px',
        fill: '#1976D2',
        border: '1px solid',
        borderRadius: '50%',
        borderColor: 'black',
    },
    {

        ':hover': {
            borderColor: '#1976D2',
            stroke: '#fff',
            animation: `${clapFade} 1s ease-in infinite`
        }
    }
)

const Button = glamorous.div(
    {
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 75,
        border: '1px solid',
        borderRadius: '5px',
        padding: '5px',
        borderColor: '#0083DD',
        color: '#0083DD',
        cursor: 'pointer', 
        ':hover': {
            background: '#0083DD',
            color: 'white'
        }
    }
)

const LineBreak = glamorous.div(
    {
        width: 500,
        height: 1,
        background: '#e3e3e3',
        margin: '25px auto'

    }
)