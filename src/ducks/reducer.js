import axios from 'axios'
import { type } from 'os';
import { active } from 'glamor';

const initialState = {
    blogs: [],
    user: {},
    post: {},
    render: false,
}

const _FULFILLED ='_FULFILLED'
const GET_USER = 'GET_USER'
const GET_POST = 'GET_POST'
const GET_BLOGS = 'GET_BLOGS'
const SHOULD_RENDER = 'SHOULD_RENDER'


export function getBlogs(){
    let blogs = axios.get('/api/blogpost').then(res=>res.data)
    return {
        type:GET_BLOGS,
        payload:blogs
    }
}
export function getUser() {
    let userData = axios.get('/auth/me').then(res => {
        return res.data
    })   
    return {
        
        type: GET_USER,
        payload: userData
    }
}

export function getPost(id){
    let activePost = axios.get(`/api/blogpost/${id}`).then(res=>{
        return res.data
    })
    return{
        type: GET_POST,
        payload: activePost
    }

}

export function shouldRender(bool){
    return {
        type: SHOULD_RENDER,
        payload: bool
    }
}

export default function reducer(state = initialState, action) { 
    switch (action.type) {
        case GET_USER + _FULFILLED:
            return Object.assign({}, state, { user: action.payload })
        case GET_POST + _FULFILLED:
            return Object.assign({}, state, { post: action.payload[0]} )
        case GET_BLOGS + _FULFILLED:
            return Object.assign({}, state, { blogs: action.payload })
        case SHOULD_RENDER:
            return Object.assign({}, state, {render: action.payload})

        default: return state;
    }
}