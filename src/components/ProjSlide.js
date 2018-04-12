import React, { Component } from 'react';
import glamorous from 'glamorous';

//photos
import first from './assets/projslide/01.jpg';
import second from './assets/projslide/02.jpg';
import third from './assets/projslide/03.jpg';
import fourth from './assets/projslide/04.jpg';
import fifth from './assets/projslide/05.jpg';
import sixth from './assets/projslide/06.jpg';
import seventh from './assets/projslide/07.jpg';
import eighth from './assets/projslide/08.jpg';


let photos = [
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    eighth
]

let Wrapper = glamorous.div(
    {
        ':hover .photo-div:before': {
            background: 'rgba(0,127,227,.5)'
        }
    },
    {
        gridColumnEnd: 'span 2',
        gridRowEnd: 'span 1',
        position: 'relative'

    }

)

let Photo = glamorous.div(
    'photo-div',
    {
        ':before': {
            content: '""',
            width: '100%',
            height: '100%',
            background: 'rgba(0,127,227,.7)',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: '11',
            transition: 'background 1s ease'
        }
    },
    {
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'absolute',
        top: 0,
        left: 0
    }
)

let intervalVar;


export default class ProjSlide extends Component {
    constructor() {
        super();

        this.state = {
            index: 0
        }

    }



    onHoverEnter = () => {
        intervalVar = setInterval(() => {
            let indexCopy = this.state.index;
            if (indexCopy === 7) {
                this.setState({
                    index: 0
                })
            } else {
                this.setState({
                    index: ++indexCopy
                })
            }
        }, 115)

        intervalVar;
    }

    onHoverLeave = () => {
        clearInterval(intervalVar)
    }


    render() {

        let wrapperStyle = {
            backgroundImage: `url(${photos[this.state.index]})`
        }

        return (
            <Wrapper>
                {
                    photos.map((photo, idx) => {
                        return <Photo style={{
                            backgroundImage: `url(${photo})`,
                            zIndex: this.state.index === idx ? '1' : '-1'
                        }}
                            onMouseEnter={this.onHoverEnter}
                            onMouseLeave={this.onHoverLeave}>

                        </Photo>
                    })
                }
            </Wrapper>
        )
    }
}