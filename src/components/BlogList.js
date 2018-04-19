import React, { Component } from 'react';
import glamorous from 'glamorous';
import BlogCard from './BlogCard';
import axios from 'axios';
import CheckVisibility from './CheckVisibility';
import Particles from 'react-particles-js';
import config from './assets/particlesjs-config.json';
import {connect} from 'react-redux'



const BlogCardWrapper = glamorous.div(
  {
    position: 'relative',
    top: '65px',
    zIndex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '70vw',

  }
)

class BlogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPosts: []
    }
  }


  render() {
    console.log(this.props)
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Particles
          params={config}
          style={{
            position: 'fixed',
            left: '0'
          }}
        />
        <BlogCardWrapper>
          {
            
              this.props.blogs.map((e, i) => (
                <CheckVisibility key={`blog${e.blog_id}_${e.title}`}>
                  {
                    (isVisible) =>
                      <BlogCard post={e} isVisible={isVisible} />
                  }
                </CheckVisibility>
              ))
           
          }
        </BlogCardWrapper>



      </div>
    )
  }
};
function mapStateToProps(state) {
  return{

    blogs: state.blogs
  }
}
export default connect(mapStateToProps, {})(BlogList)
