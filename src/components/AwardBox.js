import React, {Component} from 'react';
import CheckVisibility from './CheckVisibility';
import glamorous from 'glamorous';
import trophy from './assets/award.png';
import Count from 'countup.js';

export default class AwardBox extends Component{
    constructor(){
        super();
        this.counting = null
    }

    componentDidMount(){
        this.counting = new Count(document.getElementById(`count_${this.props.ind}`), 0, this.props.num, 0, 1.5, {useEasing: false})
    }

    render(){
        var {title, interval, award, ind, num} = this.props  
        return (
                    <Background>
                        {this.props.visible ? this.counting.start() : null}
                        <AwardImage />
                        <Details>
                            <Text>{title}</Text>
                            <br/>
                            <Text>{award}</Text>
                        </Details>
                        <Number id={`count_${ind}`}></Number>
                    </Background>
        )
    }

}   
const Background = glamorous.div(
    'background',
    {
    width: '100%',
    height: '100%',
    color: 'white',
    background: '#0083DD',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    transition: '.5s',
    fontFamily: 'Montserrat',
    position: 'relative',
    ':hover':{
        background: '#0071DA'
    },
    ':hover h3':{
        borderTop: '2px solid #0083DD',
        borderBottom: '2px solid #0083DD'
    }
})

const AwardImage = glamorous.span({
    background: `url(${trophy}) center no-repeat`,
    width: '40px',
    height: '40px',
    margin: '-5% auto 5%',
    position: 'relative',
    display: 'block',
    boxSizing: 'border-box',
    '@media(max-width: 768px)': {
        marginTop: 5,
        display: 'none'
    }
})

const Details = glamorous.h3({
    width: '170px',
    height: '66px',
    margin: '0 auto',
    borderTop: '2px solid #0071DA',
    borderBottom: '2px solid #0071DA',
    padding: '15px 0 0',
    transition: '.5s',
    '@media(max-width: 768px)': {
        padding: '10px 0 0',
        width: '80%',
        borderTop: 'none'
    }
})

const Text = glamorous.span({
    letterSpacing: '3px',
    textTransform: 'uppercase',
    fontWeight: 400,
    fontSize: '75%',
    '@media(max-width: 768px)': {
        fontSize: '40%',
        letterSpacing: '2px',
        textAlign: 'center'
    }
})

const Number = glamorous.span({
    fontSize: '100px',
    '@media(max-width: 768px)': {
        fontSize: 35,
        paddingTop: 5
    }
})
