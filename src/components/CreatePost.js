import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import glamorous from 'glamorous';
import axios from 'axios';
import { getPost } from '../ducks/reducer';
import { placeholder } from 'glamor';

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
        width: '300'
    }
)
const SubmitButton = glamorous.button(
    {
        width: '70',
        height: '20',
        background: 'white'
    }

)
const ContentInput = glamorous.textarea(
    {
        width: '300',
        height: '60',
        background: 'white'
    }
)
class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'x',
            image: 'x',
            content: 'x'

        }
        this.handleChange = this.handleChange.bind(this)
        this.resetState = this.resetState.bind(this)
    }
    addGame() {
        let obj = {
            title: this.state.title,
            content: this.state.content,
            image: this.state.image,
            claps: 0
        }
        console.log(obj)
        axios.post(`/api/blogpost/${this.props.user.id}`, obj).then((res) => res)
    }

    editGame() {
        let title = ''
        let content = ''
        let image = ''

        if (this.state.title === 'x') {
            title = this.props.post.title;
        }
        else {
            title = this.state.title;
        }
        if (this.state.content === 'x') {
            content = this.props.post.content;
        }
        else {
            content = this.state.content;
        }
        if (this.state.image === 'x') {
            image = this.props.post.image;
        }
        else {
            image = this.state.image;
        }
       
        let obj = {
            title: title,
            content: content,
            image: image
        }

        // this.state.title === 'x'?
        // title: this.props.post.title
        // :
        // title:this.state.title,
        // content:this.state.content,
        // image:this.state.image,

        console.log(obj);
        axios.put(`/api/blogpost/${this.props.post.id}`, obj).then((res) => res)

    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    resetState(e) {
        this.setState({ [e.target.name]: '' })
    }

    render() {
        console.log(this.state);
        console.log('create', this.props);
        const { title, image, content } = this.props.post
        const stateTitle = this.state.title
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <CreateWrapper>
                    {
                        this.props.post.id ?
                            <div>
                                <h1>Title</h1>
                                {/* <AddPostInput name='title' value={!this.state.title?title:this.state.title} onChange={this.handleChange}/> */}
                                <AddPostInput name='title'
                                    value={this.state.title === 'x' ? title : this.state.title}
                                    onClick={this.resetState}
                                    onChange={this.handleChange} />
                                <h1>Image</h1>
                                <AddPostInput name='image'
                                    value={this.state.image === 'x' ? image : this.state.image}
                                    onClick={this.resetState}
                                    onChange={this.handleChange} />
                                <h1>Tell Your Story</h1>
                                <ContentInput name='content'
                                    value={this.state.content === 'x' ? content : this.state.content}
                                    onClick={this.resetState}
                                    onChange={this.handleChange} />
                                <SubmitButton onClick={() => this.editGame()}>edit</SubmitButton>
                            </div>
                            :
                            <div>
                                <h1>Title</h1>
                                <AddPostInput name='title' placeholder='title' onChange={this.handleChange} />
                                <h1>Image</h1>
                                <AddPostInput name='image' placeholder='image' onChange={this.handleChange} />
                                <h1>Tell Your Story</h1>
                                <ContentInput name='content' placeholder={'tell your story'} onChange={this.handleChange} />
                                <SubmitButton onClick={() => this.addGame()}>button</SubmitButton>
                            </div>
                    }
                </CreateWrapper>
            </div>
        )
    }
};
function mapStateToProps(state) {
    return {
        post: state.post
    }
}
export default connect(mapStateToProps, { getPost })(CreatePost)
