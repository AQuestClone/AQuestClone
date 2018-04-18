import React, { Component } from 'react';
import { css } from 'glamor'
import glamorous, { Div } from 'glamorous';
import {StaggeredMotion, spring} from 'react-motion';


//components
import MenuBox from './MenuBox';
import Spotlight from './Spotlight';
import ProjLink from './ProjLink';
import ProjSlide from './ProjSlide';
import InfoBox from './InfoBox';
import FiftyAnim from './FiftyAnim';
import AwardBox from './AwardBox';
import CheckVisibility from './CheckVisibility';
import TwitterSlide from './TwitterSlide';



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

                    <InfoBox config={infoBoxConfig[0]} />

                        {projLinks}
                    <ProjSlide />
                </div>
                <InfoBox config={infoBoxConfig[1]} />
                <div className={`${portfolioStyle}`}>
                    <TwitterSlide config={twitterConfig[0]}/>
                    <SocialDiv color={redColors[1]} spanLength={1} />
                    <TwitterSlide config={twitterConfig[1]}/>
                    <SocialDiv color={redColors[3]} spanLength={1} />
                    <SocialDiv color={redColors[4]} spanLength={1} />
                    <TwitterSlide config={twitterConfig[2]}/>
                    <SocialDiv color={redColors[0]} spanLength={2} />
                </div>

                <Div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '350px' }} >
                    <FiftyAnim />
                    <InfoBox config={infoBoxConfig[2]} />
                </Div>
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
                                    return <div style={{position: 'relative', ...style}} ><AwardBox visible={isVisible} ind={i} {...awardInfo[i]} /></div>  
                                    }
                                )}
                            </div>
                    }
                    </StaggeredMotion>}
                </CheckVisibility>
                <Div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '350px' }} >
                    <InfoBox config={infoBoxConfig[3]} />
                    <InfoBox config={infoBoxConfig[4]} />
                </Div>

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

const infoBoxConfig = [
    {
        background: 'white',
        width: '100%',
        height: '100%',
        textAlign: 'left',
        pWidth: '95%',
        pFontSize: 19,
        headerMargin: 95,
        paddingLeft: 40,
        title: ['DIGITAL DREAMS BY AQUEST'],
        text: [
            "It’s not true that the best dreams happen when you are awake, they happen when you are online! Don’t you believe? Check our works.",
            "We signed a pact with the world leaders in the science of dreams - Sandman, Sleeping Beauty and Sleepy the dwarf in order to provide you with the highest quality magical experience. Having researched the famous Ole Lukoje’s process of sprinkling tiny amount of fine dust onto the eyes of dreamers, and combining it with the catalyst of Rufus the Noops' vivid daydreams we came with an absolutely innovative solution. We call it DDC - Digital Dreams Catharsis. For more information about DDC, please give us a shout."
        ],
        config: {
            gridRowEnd: 'span 1',
            gridColumnEnd: 'span 2',
        }
    },
    {
        background: 'white',
        width: '100vh',
        height: 350,
        padding: 50,
        textAlign: 'center',
        pWidth: '100%',
        pFontSize: 16,
        headerMargin: 100,
        title: ['STAY WITH US: ENJOY WITH US.'],
        text: [
            "Keep calm and dream on. Follow us on social networks! A shared joy is a double joy. Stay with us to discover the most interesting projects, trends & news from the world of digital dreams."
        ],
        config: {

        }
    },
    {
        background: 'white',
        width: '50%',
        height: '350px',
        padding: '20px 50px',
        textAlign: 'left',
        pWidth: '40%',
        headerMargin: 100,
        title: ['GOOD REASONS TO WORK WITH US'],
        text: [
            "We have been generating creative digital dreams for over 20 years and have collected more than 50 international awards in an assortment of categories voted by professional independent juries."
        ],
        config: {
            gridRowEnd: 'span 1',
            gridColumnEnd: 'span 2',
        }
    },
    {
        background: '#eee',
        width: '50%',
        height: '100%',
        padding: '10px 50px',
        textAlign: 'left',
        pWidth: '70%',
        headerMargin: 100,
        paddingLeft: 100,
        title: ['DIGITAL DREAMERS WANTED.', 'CAREERS'],
        text: [
            `"You may say I’m a dreamer, but I'm not the only one." We always look for passionate and dedicated creative geeks. Send us your profile, your working preferences and the reason why you want to join our crew.`
        ]
    },
    {
        background: 'white',
        width: '50%',
        height: '100%',
        padding: '10px 50px',
        textAlign: 'left',
        pWidth: '70%',
        headerMargin: 100,
        paddingLeft: 100,
        title: ['HAVE YOUR DREAM AND SHARE IT WITH US.', 'CONTACTS'],
        text: [
            `"You may say I’m a dreamer, but I'm not the only one." We always look for passionate and dedicated creative geeks. Send us your profile, your working preferences and the reason why you want to join our crew.`
        ]
    }
]

const twitterConfig = [
    {
        time: '10 HOURS AGO',
        text: "@Kikk_Festival We’ll be there! ???"
    },
    {
        time: '1 DAY AGO',
        text: "RT @fabiomerlin: .@aquest is ????! They're 4th place in the #Webby People’s Voice. Give ‘em some ?? + VOTE: https://t.co/RUJjzpVCo6"
    },
    {
        time : '8 DAYS AGO',
        text: "Collision test! 3-2-1... BANG! ?? #AQlab #gaming #threejs #webgl #physicsengine #3D https://t.co/WbA0Tozt1Z"
    }
]

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




