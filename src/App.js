import React, { Component } from 'react';
import MainWrapper from './components/MainWrapper';
import glamorous from 'glamorous';
import {css} from 'glamor'
import 'glamor/reset';
import Globe from './components/Globe';
import {TransitionMotion, spring} from 'react-motion';

class App extends Component {
  constructor(){
    super();

    this.state = {
      switch: false,
    }
  }

  componentDidMount(){
    // setTimeout(this.switchGlobe, 5000)
  }

  switchGlobe = () => {
    this.setState({
      switch: !this.state.switch
    })
  }
    render(){
      // let globe = document.getElementById('globe');
    return (
      <div>
        {console.log(this.state.switch)}
        {
          this.state.switch ? 
          <MainWrapper/>    :          
         <Globe />
        }
      </div>
    )
  }
}
export default App;