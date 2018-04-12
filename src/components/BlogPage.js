import React, { Component } from 'react';
import glamorous from 'glamorous';
import axios from 'axios';
import { getUser, getPost} from '../ducks/reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const BlogPageWrapper = glamorous.div(
    {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '800',
        background: '#1976D2',
        width: '70vw',
    }
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
            post: []
        }
    }
    componentDidMount() {
        this.props.getPost(this.props.match.params.id)
    }
    render() {
        console.log('blog page', this.props)
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <BlogPageWrapper>
                    <h1>BlogPage{this.props.match.params.id}</h1>
                    <h1>{this.props.post.title}</h1>
                    <img src={`${this.props.post.image}`} />
                    <div>
                        {
                            this.props.user ?
                                this.props.user.admin ?
                                    <div>
                                        <Link to='/blog/create'><CardButton>edit</CardButton></Link>
                                        <CardButton>delete</CardButton>
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
