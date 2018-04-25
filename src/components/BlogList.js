import React, { Component } from 'react';
import glamorous from 'glamorous';
import BlogCard from './BlogCard';
import axios from 'axios';
import CheckVisibility from './CheckVisibility';
import Particles from 'react-particles-js';
import config from './assets/particlesjs-config.json';
import { connect } from 'react-redux'
import { getBlogs, shouldRender, sortByClaps, sortByDate, sortByResponses } from '../ducks/reducer'
import { TransitionMotion, spring } from 'react-motion'
import { active } from 'glamor';





class BlogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPosts: [],

    }
  }
  componentDidMount() {
    this.props.getBlogs()
    this.props.shouldRender(true)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (JSON.stringify(nextProps) === JSON.stringify(this.props)) {
      return false;
    }
    return true
  }
  sortClaps(blogs) {
    this.props.sortByClaps(blogs)
    this.forceUpdate()
  }
  sortDate(blogs) {
    this.props.sortByDate(blogs)
    this.forceUpdate()
  }
  sortResponses(blogs) {
    this.props.sortByResponses(blogs)
    this.forceUpdate()
  }



  render() {
    console.log('page props', this.props)
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
          willEnter={() => ({ opacity: 0 })}
          willLeave={() => ({ opacity: 0 })}

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
            <MenuDiv style={{display:'flex',flexDirection:'row', justifyContent:'left'}}>
              <MenuItem style={{ fontWeight: '900', fontSize:'25px' }}>Sort By</MenuItem>
              <MenuItem onClick={() => this.sortClaps(this.props.blogs)}>Popularity</MenuItem>
              <MenuItem onClick={() => this.sortDate(this.props.blogs)}>Latest</MenuItem>
              <MenuItem onClick={() => this.sortResponses(this.props.blogs)}>Responses</MenuItem>
            </MenuDiv>
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
export default connect(mapStateToProps, { getBlogs, shouldRender, sortByClaps, sortByDate, sortByResponses })(BlogList)

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

// const Filter = glamorous.div(
//   {
//     display: 'flex',
//     justifyContent: 'center',
//     width: '45vh'
//   }
// )
// const FilterItem = glamorous.div(
//   {
//     padding: '3px'
//   },
//   {
//     ":hover":{
//       color:'#0083DD',
//       cursor:'pointer',
//       textDecoration:'underline'
//     }
//   }

// )
let Wrapper = glamorous.div(
  'mainMenu',
  {
    height: '100vh',
    width: '100%',
    background: '#0083DD',
    opacity: '0.95',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: '15',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: 'hidden'
  }
)

let MenuDiv = glamorous.div(
  {
    width: '70%',
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  }
)

let MenuItem = glamorous.div(
  {
    ' a, h1': {
      fontSize: 18,
      margin: 10,
      fontWeight: 'normal',
      padding: 0,
      display: 'block',
      textAlign: 'center',
      fontWeight: 'bold',
      letterSpacing: '0.4em',

    },
    ':before': {
      position: 'absolute',
      bottom: 0,
      left: '50%',
      width: '100%',
      height: 2,
      background: '#0083DD',
      content: '""',
      zIndex: '26',
      transform: 'translate(-50%, -50%)',
      opacity: '0.2'
    },
    ':after': {
      position: 'absolute',
      bottom: 0,
      left: '50%',
      width: '10%',
      height: 2,
      background: '#0083DD',
      content: '""',
      zIndex: '27',
      transform: 'translate(-50%, -50%)',
      opacity: '0',

    },
    ':hover:after': {
      opacity: '.5',
      width: '100%',
      transition: 'all .8s ease',
    }
  },
  {
    fontFamily: "'Montserrat', 'sans-serif'",
    fontSize: 17,
    position: 'relative',
    width: '80%',
    height: '60px',
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#0083DD',
    ':hover': {
      cursor: 'pointer'
    }
  })
