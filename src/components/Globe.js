import React, {Component} from 'react';
import glamorous from 'glamorous';
import {css} from 'glamor';


export default function Globe(props){
    const style = {
        height: '100vh',
        width: '100%',
        zIndex: '20',
    }
    const Globe = glamorous.div({
        borderRadius: '50%',
        backgroundColor: 'blue',
        height: '20px',
        width: '20px',
        position: 'absolute',
        left: '50%',
        top: '50%', 
        transform: 'translate(-50%, -50%)',
        
    })

    const pulse = css.keyframes({
        '5%': {width: 5, height: 5},
        '15%': {width: 140, height: 140},
        '17%': {width: 130, height: 130},
        '25%': {width: 130, height: 130},
        '27%': {width: 140, height: 140},
        '30%': {width: 130, height: 130},
    })

    return (
        <div style={{...style, ...props.style}}>
            <Globe style={{animation: `${pulse} 7s`}}/>
        </div>
    )
}