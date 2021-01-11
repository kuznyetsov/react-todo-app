import {connect} from 'react-redux';
import {addPostAC, updateNewPostAC, deletePostAC, checkedPostAC} from './redux/todo-reducer';
import App from './App';

let mapStateToProps = (state) => {
    return {
        posts: state.todoPage.posts,
        newPostText: state.todoPage.newPostText 
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (id) => {
            dispatch(addPostAC(id));
        },
        updateNewPost: (text) => {
            dispatch(updateNewPostAC(text));
        },
        deletePost: (id) => {
            dispatch(deletePostAC(id));
        },
        checkedPost: (id) => {
            dispatch(checkedPostAC(id));
        }
    }
}

const appContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default appContainer;