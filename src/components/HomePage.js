import React, { Component } from 'react';
import { css } from 'glamor'
import glamorous from 'glamorous';
import {StaggeredMotion, spring} from 'react-motion';

//components
import MenuBox from './MenuBox';
import Spotlight from './Spotlight';
import ProjLink from './ProjLink';
import ProjSlide from './ProjSlide';
import AwardBox from './AwardBox';
import CheckVisibility from './CheckVisibility';


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

export default class HomePage extends Component {

    render() {
        let projLinks = configStyles.map((style, idx) => <ProjLink key={`project_${idx}`} config={style}></ProjLink>)
        return (
            <div>
                <div className={`${spotlightStyle}`}>
                <Spotlight active={true} height={768} />
                </div>
                <div className={`${portfolioStyle}`}>
                    <PortfolioText background={blueColors[0]}/>
                        {projLinks}
                    <ProjSlide />
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
                <InfoBreak width='50%' color={purpleColors[0]} style={{float: 'left'}}/>
                <InfoBreak width='50%' color={purpleColors[1]} style={{float: 'right'}}/>
                <CheckVisibility>
                        {isVisible => 
                    <StaggeredMotion
                        defaultStyles={[
                            {top: 500},
                            {top: 500},
                            {top: 500},
                            {top: 500},  
                        ]}
                        styles={(prevStyles) => !isVisible ? [] : [
                            {top: spring(0)},
                            {top: spring(prevStyles[0].top)},
                            {top: spring(prevStyles[1].top)},
                            {top: spring(prevStyles[2].top)},
                        ]}
                    >
                    {
                        styles => 
                            <div className={`${portfolioStyle}`} style={{overflow: 'hidden', clear: 'both'}}>                            
                                {styles.map((style, i) => {
                                    console.log(awardInfo[i])
                                    return <div style={{position: 'relative', ...style}} ><AwardBox visible={isVisible} ind={i} {...awardInfo[i]} /></div>  
                                    }
                                )}
                            </div>
                    }
                    </StaggeredMotion>}
                </CheckVisibility>
                <InfoBreak width='50%' color={purpleColors[1]} style={{float: 'left'}}/>
                <InfoBreak width='50%' color={purpleColors[2]} style={{float: 'left'}}/>

            </div>
        )
    }
}

const spotlightStyle = css({
    height: '80vh',
    width: '100%',
})

const portfolioStyle = css({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 25%)',
    gridAutoRows: 'minmax(500px, auto)'
})

const PortfolioText = glamorous.div(
    {
        gridRowEnd: 'span 1',
        gridColumnEnd: 'span 2',
        width: '100%',
        height: '100%'
    },
    (props) => ({
        background: props.background
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

const awardInfo = [
    {title: 'fwa', award: 'site of the day', num: 19},
    {title: 'awwwards', award: 'site of the day', num: 27},
    {title: 'css design', award: 'awards', num: 26},
    {title: 'other', award: 'awards', num: 50},    
]

const InfoBreak = glamorous.div(
    {
        height: 350
    },
    (props) => ({
        background: props.color,
        width: props.width
    })
)

//config props

const configStyles = [
    {
        rowSpan: 2, 
        image: cecchi,
        title: 'CECCHI',
        hashtag: '#corporate #website',
        awards: [
            'AWWWARDS SITE OF THE DAY',
            'CSS DESIGN AWARDS SITE OF THE DAY'
        ]
    },
    {
        rowSpan: 2,
        image: muller,
        title: 'MULLER',
        hashtag: '#website',
        awards: [
            'AWWWARDS SITE OF THE DAY'
        ]
    },
    {
        rowSpan: 2,
        image: palzileri,
        title: 'PAL ZILERI',
        hashtag: '#fashion . #website',
        awards: [
            'AWWWARDS DEV SOTD',
            'FWA SOTD & MOBILE OF THE DAY'
        ]
    },
    {
        rowSpan: 1,
        image: linealight,
        title: 'LINEALIGHT',
        hashtag: '#website',
        awards: [
            'AWWWARDS SITE OF THE DAY'
        ]
    },
    {
        rowSpan: 1,
        image: claraluna,
        title: 'CLARALUNA',
        hashtag: '#corporate #website',
        awards: [
            'AWWWARDS SITE OF THE DAY',
            'CSS DESIGN AWARDS SITE OF THE DAY'
        ]
    },
    {
        rowSpan: 2,
        image: fornasetti,
        title: 'FORNASETTI',
        hashtag: '#storytelling . #website',
        awards: [
            'AWWWARDS SITE OF THE DAY'
        ]
    },
    {
        rowSpan: 2,
        image: ferrari,
        title: 'FERRARI PER MUTADO',
        hashtag: '#contest . #website'
    },
    {
        rowSpan: 1,
        image: mediaset,
        title: 'MEDIASET PREMIUM',
        hashtag: '#app . #website'
    }
]