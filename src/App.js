import React, { Component } from 'react';
import MainWrapper from './components/MainWrapper';
import glamorous from 'glamorous';
import {css} from 'glamor'
import 'glamor/reset';
import Globe from './components/Globe';
import {TransitionMotion, spring} from 'react-motion';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      switch: false,
    }
  }

  componentDidMount(){
    setTimeout(this.switchGlobe, 7400)
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