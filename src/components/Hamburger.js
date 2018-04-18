import React, { PureComponent } from 'react';
import { StaggeredMotion, TransitionMotion, spring } from 'react-motion';
import glamorous from 'glamorous';


const Wrapper = glamorous.div(
    {
        backgroundColor: '#0083DD',
        position: 'relative',
        cursor: 'pointer',
        width: 93,
        height: 65
    },
)

const whiteBar = {
    width: 37,
    height: 3,
    background: 'white',
    left: 28,
    right: 28,
    position: 'absolute',
}

export default class Hamburger extends PureComponent {
    constructor() {
        super();

        this.state = {
            hovered: 0
        }

    }


    componentDidMount() {
        console.log(spring(-45))
    }

    //need to fix hover



    render() {
        console.log(this.props.hovered)
        let springTiming = { stiffness: 400, damping: 32 }
        
        let {
            menuActive
        } = this.props
        const endingStyles = (prevStyles) => {
            switch (this.props.hovered) {
                case 1:
                    return [
                        { opacity: spring(0, springTiming), top: spring(-7, springTiming), rotate: spring(0) },
                        { opacity: spring(prevStyles[0].opacity, springTiming), top: spring(prevStyles[0].top + 7, springTiming), rotate: 0 },
                        { opacity: spring(prevStyles[1].opacity, springTiming), top: spring(prevStyles[1].top + 7, springTiming), rotate: spring(-prevStyles[0].rotate) },
                        { opacity: spring(1 - prevStyles[2].opacity, springTiming), top: spring(prevStyles[2].top + 7, springTiming), rotate: 0 }
                    ]
                case 2:
                    return [
                        { opacity: spring(1 - prevStyles[1].opacity, springTiming), top: spring(prevStyles[1].top - 7, springTiming), rotate: 0 },
                        { opacity: spring(prevStyles[2].opacity, springTiming), top: spring(prevStyles[2].top - 7, springTiming), rotate: 0 },
                        { opacity: spring(prevStyles[3].opacity, springTiming), top: spring(prevStyles[3].top - 7, springTiming), rotate: 0 },
                        { opacity: spring(0, springTiming), top: spring(21, springTiming), rotate: 0 }
                    ]
                case 3:
                    return [
                        { opacity: spring(1, springTiming), top: spring(7, springTiming), rotate: spring(-45, springTiming) },
                        { opacity: spring(0, springTiming), top: spring(14, springTiming), rotate: 0},
                        { opacity: 1, top: spring(7, springTiming), rotate: spring(45, springTiming) },
                        { opacity: spring(0, springTiming), top: spring(28, springTiming), rotate: 0},
                    ]
                default: return [];
            }
        }


        return (
            <StaggeredMotion defaultStyles={[
                        { opacity: 1, top: 0, rotate: 0 },
                        { opacity: 1, top: 7, rotate: 0 },
                        { opacity: 1, top: 14, rotate: 0 },
                        { opacity: 0, top: 21, rotate: 0 }]}
                styles={(prevStyles) => endingStyles(prevStyles)}>
                {
                    (styles) => (
                        <Wrapper 
                            onMouseEnter={this.props.toggleHover}
                            onMouseLeave={this.props.toggleHover}
                            onClick={this.props.toggleMenu}>
                            <div style={{
                                height: '18px',
                                position: 'absolute',
                                width: '100%',
                                top: 24,
                                left: '0',
                            }}>
                                {
                                    styles.map((style, i) => (
                                        <div key={i} style={{
                                            ...whiteBar,
                                            top: style.top,
                                            transform: `rotate(${style.rotate}deg)`,
                                            opacity: !menuActive ?
                                                            i === 1 || i === 2 ? 1 : style.opacity
                                                            :
                                                                i === 1 ? 0 : style.opacity
                                        }}
                                            key={`white_bar_${i}`}>
                                            { console.log(style.rotate) }
                                        </div>
                                    ))
                                }
                            </div>

                        </Wrapper>
                    )
                }

            </StaggeredMotion>

        )
    }

}
