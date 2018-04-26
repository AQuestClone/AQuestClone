import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import glamorous from 'glamorous';
import { css } from 'glamor'
import axios from 'axios';
import { getPost } from '../ducks/reducer';
import { placeholder } from 'glamor';
import Dropzone from 'react-dropzone';

import BlogHeader from './BlogHeader'


const CreateWrapper = glamorous.div(
    {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 75,
        height: '700',
        // background: '#1976D2',
        // border: '1px solid gray',
        width: '70vw',
        overflow: 'auto'
    }
)
const AddPostInput = glamorous.input(
    {
        width: '300',
        height: 50,
        fontSize: '2.3em',
        fontFamily: "'Martel Sans', sans-serif",
        border: 'none',
        ':focus': {
            outline: 'none'
        },
        '::placeholder': {
            color: '#b3b3b3'
        }
    }
)
const SubmitButton = glamorous.button(
    {
        width: '85',
        height: '30',
        background: 'white',
        border: '2px solid #b3b3b3',
        color: '#b3b3b3',
        borderRadius: 3,
        display: 'block',
        margin: 'auto',
        fontFamily: "'Tinos', serif",
        letterSpacing: 1,
        transition: 'all .2s',
        ':hover': {
            background: '#b3b3b3',
            color: 'white',
            cursor: 'pointer'
        }
    }

)
const ContentInput = glamorous.textarea(
    {
        width: '95%',
        height: '350',
        background: 'white',
        fontSize: 18,
        fontFamily: "'Tinos', serif",
        letterSpacing: 1,
        border: 'none',
        borderBottom: '1px solid #e3e3e3',
        marginBottom: 25,
        ':focus': {
            outline: 'none'
        },
        '::placeholder': {
            color: '#b3b3b3'
        }
        
    }
)

const ImageDiv = glamorous.div(
    {
        width: 300,
        height: 100,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: '#b3b3b3',
        marginBottom: 10,
        ' h1': {
            fontWeight: 'normal',
            fontSize: '2em',
            fontFamily: "'Martel Sans', sans-serif"

        }
    }
)


//new design

const PostContent = glamorous.div(
    {
        width: 600,
        border: '1px solid gray',
        
    }
)

const dropStyle = css({
    width: 60,
    height: 35,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
    background: 'white',
    border: '2px solid #b3b3b3',
    color: '#b3b3b3',
    borderRadius: 3,
    marginLeft: 15,
    transition: 'all .2s',
    ':hover': {
        background: '#b3b3b3',
        color: 'white',
        cursor: 'pointer'
    },
})


const CloudinaryURL = 'https://api.cloudinary.com/v1_1/dbuqor9no/image/upload'
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
        axios.put(`/api/blogpost/${this.props.post.id}`, obj).then((res) => res)
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    resetState(e) {
        this.setState({ [e.target.name]: '' })
    }
    handleDrop = files => {
        // Push all the axios request promise into a single array
        const uploaders = files.map(file => {
            // Initial FormData
            const formData = new FormData();
            formData.append("file", file);
            formData.append("tags", `codeinfuse, medium, gist`);
            formData.append("upload_preset", "aay8b9ww"); // Replace the preset name with your own
            formData.append("api_key", process.env.REACT_APP_CLOUDINARYKEY); // Replace API key with your own Cloudinary key
            formData.append("timestamp", (Date.now() / 1000) | 0);

            // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
            return axios.post('https://api.cloudinary.com/v1_1/dbuqor9no/image/upload', formData, {
                headers: { "X-Requested-With": "XMLHttpRequest" },
            }).then(response => {
                const data = response.data;
                const fileURL = data.secure_url // You should store this URL for future references in your app
                console.log('cloudinary response', data.url);
                this.setState({ image: data.url })

            })
        });

        // Once all the files are uploaded 
        axios.all(uploaders).then(() => {
            // ... perform after upload is successful operation
        });
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
                            <div style={{ width: '75%'}}>
                                <h1>Title</h1>
                                {/* <AddPostInput name='title' value={!this.state.title?title:this.state.title} onChange={this.handleChange}/> */}
                                <AddPostInput name='title'
                                    value={this.state.title === 'x' ? title : this.state.title}
                                    onClick={this.resetState}
                                    onChange={this.handleChange} />
                                <ImageDiv>
                                    <h1>Image</h1>
                                    <Dropzone
                                        onDrop={this.handleDrop}
                                        multiple
                                        accept="image/*"
                                        className={dropStyle}
                                        
                                    >
                                        <i class="fa fa-plus"></i>
                                    </Dropzone>
                                </ImageDiv>

                                <h1>Tell Your Story</h1>
                                <ContentInput name='content'
                                    value={this.state.content === 'x' ? content : this.state.content}
                                    onClick={this.resetState}
                                    onChange={this.handleChange} />
                                <SubmitButton onClick={() => this.editGame()}>Save</SubmitButton>
                            </div>
                            :
                            <div style={{ width: '75%'}}>
                                <AddPostInput name='title' placeholder='Title' onChange={this.handleChange} />
                                <ImageDiv>
                                    <h1>Image</h1>
                                    <Dropzone
                                        onDrop={this.handleDrop}
                                        multiple
                                        className={dropStyle}
                                        accept="image/*"
                                        
                                    >
                                        <i class="fa fa-plus"></i>
                                    </Dropzone>
                                </ImageDiv>
                                <ContentInput name='content' placeholder={'Tell your story...'} onChange={this.handleChange} />
                                <SubmitButton onClick={() => this.addGame()}>Create</SubmitButton>
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
export default connect(mapStateToProps, { getPost  })(CreatePost)
