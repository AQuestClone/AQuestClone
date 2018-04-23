import React, { Component } from 'react';
import { TransitionMotion, spring } from 'react-motion';
import glamorous from 'glamorous';
import {connect} from 'react-redux';

import CheckVisibility from './CheckVisibility';


class ProjLink extends Component {
    constructor(){
        super();

        this.state = {
            visible: 0
        }

    }
    
    render() {
        let {render} = this.props
        let {
            image,
            rowSpan,
            title,
            hashtag,
            awards,
        } = this.props.config

        return (
            <PhotoWrapper style={{ gridRowEnd: `span ${rowSpan}` }}>
                <PhotoTitle>{title}</PhotoTitle>
                <HashTag>{hashtag}</HashTag>
                <Awards>
                    {
                        awards
                            ?
                            awards.map((award, idx) => {
                                return (

                                    <span key={idx} className={`award_${idx}`}>
                                        <i className="fa fa-trophy"></i>
                                        <h1>{award}</h1>
                                    </span>
                                )

                            })
                            :
                            null
                    }
                </Awards>

                <CheckVisibility interval={(Math.random() * (500 - 100) + 100)}>
                    {(isVisible) =>
                        <TransitionMotion
                            defaultStyles={isVisible && render ? [{
                                key: title,
                                style: { top: rowSpan === 1 ? 500 : 1000 }
                            }] : []}
                            styles={isVisible && render ? [{
                                key: title,
                                style: { top: spring(0, {stiffness: 250, damping: 30}) }
                            }] : []}
                            willEnter={() => ({top: rowSpan === 1 ? 500 : 1000})}
                            willLeave={() => ({top: rowSpan === 1 ? spring(500, {stiffness: 250, damping: 30}) : spring(1000, {stiffness: 250, damping: 30})})}>
                            {
                                styles =>
                                    <div style={{height: '100%', width: '100%'}}>                        
                                    {styles.map( ({key, style}) =>
                                        <Photo 
                                            rowSpan={rowSpan} 
                                            key={key} 
                                            style={{ 
                                                backgroundImage: `url(${image})`,
                                                ...style
                                            }}>
                                        </Photo>
                                    )}
                                    </div>
                            }
                        </TransitionMotion>
                    }
                </CheckVisibility>
            </PhotoWrapper>
        )
    }
}

function mapStateToProps(state){
    return {render: state.render}
}

export default connect(mapStateToProps, {})(ProjLink)

let Photo = glamorous.div(
    'photo-div',
    {
        ':before': {
            position: 'absolute',
            zIndex: '1',
            background: 'linear-gradient(to bottom,rgba(51,51,51,0) 0,rgba(51,51,51,.5) 90%)',
            opacity: '0',
            transform: 'translate3d(0, 0%,0)',
            transition: 'opacity .35s,transform .35s',
            left: '0',
            top: '0',
            width: '100%',
            height: '100%',
            content: '""'
        },
        ':after': {
            position: 'absolute',
            zIndex: '1',
            background: 'linear-gradient(to bottom,rgba(51,51,51,.5) 0,rgba(51,51,51,0) 100%)',
            transition: 'opacity .35s, transform .35s',
            left: '0',
            top: '0',
            width: '100%',
            height: '100%',
            content: '""'
        },
    },
    {
        backgroundSize: 'cover',
        width: 'calc(100% + 51px)',
        height: '100%',
        transform: 'translate3d(-50px,0,0)',
        transition: 'transform .35s',
        position: 'relative',
    },

)

let PhotoWrapper = glamorous.div(
    {
        ':hover .awards-text': {
            opacity: '1',
            left: 50
        },
        ':hover .photo-div': {
            transform: 'translate3d(0px,0,0)',
        },
        ':hover .photo-div:before': {
            opacity: '1'
        },
        ':hover .photo-div:after': {
            opacity: '0'
        }
    },
    {
        gridColumnEnd: 'span 2',
        overflow: 'hidden',
        position: 'relative',
        zIndex: '6', 
    }
)

let PhotoTitle = glamorous.h1(
    {
        position: 'absolute',
        top: 40,
        left: 50,
        zIndex: '5',
        fontFamily: "'Montserrat', 'sans-serif'",
        color: 'white',
        fontSize: '12px',
        fontWeight: '500',
        letterSpacing: '0.2em',
    },
    (props) => ({
        bottom: props.bottom
    })
)

let HashTag = glamorous.h2(
    {
        position: 'absolute',
        top: 55,
        left: 50,
        zIndex: '5',
        fontFamily: "'Libre Baskerville', 'serif'",
        fontSize: '15px',
        fontWeight: '400',
        letterSpacing: '0.05em',
        color: 'white'
    },
    (props) => ({
        bottom: props.bottom
    })
)

let Awards = glamorous.div(
    'awards-text',
    {
        position: 'absolute',
        zIndex: '3',
        bottom: 33,
        left: -5,
        opacity: '0',
        transition: 'opacity .35s, left .35s'
    },
    {
        ' span': {
            color: 'white',
            display: 'inline-block',
            marginRight: 25,
            fontFamily: "'Lato', 'sans-serif'",
            fontSize: '6.5px',
            letterSpacing: '.25em'

        },
        ' span > i, span > h1': {
            display: 'inline-block',
            fontWeight: '300'
        },
        ' span i': {
            fontSize: '25px',
            marginRight: 15
        }
    },
    (props) => ({

    })
)


