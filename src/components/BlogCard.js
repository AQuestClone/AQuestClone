import React, { Component } from 'react';
import glamorous from 'glamorous';
import axios from 'axios';
import {Link} from 'react-router-dom'




const Card = glamorous.div(
    {
        width: '600',
        height: '425',
        background: '#EF5350',
        margin: '15'
    }
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
                <Link to={`/blog/${e.id}`}>
                <Card key={k}>
                    {e.title}
                    <br />
                    {e.image}
                    <br />
                    {e.content}
                    <br />
                    {e.claps}
                    <br/>
                    {e.time_stamped}
                   
                </Card>
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
