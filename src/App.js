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
      let fadeout = css.keyframes({
      '0%': {opacity: 1},
      '50%': {opacity: 1},
      '100%': {opacity: 0}
      })
      // let globe = document.getElementById('globe');
    return (
      <div>
        {console.log(this.state.switch)}
        {
          this.state.switch ? 
          <MainWrapper/>    :          
         <Globe style={{animation: `${fadeout} 5s`}} />
        }
      </div>
    )
  }
}
export default App;