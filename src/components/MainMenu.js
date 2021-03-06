import React, { Component } from 'react';
import { TransitionMotion, spring } from 'react-motion';
import glamorous, { Main } from 'glamorous';
import { Link } from 'react-router-dom';
import {css} from 'glamor';
import {connect} from 'react-redux';
import {shouldRender} from '../ducks/reducer';
import {withRouter} from 'react-router-dom'
import PageChange from './PageChange';

class MainMenu extends Component {

    render() {
        let {
            active
        } = this.props
        return (
            <TransitionMotion
                defaultStyles={ active ? [{
                    key: 'menu',
                    style: { opacity: 0 }
                }] : []}
                styles={ active ? [{
                    key: 'menu',
                    style: { opacity: spring(0.95) }
                }] : []}
                willLeave={() => ({ opacity: spring(0)})}
                willEnter={() => ({ opacity: 0 })}>
                {
                    styles =>
                        <div>
                            {
                        styles.map(config => {
                            return (
                                <Wrapper key={config.key} style={config.style}>
                                    <MenuDiv>
                                        <MenuItem>
                                            <a>HOME</a>
                                        </MenuItem>
                                        <MenuItem>
                                            <h1>ABOUT US</h1>
                                        </MenuItem>
                                        <MenuItem>
                                            <h1>CLIENTS</h1>
                                        </MenuItem>
                                        <MenuItem>
                                            <h1>SERVICES</h1>
                                        </MenuItem>
                                        <MenuItem>
                                            <h1>SOCIAL</h1>
                                        </MenuItem>

                                        <PageChange style={{width: '100%', display: 'flex', justifyContent: 'center'}} newPage='/blog'>
                                            <MenuItem onClick={() => this.props.toggle()}>
                                                <h1 id='menuBlogLink'>BLOG</h1>
                                            </MenuItem>
                                        </PageChange>

                                        <MenuItem>
                                            <h1>CONTACTS</h1>
                                        </MenuItem>
                                        <MenuItem>
                                            <h1>JOB</h1>
                                        </MenuItem>
                                    </MenuDiv>
                                </Wrapper>
                            )
                        })
                            }
                        </div>


                }

            </TransitionMotion>
        )
    }
}

function mapStateToProps(state){
    return {
        render: state.render
    }
}

export default connect(mapStateToProps, {shouldRender})(withRouter(MainMenu))

let Wrapper = glamorous.div(
    'mainMenu',
    {
        height: '100vh',
        width: '100%',
        background: '#0083DD',
        opacity: '0.95',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: '15',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backfaceVisibility: 'hidden'
    }
)

let MenuDiv = glamorous.div(
    {
        width: '70%',
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    }
)

let MenuItem = glamorous.div(
    {
        ' a, h1': {
            fontSize: 18,
            margin: 10,
            fontWeight: 'normal',
            padding: 0,
            display: 'block',
            textAlign: 'center',
            fontWeight: 'bold',
            letterSpacing: '0.4em',

        },
        ':before': {
            position: 'absolute',
            bottom: 0,
            left: '50%',
            width: '100%',
            height: 2,
            background: 'white',
            content: '""',
            zIndex: '26',
            transform: 'translate(-50%, -50%)',
            opacity: '0.2'
        },
        ':after': {
            position: 'absolute',
            bottom: 0,
            left: '50%',
            width: '10%',
            height: 2,
            background: 'white',
            content: '""',
            zIndex: '27',
            transform: 'translate(-50%, -50%)',
            opacity: '0',

        },
        ':hover:after': {
            opacity: '.5',
            width: '100%',
            transition: 'all .8s ease',
        }
    },
    {
        fontFamily: "'Montserrat', 'sans-serif'",
        fontSize: 17,
        position: 'relative',
        width: '80%',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        ':hover':{
            cursor: 'pointer'
        }
    })

  