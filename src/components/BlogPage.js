import React, { Component } from 'react';
import glamorous from 'glamorous';
import axios from 'axios';
import { getUser, getPost } from '../ducks/reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { log } from 'util';

const BlogPageWrapper = glamorous.div(
    {   
        position: 'relative',
        top:'40px',
        zIndex:'1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '800',
        width: '45vw',
    },

)
const ResponseInput = glamorous.input(
    {
        width: '70%',
        height: '20px'
    }
)
let HashTag = glamorous.h2(
    {
        fontFamily: "'Libre Baskerville', 'serif'",
        fontSize: '30px',
        fontWeight: '400',
        letterSpacing: '0.05em',
    },
    (props) => ({
        fontSize: props.fontSize
    })
)
const CardButton = glamorous.button(
    {
        background: '#1976D2'
    }
)
const ResHeader = glamorous.div(
    {
        width: '500px',
        height: '345px',
        boxShadow: '0 1px 4px rgba(44, 44, 46, 0.32)',

    }

)


class BlogPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: [],
            response: '',
            responses: [],
            menuToggle: false
        }
        this.deletePost = this.deletePost.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.addClaps = this.addClaps.bind(this)
        this.handleToggle = this.handleToggle.bind(this)

    }
    componentDidMount() {
        this.props.getPost(this.props.match.params.id)
        axios.get(`/api/responses/${this.props.match.params.id}`).then(res => {
            this.setState({ responses: res.data })
        })
    }
    deletePost() {
        alert('are you sure?')
        console.log('this.props.match.params.id', this.props.match.params.id)
        axios.delete(`/api/blogpost/${this.props.match.params.id}`).then((res) => console.log(res.data))
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
        console.log(obj)
        axios.post(`/api/responses/${this.props.post.id}`, obj).then(res => console.log(res))

    }
    handleToggle(){
        this.setState({
            handleToggle: !this.state.handleToggle
        })
    }
    addClaps(x){
     let ans = this.state.responses[x].claps++
     this.setState({
         e: ans
     })
     axios.put(`/api/responses/${this.state.responses[x].res_id}`, {claps:this.state.responses[x].claps})
    }
    render() {
        console.log('blog page', this.props)
        console.log('blog page state', this.state)
        const { title, image, content } = this.props.post
        let resCard = this.state.responses.map((e, k) => {
            return (
                <ResHeader key={k}>
                    <div style={{ display: 'flex', flexDirection: 'row', paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px' }}>
                        <img style={{ borderRadius: '50%', height: '50px', padding: '5px' }} src={e.profile_image} src={e.profile_image} />
                        <div>
                            {e.username}
                            <br />
                            {e.time_stamped}
                        </div>
                    </div>
                    <div style={{ padding: '20px' }}>
                        {e.content}
                        <div style={{ display: 'flex',justifyContent: 'space-between',padding:'20px'}}>
                            <div>
                                {e.claps} <span style={{cursor:'pointer'}} onClick={()=>this.addClaps(k)}>+</span>
                            </div>
                            <div>
                                <span onClick={this.handleToggle}>menu</span>
                                {this.state.menuToggle?
                                <div>
                                    <span>Edit</span>
                                    <span>Delete</span>
                                </div>
                                :
                                ''
                                }
                            </div>
                        </div>
                    </div>
                </ResHeader>
            )


        })
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <BlogPageWrapper>
                    <HashTag>{title}</HashTag>
                    <img style={{ height: '50vh', backgroundPosition: 'center', backgroundSize: 'cover' }} src={`${image}`} />
                    <HashTag fontSize={'17px'}>{content}</HashTag>

                    {
                        this.props.user.id ?
                            <div style={{ width: ' 40vw' }}>

                                <ResponseInput name='response' onChange={this.handleChange} placeholder='Write a response' />
                                <div>
                                    responses
                    </div>
                                <button onClick={this.handleSubmit} >submit</button>
                            </div>
                            :
                            <a href={process.env.REACT_APP_LOGIN}> <ResponseInput placeholder='Write a Response'/> </a>
                    }

                    <div>
                        {
                            this.props.user ?
                                this.props.user.admin ?
                                    <div>
                                        <Link to='/blog/create'><CardButton>edit</CardButton></Link>
                                        <CardButton onClick={this.deletePost}>delete</CardButton>
                                    </div> : ''
                                : ''
                        }
                    </div>

                    {resCard}

                </BlogPageWrapper>
            </div>
        )
    }
};
function mapStateToProps(state) {
    return {
        user: state.user,
        post: state.post
    }
}
export default connect(mapStateToProps, { getUser, getPost })(BlogPage)
