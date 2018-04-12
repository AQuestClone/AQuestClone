import React, {Component} from 'react';
import glamorous from 'glamorous';
import {css} from 'glamor';
import logo from './assets/logo-bianco.png';


export default function Globe(props){
    const style = {
        height: '100vh',
        width: '100%',
        zIndex: '20',
    }
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

    const Globe = glamorous.div({
        borderRadius: '50%',
        backgroundColor: '#0083DD',
        height: '20px',
        width: '20px',
        position: 'absolute',
        left: '50%',
        top: '50%', 
        transform: 'translate(-50%, -50%)',
        animation: `${spallPulse} 3s, ${bigPulse} 1.7s 2, ${globeFade} 1s`,
        animationDelay: '0s, 3s, 6.4s'
    })

    const logoFade = css.keyframes({
        '0%': {opacity: 0},
        '10%': {opacity: 1},
        '90%': {opacity: 1},
        '100%': {opacity: 0}
    })

    const Logo = glamorous.div({
        width: 50,
        height: 50,
        background: `url(${logo}) center no-repeat`,
        backgroundSize: 'contain', 
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        top: '50%',
        opacity: 0,
        left: '50%',
        animation: `${logoFade} 1.05s`,
        animationDelay: '1.05s'
    })

    

    return (
        <div style={{...style, ...props.style}}>
            <Globe><Logo/></Globe>
        </div>
    )
}