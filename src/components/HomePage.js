import React, { Component } from 'react';
import { css } from 'glamor'
import glamorous from 'glamorous';
import Hamburger from './Hamburger';
import ProjLink from './ProjLink';

//images
import cecchi from './assets/cecchi.jpg';
import muller from './assets/muller.jpg';
import palzileri from './assets/palzileri.jpg';
import linealight from './assets/linealight.jpg';
import claraluna from './assets/claraluna.jpg';
import fornasetti from './assets/fornasetti.jpg';
import ferrari from './assets/ferrari.jpg';
import mediaset from './assets/mediaset.jpg';


const blueColors = [
    '#BBDEFB',
    '#64B5F6',
    '#2196F3',
    '#1976D2',
    '#0D47A1'
]

const greenColors = [
    '#B2DFDB',
    '#4DB6AC',
    '#009688',
    '#00796B',
    '#004D40'
]

const purpleColors = [
    '#E1BEE7',
    '#BA68C8',
    '#9C27B0',
    '#7B1FA2',
    '#4A148C'
]

const redColors = [
    '#EF9A9A',
    '#EF5350',
    '#E53935',
    '#C62828',
    '#B71C1C'
]

const spotlightStyle = css({
    height: 500,
    width: '100%',
    background: 'orange'
})

const portfolioStyle = css({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 25%)',
    gridAutoRows: 'minmax(400px, auto)'
})

const SocialDiv = glamorous.div(
    {
        gridRowEnd: 'span 1'
    },
    (props) => ({
        background: props.color,
        gridColumnEnd: `span ${props.spanLength}`,
    })
)

const InfoBreak = glamorous.div(
    {
        height: 350
    },
    (props) => ({
        background: props.color,
        width: props.width
    })
)

export default class HomePage extends Component {

    render() {
        return (
            <div>
                <div className={`${spotlightStyle}`}>
                </div>
                <div className={`${portfolioStyle}`}>
                    <ProjLink rowSpan={1} color={blueColors[0]}/>
                    <ProjLink rowSpan={2} image={cecchi}/>
                    <ProjLink rowSpan={2} image={muller}/>
                    <ProjLink rowSpan={2} image={palzileri} />
                    <ProjLink  rowSpan={1} image={linealight}/>
                    <ProjLink  rowSpan={1} image={claraluna} />
                    <ProjLink rowSpan={2} image={fornasetti} />
                    <ProjLink rowSpan={2} image={ferrari} />
                    <ProjLink rowSpan={1} image={mediaset} />
                    <ProjLink rowSpan={1} color={greenColors[1]} />
                </div>
                <InfoBreak width='100%' color={purpleColors[0]} />
                <div className={`${portfolioStyle}`}>
                    <SocialDiv color={redColors[2]} spanLength={1} />
                    <SocialDiv color={redColors[1]} spanLength={1} />
                    <SocialDiv color={redColors[2]} spanLength={1} />
                    <SocialDiv color={redColors[3]} spanLength={1} />
                    <SocialDiv color={redColors[4]} spanLength={1} />
                    <SocialDiv color={redColors[2]} spanLength={1} />
                    <SocialDiv color={redColors[0]} spanLength={2} />
                </div>
                <InfoBreak width='100%' color={purpleColors[0]} />
                <div className={`${portfolioStyle}`}>
                    <SocialDiv color={redColors[0]} spanLength={1} />
                    <SocialDiv color={redColors[1]} spanLength={1} />
                    <SocialDiv color={redColors[2]} spanLength={1} />
                    <SocialDiv color={redColors[3]} spanLength={1} />
                </div>
                <InfoBreak width='50%' color={purpleColors[1]} style={{float: 'left'}}/>
                <InfoBreak width='50%' color={purpleColors[2]} style={{float: 'right'}}/>
            </div>
        )
    }
}