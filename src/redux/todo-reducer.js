const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST';
const DELETE_POST = 'DELETE_POST';
const CHECKED_POST = 'CHECKED_POST';

let initialState = {
    posts: [  ],
    newPostText: ''
}

const todoReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: 
        let newPost = state.newPostText;
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {message: newPost, checked: false}]
            }
        case UPDATE_NEW_POST: 
            return {
                ...state,
                newPostText: action.newText
            }
        case DELETE_POST: 
            return {
                ...state,
                posts: [...state.posts.filter((_, p) => p !== action.id)]
            }
        case CHECKED_POST: 
            return {
                ...state,
                posts: state.posts.map( (p, index) => {
                    if (action.id === index && p.checked === false) {
                        return {...p, checked: true}
                    } else if (action.id === index && p.checked === true) {
                        return {...p, checked: false}
                    }
                    return p
                })
            }
        default:
            return state; 
    }
}

export const addPostAC = (id) => {
    return {
        type: ADD_POST,
        id
    }
}

export const updateNewPostAC = (text) => {
    return {
        type: UPDATE_NEW_POST,
        newText: text
    }
}

export const deletePostAC = (id) => {
    return {
        type: DELETE_POST,
        id
    }
}

export const checkedPostAC = (id) => {
    return {
        type: CHECKED_POST,
        id
    }
}

export default todoReducer;