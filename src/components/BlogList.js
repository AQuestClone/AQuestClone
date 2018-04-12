import React, { Component } from 'react';
import glamorous from 'glamorous';
import BlogCard from './BlogCard';

const BlogCardWrapper = glamorous.div(
    {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        height:'800',
        background:'#1976D2',
        width:'70vw',

    }
)

export default class BlogList extends Component {
  render() {
    return (
      <div style={{display:'flex', justifyContent:'center'}}>
          
        <BlogCardWrapper>
        <BlogCard/>
        </BlogCardWrapper>
         
      </div>
    )
  }
};