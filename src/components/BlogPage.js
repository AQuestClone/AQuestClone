import React, { Component } from 'react';
import glamorous from 'glamorous';
import axios from 'axios';
import { getUser, getPost } from '../ducks/reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { log } from 'util';

const BlogPageWrapper = glamorous.div(
    {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '800',
        width: '45vw',
    },
   
)
const ResponseInput = glamorous.input(
    {
        width:'70%',
        height:'20px'
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

class BlogPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: [],
            response:'',
            responses:[]
        }
        this.deletePost = this.deletePost.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    componentDidMount() {
        this.props.getPost(this.props.match.params.id)
        axios.get(`/api/responses/${this.props.match.params.id}`).then(res=>{  
            this.setState({responses:res.data})
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
    handleSubmit(){
        let obj = {
            user_id: this.props.user.id,
            content: this.state.response,
            claps: 0
        }
        console.log(obj)
        axios.post(`/api/responses/${this.props.post.id}`,obj).then(res=>console.log(res))

    }
    render() {
        console.log('blog page', this.props)
        console.log('blog page state', this.state)
        const {title, image, content} = this.props.post
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <BlogPageWrapper>
                    <HashTag>{title}</HashTag>
                    <img style={{ height: '50vh', backgroundPosition: 'center', backgroundSize: 'cover' }} src={`${image}`} />
                    <HashTag fontSize={'17px'}>{content}</HashTag>

                    {
                    this.props.user.id?
                    <div style={{width:' 40vw'}}>
                    <ResponseInput name='response' onChange={this.handleChange} placeholder='Be the first to write a response'/>
                    <button onClick={this.handleSubmit} >submit</button>
                    </div>
                    :
                    <a href={process.env.REACT_APP_LOGIN}> Log in to respond </a> 
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
