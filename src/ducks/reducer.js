import axios from 'axios'
import { type } from 'os';
import { active } from 'glamor';

const initialState = {
    blogs: [],
    user: {},
    post: {},
    render: false,
}

const _FULFILLED = '_FULFILLED'
const GET_USER = 'GET_USER'
const GET_POST = 'GET_POST'
const GET_BLOGS = 'GET_BLOGS'
const SHOULD_RENDER = 'SHOULD_RENDER'
const SORT_BY_CLAPS = 'SORT_BY_CLAPS'
const SORT_BY_DATE = 'SORT_BY_DATE'
const SORT_BY_RESPONSES = 'SORT_BY_RESPONSES'
const EMPTY_POST = 'EMPTY_POST'

export function sortByResponses(blogs) {
    let sortedBlogs = blogs.sort((a, b) => {
        let comparison = 0;

        if (a.responses < b.responses){
            comparison = 1;
        }
        else if (a.responses < b.responses) {
            comparison = -1
        }
        return comparison
    })

 
    console.log(sortedBlogs);
    return {
        type: SORT_BY_DATE,
        payload: sortedBlogs
    }
}
export function sortByDate(blogs) {
    let sortedBlogs = blogs.sort((a, b) => {
        let comparison = 0;

        if (a.time_stamped < b.time_stamped){
            comparison = 1;
        }
        else if (a.time_stamped < b.time_stamped) {
            comparison = -1
        }
        return comparison
    })

 
    console.log(sortedBlogs);
    return {
        type: SORT_BY_DATE,
        payload: sortedBlogs
    }
}
export function sortByClaps(blogs) {
    let sortedBlogs = blogs.sort((a, b) => {
        let comparison = 0;

        if (a.claps < b.claps){
            comparison = 1;
        }
        else if (a.claps < b.claps) {
            comparison = -1
        }
        return comparison
    })

 
    console.log(sortedBlogs);
    return {
        type: SORT_BY_CLAPS,
        payload: sortedBlogs
    }
}
export function getBlogs() {
    let blogs = axios.get('/api/blogpost').then(res => res.data)
    return {
        type: GET_BLOGS,
        payload: blogs
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

export function getPost(id) {
    let activePost = axios.get(`/api/blogpost/${id}`).then(res => {
        return res.data
    })
    return {
        type: GET_POST,
        payload: activePost
    }

}

export function shouldRender(bool) {
    return {
        type: SHOULD_RENDER,
        payload: bool
    }
}

export function emptyPost(){
    return {
        type: EMPTY_POST
    }
}

export default function reducer(state = initialState, action) { 
    switch (action.type) {
        case SORT_BY_DATE:
            return Object.assign({}, state, {blogs: action.payload})
        case SORT_BY_CLAPS:
            return Object.assign({}, state, {blogs: action.payload})
        case GET_USER + _FULFILLED:
            return Object.assign({}, state, { user: action.payload })
        case GET_POST + _FULFILLED:
            return Object.assign({}, state, { post: action.payload[0] })
        case GET_BLOGS + _FULFILLED:
            return Object.assign({}, state, { blogs: action.payload })
        case SHOULD_RENDER:
            return Object.assign({}, state, { render: action.payload })
            return Object.assign({}, state, {render: action.payload})
        case EMPTY_POST: 
            return Object .assign({}, state, {post: {}})

        default: return state;
    }
}