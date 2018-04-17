import React, { Component } from 'react';
import { TransitionMotion, spring } from 'react-motion';
import glamorous from 'glamorous';

import Hamburger from './Hamburger';
import HomeButton from './HomeButton';
import MenuX from './MenuX';

let Wrapper = glamorous.div(
    {
        width: 193,
        height: 65,
        display: 'flex',
        position: 'fixed',
        zIndex: '25',
        top: 50,
        left: 0,
        backfaceVisibility: 'hidden'
    }
)

export default class MenuBox extends Component {
    render() {
        return (
            <Wrapper>
                <TransitionMotion
                    defaultStyles={!this.props.menuActive ? [{
                        key: 'x-menu',
                        style: { opacity: 0, top: 30 }
                    }] : []}
                    styles={!this.props.menuActive ? [{
                        key: 'x-menu',
                        style: { opacity: spring(1), top: spring(24) }
                    }] : []}
                    willLeave={() => ({ opacity: spring(0), top: spring(30) })}
                    willEnter={() => ({ opacity: 0, top: 30})}>
                    {
                        styles =>
                            <div style={{ position: 'absolute', top: 0, left: 0 }}>
                                {
                                    styles.map((config => {
                                        return <Hamburger
                                                    top={config.style.top}
                                                    toggleMenu={this.props.toggleMenu}
                                                    menuActive={this.props.menuActive}
                                                    toggleHover={this.props.toggleHover}
                                                    hoverEnter={this.props.hoverEnter}
                                                    hoverLeave={this.props.hoverLeave}
                                                    hovered={this.props.hovered} />
                                    }))
                                }
                            </div>
                    }

                </TransitionMotion>
                <TransitionMotion
                    defaultStyles={this.props.menuActive ? [{
                        key: 'x-menu',
                        style: { opacity: 0 }
                    }] : []}
                    styles={this.props.menuActive ? [{
                        key: 'x-menu',
                        style: { opacity: spring(1) }
                    }] : []}
                    willLeave={() => ({ opacity: spring(0) })}
                    willEnter={() => ({ opacity: 0 })}>
                    {
                        styles =>
                            <div>
                                {
                                    styles.map((config) => {
                                        return <MenuX toggleMenu={this.props.toggleMenu} clicked={this.props.clicked} menuActive={this.props.menuActive} />
                                    })
                                }
                            </div>
                    }

                </TransitionMotion>


                <HomeButton />
            </Wrapper>
        )
    }
}