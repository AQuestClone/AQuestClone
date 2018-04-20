import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {shouldRender} from '../ducks/reducer';

class PageChange extends Component{
    constructor(){
        super()

        this.state = {
            scrollStatus: '',
            newPage: ''
        };
        this.scrollTimeout = null;
        this.pageTimeout = null
    }

    changePage = (newPage) => {
        this.afterScroll();

        document.addEventListener('scroll', this.afterScroll, false)

        document.getElementById('root').scrollIntoView({block: "start", inline: "nearest", behavior: 'smooth'})

        this.setState({newPage})
    }

    afterScroll = () => {
        if(this.scrollTimeout){clearTimeout(this.scrollTimeout)};

        this.scrollTimeout = setTimeout(() => {
            this.scrollTimeout = null;

            this.props.shouldRender(false)

            document.removeEventListener('scroll', this.afterScoll, false)

            this.scrollStatus = 'stopped scrolling';

            if(this.pageTimeout) clearTimeout(this.pageTimeout)

            this.pageTimeout = setTimeout(() => this.props.history.push(this.state.newPage), 700)
        }, 700)

        if(this.state.scrollStatus !== 'scrolling'){
            this.setState({scrollStatus: 'scrolling'})
        }
    }

    render(){
        return (
            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}} onClick={() => this.changePage(this.props.newPage)} >
                {this.props.children}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {

    }
}

export default connect(mapStateToProps, {shouldRender})(withRouter(PageChange));