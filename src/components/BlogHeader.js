import React, { Component } from 'react';
import { css } from 'glamor';
import glamorous from 'glamorous';
import { getUser } from '../ducks/reducer'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios'


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
            textDecoration:'none',
            color:'#0083DD'
        },

    }


)
const GetStarted = glamorous.div(
    'getStarted',
    {
        border:'1px solid',
        borderRadius:'5px',
        padding:'5px',
        borderColor:'#0083DD',
        color:'#0083DD'
       
    }
)

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
            <div  >
                <HeaderBar>
                    <div style={{paddingLeft:'350px', width:'12vw'}}></div>
                    <h2 style={{fontSize:'50px'}}>AQuest</h2>
                    <div style={{ paddingRight: '350px', width:'12vw' }}>
                        {
                            this.props.user.admin
                                ?

                                <div style={{display:'flex', justifyContent:'space-around',alignItems:'center'}}>
                                    {
                                        this.props.user.admin ?
                                            <Link to='/blog/create'>Create</Link>
                                            : ''
                                    }
    
                                   <GetStarted> {this.props.user.username}</GetStarted>
                                </div>

                                :
                                <div style={{display:'flex', justifyContent:'space-around',alignItems:'center'}}>
                                <a href={process.env.REACT_APP_LOGIN}> Sign in </a>
                                <GetStarted>
                                <a href={process.env.REACT_APP_LOGIN}> Get started </a>
                                </GetStarted>
                                </div>
                                

                        }

                    </div>

                </HeaderBar>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, { getUser })(BlogHeader)
