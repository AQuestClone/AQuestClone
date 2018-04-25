import React, { Component } from 'react';
import glamorous from 'glamorous';
import BlogCard from './BlogCard';
import axios from 'axios';
import CheckVisibility from './CheckVisibility';
import Particles from 'react-particles-js';
import config from './assets/particlesjs-config.json';
import { connect } from 'react-redux'
import { getBlogs, shouldRender } from '../ducks/reducer'
import { TransitionMotion, spring } from 'react-motion'
import { active } from 'glamor';



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
  componentDidMount() {
    this.props.getBlogs()
    this.props.shouldRender(true)
  }
  shouldComponentUpdate(nextProps, nextState){
    if (JSON.stringify(nextProps) === JSON.stringify(this.props)){
      return false;
    }
    return true
  }


  render() {
    let shouldMount = this.props.render && this.props.blogs.length > 0;
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TransitionMotion
          defaultStyles={shouldMount ?
            [{
              key: 'blogParticles',
              style: {  opacity: 0 }
            }] : []}
          styles={shouldMount ?
            [{
              key: 'blogParticles',
              style: {  opacity: spring(1) }
            }] : []}
          willEnter={() => ({ opacity: 0})}
        >
          {
            (styles) =>
              <div>
                {styles.map(({ key, style }) => (
                  <Particles
                    key={key}
                    params={config}
                    style={{
                      transition: '2s',
                      position: 'fixed',
                      left: '0',
                      ...style
                    }}
                  />

                ))}
              </div>
                }
        </TransitionMotion>
        <BlogCardWrapper>
            {
              this.props.blogs.map((e, i) => (
                <CheckVisibility key={`blog${e.blog_id}_${e.title}`}>
                  {
                    (isVisible) =>
                      <BlogCard post={e} isVisible={isVisible} shouldRender={this.props.render} />

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
  return {
          render: state.render,
    blogs: state.blogs,

  }
}
export default connect(mapStateToProps, {getBlogs, shouldRender })(BlogList)
