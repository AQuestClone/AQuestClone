import axios from 'axios'

const initialState = {
    user: {},
    post: {},
}

const GET_USER = 'GET_USER'
const GET_POST = 'GET_POST'


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

export default function reducer(state = initialState, action) { 
    switch (action.type) {
        case GET_USER + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })
        case GET_POST + '_FULFILLED':
            console.log('action.payload', action.payload)
            return Object.assign({}, state, { post: action.payload[0]} )
        default: return state;
    }
}