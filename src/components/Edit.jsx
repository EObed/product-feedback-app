import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Edit({ feedbacks, setFeedbacks }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [editFeedback, setEditFeedback] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState('');

  useEffect(() => {
    function setEdit(){
        setIsLoading(true);
        const [editItem] = feedbacks.filter(item => item.id.toString() === id.toString());
        setEditFeedback(editItem);
        setIsLoading(false);
    }

    setEdit();
  },[id]);

  const handleSave = () => {
    if(comment.trim() !== ''){
    const updatedFeedback = {...editFeedback, comments: [...editFeedback.comments, comment]}
    const editedFeedbacks = feedbacks.map((item) => 
      ( item.id.toString() !== id ? item : updatedFeedback )
    );
    setFeedbacks(editedFeedbacks);
    setEditFeedback(updatedFeedback);
    setComment('');
  }
  }

  const handleLike = () => {
    setEditFeedback({ ...editFeedback, votes: ++editFeedback.votes })
  }

  const handleDislike = () => {
    if(editFeedback.votes > 0){
        setEditFeedback({ ...editFeedback, votes: --editFeedback.votes })
    }
  }

  if(isLoading){
     return (<h4>...Loading</h4>)
  }

  return (
    <div className="edit">
        <h2>{editFeedback?.name}</h2>
        <h4 className="edit__description">{editFeedback?.description}</h4>
        <label htmlFor="comment">
          <h3>Comment</h3>
        </label>
        <textarea
          name="comment"
          id="comment"
          cols="30"
          rows="5"
          value={comment}
          placeholder="please type your comment here"
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <div className="edit__post-div">
          <button type="button" onClick={handleSave}>Post</button>
        </div>
        <h3>{`Likes (${editFeedback?.votes})`}</h3>
        <div className="edit__like-div">
            <button type="button" onClick={handleLike}><i className="fa-regular fa-thumbs-up" /></button>
            <button type="button" onClick={handleDislike}><i className="fa-regular fa-thumbs-down" /></button>
        </div>
        <div className="edit__comments-div">
          {!showComment && (<button className="edit__comments-button" onClick={() => setShowComment(true)}>View all comments</button>)}
          {showComment && (<button className="edit__comments-button" onClick={() => setShowComment(false)}>Hide comments</button>)}
        </div>
        {showComment && (<div>
           {
            (editFeedback?.comments?.length !== 0) &&
            (<ul>{
            editFeedback?.comments?.map((item) => (
              <li className="edit__list">
                <p>{item}</p>
              </li>
            ))}
            </ul>)
           }
           {
            (editFeedback?.comments?.length === 0) &&
            (<p className="edit__no-comment">There are no comments</p>)
           }
        </div>)}
        <div className="edit__buttons-div">
            <button type="button" onClick={() => navigate('/')}>Go Back</button>
        </div>
    </div>
  )
}
