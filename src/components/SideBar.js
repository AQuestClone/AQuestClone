import React, { Component } from 'react';
import glamorous from 'glamorous';


export default class Sidebar extends Component {
    render() {
        return (
            <Wrapper>
            </Wrapper>
        )
    }
};
let Wrapper = glamorous.div(
    {   
    
        height: 200,
        width: 50,
        background:'black',
        position: 'sticky',
        top: '250px',
      
    }
)
