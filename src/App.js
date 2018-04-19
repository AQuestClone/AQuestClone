import React, { Component } from 'react';
import MainWrapper from './components/MainWrapper';
import glamorous from 'glamorous';
import {css} from 'glamor'
import 'glamor/reset';
import Globe from './components/Globe';
import {TransitionMotion, spring} from 'react-motion';
import {getBlogs} from './ducks/reducer';
import {connect} from  'react-redux';

class App extends Component {
  constructor(){
    super();

    this.state = {
      switch: true,
    }
  }

  componentDidMount(){
    // setTimeout(this.switchGlobe, 7400)
    this.props.getBlogs()

  }

  switchGlobe = () => {
    this.setState({
      switch: !this.state.switch
    })
  }
    render(){
    return (
      <div>
        {
          this.state.switch ? 
          <MainWrapper/>    :          
         <Globe />
        }
      </div>
    )
  }
}
function mapStateToProps(state){
  return {
  }
}
export default connect(mapStateToProps, {getBlogs}) (App)