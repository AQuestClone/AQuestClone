import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {shouldRender, emptyPost} from '../ducks/reducer';
import glamorous from 'glamorous';

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

        console.log(this.props.match)

        if (this.props.match.path === newPage)

       { this.afterScroll();

        document.addEventListener('scroll', this.afterScroll)

        document.getElementById('root').scrollIntoView({block: "start", inline: "nearest", behavior: 'smooth'})

        this.setState({newPage})}
    }

    afterScroll = () => {
        if(this.scrollTimeout){clearTimeout(this.scrollTimeout)};

        this.scrollTimeout = setTimeout(() => {
            this.scrollTimeout = null;

            this.props.shouldRender(false)

            document.removeEventListener('scroll', this.afterScroll)

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
            <Wrapper style={this.props.style} onClick={() => this.changePage(this.props.newPage)} >
                {this.props.children}
            </Wrapper>
        )
    }
}

function mapStateToProps(state){
    return {

    }
}

export default connect(mapStateToProps, {shouldRender, emptyPost})(withRouter(PageChange));

const Wrapper = glamorous.div(
    'page-change-wrapper',
        {
            ':hover':{
                cursor: 'pointer'
            }
        }
    )