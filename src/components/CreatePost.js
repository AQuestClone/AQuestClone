import React, { Component } from 'react';
import { connect } from 'react-redux';
import glamorous from 'glamorous';
import axios from 'axios';
import {getPost} from '../ducks/reducer';

const CreateWrapper = glamorous.div(
    {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '800',
        background: '#1976D2',
        width: '70vw',
    }
)
const AddPostInput = glamorous.input(
    {
        width:'300'
    }
)
const SubmitButton = glamorous.button(
    {
        width:'70',
        height:'20',
        background:'white'
    }

)
const ContentInput = glamorous.textarea(
    {
        width:'300',
        height:'60',
        background:'white'
    }
) 
 class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state={
            title:'',
            image:'',
            content:''

        }
        this.handleChange=this.handleChange.bind(this)
    }
    addGame(){
        let obj = {
            title:this.state.title,
            content:this.state.content,
            image:this.state.image,
            claps:0
        }
        console.log(obj)
        axios.post(`/api/blogpost/${this.props.user.id}`, obj).then((res)=>console.log)
    }
    handleChange(e){
        this.setState({ [e.target.name]: e.target.value })
    }
    
    render() {
        console.log(this.state);
        console.log('create', this.props);
        const {title, image, content} = this.props.post
        
        return (
            <div style={{display:'flex', justifyContent:'center'}}>
                <CreateWrapper>
                    {
                        this.props.post.id?
                        <div>
                        <h1>Title</h1>
                        <AddPostInput name='title' value={title} onChange={this.handleChange}/>
                        <h1>Image</h1>
                        <AddPostInput name='image' value={image} onChange={this.handleChange}/>
                        <h1>Tell Your Story</h1>
                        <ContentInput name='content' value={content} onChange={this.handleChange}/>
                        <SubmitButton onClick={()=>this.addGame()}>edit</SubmitButton>
                        </div>
                        :
                        <div>
                        <h1>Title</h1>
                        <AddPostInput name='title' placeholder='title' onChange={this.handleChange}/>
                        <h1>Image</h1>
                        <AddPostInput name='image' placeholder='image' onChange={this.handleChange}/>
                        <h1>Tell Your Story</h1>
                        <ContentInput name='content' placeholder={'tell your story'} onChange={this.handleChange}/>
                        <SubmitButton onClick={()=>this.addGame()}>button</SubmitButton>
                        </div>
                    }
                </CreateWrapper>
            </div>
        )
    }
};
function mapStateToProps(state){
    return{
        post: state.post
    }
}
export default connect(mapStateToProps, {getPost})(CreatePost)
