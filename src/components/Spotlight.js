import React, {Component} from 'react';
import {TransitionMotion, spring} from 'react-motion';
import glamorous from 'glamorous';
import cover from './assets/cover.jpg';
import awww from './assets/awww.png';
import fwa from './assets/fwa.png';
import cda from './assets/css-design-awards.png';

export default class Spotlight extends Component{
    constructor(props){
        super(props);

        this.state = {
            active: props.active,
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps === nextState) {
            return false
        }
    }

    render(){
        const CoverImg = glamorous.div({
            background: `url(${cover})`,
            backgroundColor: 'white',
            backgroundPosition: 'top center no-repeat',
            backgroundSize: 'cover',
            position: 'absolute',
            width: '100%',
            height: '100%',
        })
        const CoverText = glamorous.div({
            position: 'absolute', 
            right: '10%',
            top: '35%',
            height: 303, 
            width: 500, 
            fontFamily: '"Oswald", sans-serif',
            color: 'white',
        })
        const Title = glamorous.div({
            fontSize: '100px',
            marginBottom: '10px',
            lineHeight: '90px',
            position: 'relative',
        })

        const coverTextAnim = {
            opacity: this.state.active ? spring(1) : 1,
            top: this.state.active ? spring(0) : 0
        }
        const Sotd = glamorous.div({
            fontWeight: 400, 
            position: 'relative',
            fontSize: '.75rem',
            letterSpacing: '3px',
            lineHeight: 1.2
        })
        const Awww = glamorous.div({
            position: 'relative',
            backgroundImage: `url(${awww})`,
            backgroundSize: '100%',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            height: '30px',
            width: '115px'
        })
        const Fwa = glamorous.div({
            position: 'relative',
            backgroundImage: `url(${fwa})`,
            backgroundSize: 'auto 100%',
            backgroundRepeat: 'no-repeat',
            height: '20px',
            marginTop: '5px',
            marginBottom: '5px',
            width: '115px'
        })
        const CDA = glamorous.div({
            position: 'relative',
            backgroundImage: `url(${cda})`,
            backgroundSize: 'auto 100%',
            backgroundRepeat: 'no-repeat',
            width: '200px',
            height: '20px',
            marginTop:'15px',
            marginBottom: '5px'
        })

        let arr = this.state.active ? [{id: 0}] : []
        return (
            <TransitionMotion
        defaultStyles={arr.map(() => ({ key: 'one', style: {top: -this.props.height, opacity: 0}}))}
        styles={arr.map(() => ({ key: 'one', style: { top: spring(0), opacity: spring(1)}}))}
        willLeave={() => ({top: spring(-this.props.height)})}
        willEnter={() => ({top: -this.props.height, opacity: 0})}
      >
        {(styles) => (
          <div
          style={{
            height: '100%',
            width: '100%', 
            position: 'relative',
            overflow: 'hidden'
        }
          } >
            {styles.map(({ key, style }) => (
              <CoverImg key={key} style={{...style}}>
                <TransitionMotion
                    defaultStyles={style.top < -2 && this.state.active ? [] : [{id: 1}].map(() => ({key: 'two', style: {top: -50, opacity: 0}}))}
                    styles={style.top < -2 && this.state.active ? [] : [{id: 1}].map(() => ({key: 'two', style: coverTextAnim}))}
                    willEnter={() => ({top: -50, opacity: 0})}
                >
                    {(styles) => 
                        <CoverText>
                            {styles.map(({key, style}) => 
                                <div key={key}>
                                    <Title style={{...style}}>
                                        CAMPO ALLE COMETE
                                    </Title>
                                    <div style={{float: 'left', marginRight: '50px'}}>
                                        <Awww style={{...style}}></Awww>
                                        <Sotd style={{...style}}>SITE OF THE DAY</Sotd>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        <Fwa style={{...style}}></Fwa>
                                        <Sotd style={{...style}}>SITE OF THE DAY</Sotd>
                                    </div>
                                    <div style={{float: 'left', marginRight: '50px'}}>
                                    <CDA style={{...style}}></CDA>
                                    <Sotd style={{...style}}>SITE OF THE DAY</Sotd>
                                    </div>
                                </div>
                            )}
                        </CoverText>}
                </TransitionMotion>
              </CoverImg>
            ))}
          </div>
        )}
      </TransitionMotion>
        );
      }
    
}