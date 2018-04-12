import React, { Component } from 'react';
import { css } from 'glamor';
import glamorous from 'glamorous';
import {getUser} from '../ducks/reducer'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios'


const HeaderBar = glamorous.div(
    {
        width: '100vw',
        height: '65',
        background: '#e9e7e7',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: "'Montserrat', 'sans-serif'",
    },
    
)

class BlogHeader extends Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount(){
       this.props.getUser()
    }
  
  
    
    render() {
        console.log('props', this.props);
        

        return (
            <div  >
                <HeaderBar>                 
                        <div></div>
                    <h2>AQuest</h2>
                    <div style={{padding:'10px'}}>
                    {
                        this.props.user.admin
                        ?

                        <div>
                        {
                            this.props.user.admin?
                            <Link to='/blog/create'>Create</Link>
                            :''
                        }
                        {this.props.user.username}
                        </div> 

                        :
                        <a href={process.env.REACT_APP_LOGIN}> Login </a>                
                        
                    }

                     </div>
                              
                </HeaderBar>
            </div>
        )
    }
}
function mapStateToProps(state){        
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, {getUser})(BlogHeader)
