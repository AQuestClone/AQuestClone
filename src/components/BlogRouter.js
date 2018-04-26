import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import BlogPage from './BlogPage';
import CreatePost from './CreatePost';
import BlogList from './BlogList';
import BlogHeader from './BlogHeader';



export default class BlogRouter extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div>
                <BlogHeader />
                <Switch>
                    <Route path='/blog/create' component={CreatePost} />
                    <Route path='/blog/:id' component={BlogPage} />
                    <Route component={BlogList} />
                </Switch>
            </div>
        )
    }
}