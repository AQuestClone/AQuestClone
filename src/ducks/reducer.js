import axios from 'axios'

const initialState = {
    user: {},
    post: {},
    render: false
}

const GET_USER = 'GET_USER'
const GET_POST = 'GET_POST'
const SHOULD_RENDER = 'SHOULD_RENDER'


export function getUser() {
    let userData = axios.get('/auth/me').then(res => {
        console.log('res.data', res.data);
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
        case GET_USER + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })
        case GET_POST + '_FULFILLED':
            console.log('action.payload', action.payload)
            return Object.assign({}, state, { post: action.payload[0]} )
        case SHOULD_RENDER:
            return Object.assign({}, state, {render: action.payload})
        default: return state;
    }
}