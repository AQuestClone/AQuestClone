import React, { PureComponent } from 'react';
import { StaggeredMotion, TransitionMotion, spring } from 'react-motion';
import glamorous from 'glamorous';


const Wrapper = glamorous.div(
    {
        backgroundColor: '#0083DD',
        position: 'relative',
        cursor: 'pointer'
    },
    (props) => ({
        width: props.width,
        height: props.height
    })
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


    toggleHover = () => {
        let hoveredCopy = this.state.hovered
        if (this.state.hovered === 2) {
            this.setState({
                hovered: --hoveredCopy
            })
        }
        else {
            this.setState({
                hovered: ++hoveredCopy
            })
        }
    }

    render() {
        let {
            menuActive
        } = this.props
        const endingStyles = (prevStyles) => {
            switch (this.state.hovered) {
                case 1:
                    return [
                        { opacity: spring(0, { stiffness: 400, damping: 32 }), top: spring(-7, { stiffness: 400, damping: 32 }) },
                        { opacity: spring(prevStyles[0].opacity, { stiffness: 400, damping: 32 }), top: spring(prevStyles[0].top + 7, { stiffness: 400, damping: 32 }) },
                        { opacity: spring(prevStyles[1].opacity, { stiffness: 400, damping: 32 }), top: spring(prevStyles[1].top + 7, { stiffness: 400, damping: 32 }) },
                        { opacity: spring(1 - prevStyles[2].opacity, { stiffness: 400, damping: 32 }), top: spring(prevStyles[2].top + 7, { stiffness: 400, damping: 32 }) }
                    ]
                case 2:
                    return [
                        { opacity: spring(1 - prevStyles[1].opacity, { stiffness: 400, damping: 32 }), top: spring(prevStyles[1].top - 7, { stiffness: 400, damping: 32 }) },
                        { opacity: spring(prevStyles[2].opacity, { stiffness: 400, damping: 32 }), top: spring(prevStyles[2].top - 7, { stiffness: 400, damping: 32 }) },
                        { opacity: spring(prevStyles[3].opacity, { stiffness: 400, damping: 32 }), top: spring(prevStyles[3].top - 7, { stiffness: 400, damping: 32 }) },
                        { opacity: spring(0, { stiffness: 400, damping: 32 }), top: spring(21, { stiffness: 400, damping: 32 }) }
                    ]
                default: return [];
            }
        }

        const transformStyles = (i) => {
            switch (i) {
                case 1:
                    return {
                        opacity: '0',
                        transition: 'all .5s'
                    }
                case 3:
                    return {
                        opacity: '0',
                        transition: 'all .5s'
                    }
                case 0:
                    return {
                        transform: 'translate(-1px, 14px) rotate(-45deg)',
                        opacity: '1',
                        transition: 'all .5s'
                    }
                case 2:
                    return { transform: 'rotate(45deg)', transition: 'all .5s' }
                default: return {}
            }
        }

        const startingXStyles = [
            {
                key: '1',
                style: {
                    top: -7,
                    opacity: 0,
                    rotate: 0
                }
            },
            {
                key: '2',
                style: {
                    top: 0,
                    opacity: 1,
                }
            },
            {
                key: '3',
                style: {
                    top: 7,
                    opacity: 1,
                    rotate: 0
                }
            },
            {
                key: '4',
                style: {
                    top: 14,
                    opacity: 1
                }
            }
        ]


        const endingXStyles = [
            {
                key: '1',
                style: {
                    top: spring(7),
                    opacity: spring(1),
                    rotate: spring(-45)
                }
            },
            {
                key: '2',
                style: {
                    top: 0,
                    opacity: spring(0)
                }
            },
            {
                key: '3',
                style: {
                    top: 7,
                    opacity: 1,
                    rotate: spring(45)
                }
            },
            {
                key: '4',
                style: {
                    top: 14,
                    opacity: spring(0)
                }
            }
        ]

        const xWillLeaveStyles = [
            {
                key: '1',
                style: {
                    top: spring(-7),
                    opacity: spring(0),
                    rotate: spring(0)
                }
            },
            {
                key: '2',
                style: {
                    top: spring(0),
                    opacity: spring(1),
                }
            },
            {
                key: '3',
                style: {
                    top: spring(7),
                    opacity: spring(1),
                    rotate: spring(0)
                }
            },
            {
                key: '4',
                style: {
                    top: spring(14),
                    opacity: spring(1)
                }
            }
        ]

        return (
            !this.props.menuActive ?
                <StaggeredMotion defaultStyles={[
                    { opacity: 1, top: 0 },
                    { opacity: 1, top: 7 },
                    { opacity: 1, top: 14 },
                    { opacity: 0, top: 21 }
                ]}
                    styles={(prevStyles) => endingStyles(prevStyles)}>
                    {
                        (styles) => (
                            <Wrapper width={93}
                                height={65}
                                onMouseEnter={this.toggleHover}
                                onMouseLeave={this.toggleHover}
                                onClick={this.props.toggleMenu}>
                                <div style={{
                                    height: '18px',
                                    position: 'absolute',
                                    width: '100%',
                                    top: '24px',
                                    left: '0',
                                }}>
                                    {
                                        styles.map((style, i) => (
                                            <div key={i} style={{
                                                ...whiteBar,
                                                top: style.top,
                                                opacity: i === 1 || i === 2 ? 1 : style.opacity
                                            }}
                                                key={`white_bar_${i}`}>

                                            </div>
                                        ))
                                    }
                                </div>

                            </Wrapper>
                        )
                    }

                </StaggeredMotion>
                :
                <TransitionMotion
                    defaultStyles={this.props.menuActive ?
                        startingXStyles.map((style, i) => style)
                        : []}
                    styles={this.props.menuActive ?
                        endingXStyles.map((style, i) => style)
                        : []}
                    // willLeave={() => xWillLeaveStyles.map((style) => style)}
                    //  willEnter={() => startingXStyles.map((style) => style)}
                     >

                    {
                        styles =>
                            <div>
                                <Wrapper width={93}
                                    height={65}
                                    onClick={this.props.toggleMenu}>
                                    <div style={{
                                        height: '18px',
                                        position: 'absolute',
                                        width: '100%',
                                        top: '24px',
                                        left: '0',
                                    }}>
                                        {
                                            styles.map(config => {
                                                return <div
                                                    key={config.key}
                                                    style={{ ...config.style, ...whiteBar, transform: `rotate(${config.style.rotate}deg)` }}>
                                                        
                                                    </div>
                                            })
                                        }
                                        
                                    
                                    </div>

                                </Wrapper>
                            </div>
                    }
                </TransitionMotion>

        )
    }

}
