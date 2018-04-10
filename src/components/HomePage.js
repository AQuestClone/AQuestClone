import React, { Component } from 'react';
import { css } from 'glamor'
import glamorous from 'glamorous';

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
    height: 768,
    width: '100%',
    background: 'orange'
})

const portfolioStyle = css({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 25%)',
    gridAutoRows: 'minmax(500px, auto)'
})

const PortfolioSmall = glamorous.div(
    {
        gridColumnEnd: 'span 2',
        gridRowEnd: 'span 1'
    },
    (props) => ({
        background: props.color
    })
)

const PortfolioBig = glamorous.div(
    {
        gridColumnEnd: 'span 2',
        gridRowEnd: 'span 2'
    },
    (props) => ({
        background: props.color
    })
)

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
                    <PortfolioSmall color={greenColors[0]} />
                    <PortfolioBig color={blueColors[0]} />
                    <PortfolioBig color={blueColors[1]} />
                    <PortfolioBig color={blueColors[2]} />
                    <PortfolioSmall color={greenColors[1]} />
                    <PortfolioSmall color={greenColors[2]} />
                    <PortfolioBig color={blueColors[3]} />
                    <PortfolioBig color={blueColors[4]} />
                    <PortfolioSmall color={greenColors[3]} />
                    <PortfolioSmall color={greenColors[4]} />
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