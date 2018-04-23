import React, {Component} from 'react';
import glamorous from 'glamorous';
import {css} from 'glamor';
import logo from './assets/logo-bianco.png';
import Particles from 'react-particles-js';
import config from './assets/globeParticles.json';
import map from './assets/world-map.png';


export default function Globe(){

    return (
        <Background>
            <GlobeBall style={center}>
                <Logo style={center}/>
                <MapBack style={{...center, left: -95}}>
                    <Map />
                </MapBack>
            </GlobeBall>
            <Particles
                params={config}
                width={450}
                height={300}
                style={{
                    position: 'absolute',
                    transform: 'translate(-50%, -50%)',
                    left: '50%',
                    top: '50%',
                    opacity: 0,
                    animation: `${starFade} 1.7s, ${starFade} 1.7s`,
                    animationDelay: '3s, 4.7s',
                    zIndex: -5
                }}
                 />
        </Background>
    )
}

const center = {
    position: 'absolute',
    left: '50%',
    top: '50%', 
    transform: 'translate(-50%, -50%)',
}

const Background = glamorous.div({
    height: '100vh',
    width: '100%',
    zIndex: '20',
})

const mapSlide = css.keyframes({
    '0%': {left: '-100%', borderRadius: '0'},
    '50%': {left: '50%', borderRadius: '50%'},
    '100%': {left: '200%', borderRadius: '0'}
})

const spallPulse = css.keyframes({
    '15%': {width: 3, height: 3},
    '30%': {width: 140, height: 140},
    '35%': {width: 130, height: 130},
    '55%': {width: 130, height: 130},
    '60%': {width: 140, height: 140},
    '70%': {width: 130, height: 130},
    '100%': {width: 130, height: 130},
     
})

const bigPulse = css.keyframes({
    '0%': {width: 130, height: 130},
    '25%': {width: 180, height: 180},
    '50%': {width: 180, height: 180},
    '75%': {width: 130, height: 130},
    '100%': {width: 130, height: 130}
})

const globeFade = css.keyframes({
    '0%': {width: 130, height: 130, opacity: 1},
    '100%': {width: 150, height: 150, opacity: 0}
})

const GlobeBall = glamorous.div({
    borderRadius: '50%',
    backgroundColor: '#0083DD',
    height: 20,
    width: 20,
    animation: `${spallPulse} 3s, ${bigPulse} 1.7s 2, ${globeFade} 1s`,
    animationDelay: '0s, 3s, 6.4s', 
    overflow: 'hidden',
})

const logoFade = css.keyframes({
    '0%': {opacity: 0},
    '10%': {opacity: 1},
    '90%': {opacity: 1},
    '100%': {opacity: 0}
})
const starFade = css.keyframes({
    '0%': {opacity: 0, width: 150 },
    '50%': {opacity: 1, width: 400},
    '70%': {opacity: 0, width: 150},
})

const Logo = glamorous.div({
    width: 50,
    height: 50,
    background: `url(${logo}) center no-repeat`,
    backgroundSize: 'contain', 
    opacity: 0,
    animation: `${logoFade} 1.05s`,
    animationDelay: '1.05s'
})

const MapBack = glamorous.div({
    height: 180,
    width: 190,
    backgroundColor: '#e5e5e5',
    backgroundSize: 'contain',
    animation: `${mapSlide} 1.3s, ${mapSlide} 1.3s`,
    animationDelay: '3.1s, 4.8s',
    overflow: 'hidden',
})
const Map = glamorous.div({
    height: '100%',
    width: '250px',
    background: `url(${map}) center no-repeat`,
    backgroundSize: 'contain',
})