import React, { Component } from 'react';
import glamorous from 'glamorous';
import { css } from 'glamor';
import axios from 'axios';




export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            facebook: { fill: 'rgba(0,0,0,.68)' },
            twitter: { fill: 'rgba(0,0,0,.68)' },
            bookmark: { fill: 'rgba(0,0,0,.68)' },
            clappingIcon: {fill: '#1976D2' },
            counterToggle: false,
            counter: 0
        }
    }
    componentDidMount(){
        this.setState({
            counter:this.props.claps
        })
    }
    componentWillUnmount(){
        this.state.counter !== 0?
        axios.put(`/api/blogpost/${this.props.blog_id}`, {claps:this.state.counter})
        :""
    }
    colorChange(string) {
        if (string === 'clappingIcon'){

            let newClap =  this.state.counter +1
            this.setState({
                [string]:{background:'grey', fill:'#1976D2'},
                counterToggle:'true',
                counter: newClap
            })

            return
        }
        this.setState({
            [string]: { fill: '#1976D2' }
        })
    }
    colorRevert(string) {
        if (string === 'clappingIcon'){
            this.setState({
                [string]:{background:'white', fill:'#1976D2' }
            })
            return
        }
        this.setState({
            [string]: { fill: 'rgba(0,0,0,.68)' }
        })
    }
    render() {
        let clappingIcon = <Svg id="clap--icon" onMouseDown={() => this.colorChange('clappingIcon')} onMouseUp={() => this.colorRevert('clappingIcon')} style={this.state.clappingIcon}  xmlns="http://www.w3.org/2000/svg" viewBox="-549 338 100.1 125"><path d="M-471.2 366.8c1.2 1.1 1.9 2.6 2.3 4.1.4-.3.8-.5 1.2-.7 1-1.9.7-4.3-1-5.9-2-1.9-5.2-1.9-7.2.1l-.2.2c1.8.1 3.6.9 4.9 2.2zm-28.8 14c.4.9.7 1.9.8 3.1l16.5-16.9c.6-.6 1.4-1.1 2.1-1.5 1-1.9.7-4.4-.9-6-2-1.9-5.2-1.9-7.2.1l-15.5 15.9c2.3 2.2 3.1 3 4.2 5.3zm-38.9 39.7c-.1-8.9 3.2-17.2 9.4-23.6l18.6-19c.7-2 .5-4.1-.1-5.3-.8-1.8-1.3-2.3-3.6-4.5l-20.9 21.4c-10.6 10.8-11.2 27.6-2.3 39.3-.6-2.6-1-5.4-1.1-8.3z" /><path d="M-527.2 399.1l20.9-21.4c2.2 2.2 2.7 2.6 3.5 4.5.8 1.8 1 5.4-1.6 8l-11.8 12.2c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l34-35c1.9-2 5.2-2.1 7.2-.1 2 1.9 2 5.2.1 7.2l-24.7 25.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l28.5-29.3c2-2 5.2-2 7.1-.1 2 1.9 2 5.1.1 7.1l-28.5 29.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.4 1.7 0l24.7-25.3c1.9-2 5.1-2.1 7.1-.1 2 1.9 2 5.2.1 7.2l-24.7 25.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l14.6-15c2-2 5.2-2 7.2-.1 2 2 2.1 5.2.1 7.2l-27.6 28.4c-11.6 11.9-30.6 12.2-42.5.6-12-11.7-12.2-30.8-.6-42.7m18.1-48.4l-.7 4.9-2.2-4.4m7.6.9l-3.7 3.4 1.2-4.8m5.5 4.7l-4.8 1.6 3.1-3.9" /></Svg>
        let facebook = <SubSVG onMouseDown={() => this.colorChange('facebook')} onMouseUp={() => this.colorRevert('facebook')} style={this.state.facebook} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></SubSVG>
        let twitter = <SubSVG onMouseDown={() => this.colorChange('twitter')} onMouseUp={() => this.colorRevert('twitter')}style={this.state.twitter} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" /></SubSVG>
        let bookmark = <SubSVG onMouseDown={() => this.colorChange('bookmark')} onMouseUp={() => this.colorRevert('bookmark')} style={this.state.bookmark} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 2v17.582l-4-3.512-4 3.512v-17.582h8zm2-2h-12v24l6-5.269 6 5.269v-24z" /></SubSVG>
        let counter = <div name='counter' refs='counter'> {this.state.counter} </div>
        return (
            <Wrapper>
                <Number>
                {
                    this.state.counterToggle?
                    counter
                    :''
                }
                </Number>
                {clappingIcon}
                {facebook}
                {twitter}
                {bookmark}
            </Wrapper>
        )
    }
};
let Wrapper = glamorous.div(
    {

        height: 200,
        width: 50,
        position: 'sticky',
        top: '250px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'

    }
)
const clapFade = css.keyframes({
    '0%': { boxShadow: '0px 0px 3px #1976D2' },
    '100%': { boxShadow: '0 0px 40px #0083dd1f' }

})
const Number=glamorous.div({
    height:'10px'
})
const Svg = glamorous.svg(
    'clappingSvg',
    {
        height: '50px',
        width: '50px',
        border: '1px solid',
        borderRadius: '50%',
        borderColor: 'black',
    },
    {

        ':hover': {
            borderColor: '#1976D2',
            stroke: '#fff',
            animation: `${clapFade} 1s ease-in infinite`
        }
    }
)
const SubSVG = glamorous.svg(
    'subSVG',
    {
        stroke: 'white',
        height: '30px',
        width: '30px',
    },
    {
        ':hover': {
            fill: '#1976D2'
        }
    }
)
