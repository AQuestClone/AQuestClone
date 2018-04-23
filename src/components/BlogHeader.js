import React, { Component } from 'react';
import { css, active } from 'glamor';
import glamorous from 'glamorous';
import { getUser } from '../ducks/reducer'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { spring, TransitionMotion } from 'react-motion'
import { margin } from 'polished';

class BlogHeader extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.getUser()
    }

    render() {
        console.log('props', this.props);

        return (
            <TransitionMotion
                defaultStyles={this.props.render && this.props.blogs.length > 0 ?
                    [{ key: 'navbar', style: { top: -65 } }]
                    : []}
                styles={this.props.render && this.props.blogs.length > 0 ?
                    [{ key: 'navbar', style: { top: spring(0) } }]
                    : []}
                willLeave={() => ({ top: spring(-65) })}
                willEnter={() => ({ top: -65 })}
            >
                {
                    (styles) =>
                        <div  >
                            {styles.map(({ key, style }) => (
                                <HeaderBar key={key} style={style}>
                                    <div style={{ paddingLeft: '250px', width: '12vw' }}></div>
                                    <h2 style={{ fontSize: '50px' }}>AQuest</h2>
                                    <div style={{ paddingRight: '250px', width: '12vw' }}>
                                        {
                                            this.props.user.admin
                                                ?
                                                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                                    {
                                                        this.props.user.admin ?
                                                            <GetStarted> <Link to='/blog/create'>Create</Link></GetStarted>
                                                            : ''
                                                    }
                                                    <GetStarted> {this.props.user.username}</GetStarted>
                                                </div>

                                                :
                                                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                                    <GetStarted style={{ border: 'none' }}><a href={process.env.REACT_APP_LOGIN}> Sign in </a></GetStarted>
                                                    <GetStarted> <a href={process.env.REACT_APP_LOGIN}> Get started </a></GetStarted>
                                                </div>
                                        }
                                    </div>
                                </HeaderBar>
                            ))}
                        </div>
                }
            </TransitionMotion>
        )
    }
}
function mapStateToProps(state) {
    return {
        user: state.user,
        render: state.render,
        blogs: state.blogs
    }
}
export default connect(mapStateToProps, { getUser })(BlogHeader)

const HeaderBar = glamorous.div(
    {
        zIndex: '5',
        position: 'fixed',
        width: '100vw',
        height: '65',
        background: '#fffffff5',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: "'Montserrat', 'sans-serif'",

    },
    {
        '& a': {
            textDecoration: 'none',
            color: '#0083DD',
            width: '100%'
        },

    }


)
const GetStarted = glamorous.div(
    'getStarted',
    {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        border: '1px solid',
        borderRadius: '5px',
        padding: '5px',
        borderColor: '#0083DD',
        color: '#0083DD',
        width: 100,
        height: 30,
        margin: 3

    },
    {
        ':hover': {
            color:'white',
            background:'#0083DD',
            transition:'ease-in',
            '& a':{
                color:'white'
            }
        }
    }
)