import './App.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faCheck, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import {device} from './media-styles/media-css';

const Button = styled.button`
        background-image: linear-gradient(to right, #ff6e7f 0%, #bfe9ff  51%, #ff6e7f  100%);
        text-align: center;
        text-transform: uppercase;
        transition: 0.5s;
        background-size: 200% auto;
        color: white;            
        box-shadow: 0 0 20px #eee;
        border-radius: 100%;
        position: absolute;
        bottom: -20px;
        left: 170px;
        width: 50px;
        height: 50px;
        border: none;
        display: block;
        cursor: pointer;
        outline: none;
      &:hover {
        background-position: right center; /* change the direction of the change here */
      color: #fff;
      text-decoration: none;
`;

  const MainWindow = styled.div`
        display: flex;
        flex-direction: column;
        max-width: 400px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 150px;
        margin-bottom: 100px;
        background: #fff;
        -webkit-box-shadow: 0px 0px 24px -3px rgba(0,0,0,0.46); 
        box-shadow: 0px 0px 24px -3px rgba(0,0,0,0.46);
        padding: 50px;
        border-radius: 10px;
        @media ${device.mobileL} { 
          max-width: 250px;
        }
  `;

  const Textarea = styled.textarea`
        border-radius: 20px;
        -webkit-box-shadow: 0px 0px 24px -3px rgba(0,0,0,0.46); 
        -webkit-appearance : none;
        box-shadow: 0px 0px 24px -3px rgba(0,0,0,0.46);
        outline: none;
        padding: 20px;
        border: none;
        resize: none;
        width:100%; max-width:300px;
        &:focus {
          box-shadow: 0px 0px 24px -3px #C850C0;
          transition: .5s;
        }
        @media ${device.mobileL} { 
          max-width: 220px;
          font-size:16px;
        }
  `;

  const PostItem = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
        padding: 12px;
        border-radius: 10px;
        background-color: #4158D0;
        background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
        &.checked {
          opacity: 0.5;
        }
        .iconBtn {
          margin-top: 0;
          color: #fff;
          font-size: 22px;
          cursor: pointer;
          margin-right: 10px;
          &:hover {
            opacity: 0.5;
            transition: .5s;
          }
        }
      
  `;

  const TextP = styled.p`
        color: #fff;
        min-width: 230px;
        margin: 0;
        @media ${device.tablet} { 
          min-width: auto!important;
        }
  `


const App = (props) => {

  

  let newPostText = props.newPostText;
  

  let messagesElement = props.posts
        .map( (p, index) => 
            
            <PostItem key={index} className={p.checked ? 'postItem checked' : 'postItem'}>
              <TextP className="needDo">{p.message} </TextP>
              <TextP className="alreadyDo">Сделано </TextP>
              <div>
                <FontAwesomeIcon icon={faTrashAlt} className='iconBtn deleteBtn' onClick={() => {props.deletePost(index)}} />
                {
                  p.checked  
                  ? <FontAwesomeIcon icon={faThumbsUp} className='iconBtn' onClick={() => {props.checkedPost(index)}} />
                  : <FontAwesomeIcon icon={faCheck} className='iconBtn' onClick={() => {props.checkedPost(index)}} />
                }
              </div>
            </PostItem>
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
        <MainWindow>
            <h1>Список дел</h1>
            <div className="textBtn">
              <Textarea onChange={updateNewPost} value={newPostText} placeholder="Что нужно сделать?" ></Textarea>
              <Button onClick={addPost} >+</Button>
            </div>
            {messagesElement}
        </MainWindow>
    </div>
  );
}

export default App;
