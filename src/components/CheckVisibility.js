import React from 'react';
var ReactDOM = require('react-dom');

export default class CheckVisibility extends React.Component{
    constructor(){
        super()

        this.state = {
            visible: false
        }
    }

    componentDidMount(){
        this.interval = setInterval(this.visibility, 100);
    }
    visibility = () => {
        let location = ReactDOM.findDOMNode(this).getBoundingClientRect(); 
        let viewPort = {
        top: 0,
        left: 0,
        bottom: window.innerHeight || document.documentElement.clientHeight,
        right: window.innerWidth || document.documentElement.clientWidth
    } 
    var isVisible = (
        location.top <= viewPort.bottom && location.bottom >= viewPort.top &&
        location.left <= viewPort.right && location.right >= viewPort.left
    );
        this.setState({
            visible: isVisible
    })
    if(this.state.visible){
        clearInterval(this.interval);
    }
}

    render(){
        return this.props.children(this.state.visible)
    }
}