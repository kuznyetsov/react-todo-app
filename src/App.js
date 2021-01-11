import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faCheck } from "@fortawesome/free-solid-svg-icons";

const App = (props) => {

  let newPostText = props.newPostText;
  

  let messagesElement = props.posts
        .map( (p, index) => 
            
            <div key={index} className={p.checked ? 'postItem checked' : 'postItem'}>
              <p>{p.message} </p>
              <div>
                <FontAwesomeIcon icon={faTrashAlt} className='iconBtn deleteBtn' onClick={() => {props.deletePost(index)}} />
                <FontAwesomeIcon icon={faCheck} className='iconBtn' onClick={() => {props.checkedPost(index)}} />
              </div>
            </div>
            );

  let addPost = () => {
    props.addPost();
  }

  let updateNewPost = (e) => {
    let post = e.target.value;
    props.updateNewPost(post);
  }

  return (
    <div>
        <div className="mainWindow">
            <h1>Список дел</h1>
            <div className="textBtn">
              <textarea onChange={updateNewPost} value={newPostText} cols="42"></textarea>
              <button onClick={addPost} className="addPost">+</button>
            </div>
            {messagesElement}
        </div>
        <div className="mainWindow mainWindowModal">
            <h1>Список дел</h1>
            <div className="textBtn">
              <textarea onChange={updateNewPost} value={newPostText} cols="42"></textarea>
              <button onClick={addPost}>+</button>
            </div>
        </div>
    </div>
  );
}

export default App;
