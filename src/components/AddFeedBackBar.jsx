import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddFeedBackBar() {
  const navigate = useNavigate();  

  return (
    <div className="add-feedback-bar">
        <div>
            <label htmlFor="sort">Sort By:</label>
            <select name="sort" id="sort">
                <option value="none">none</option>
                <option value="most upvotes">most upvotes</option>
                <option value="least upvotes">least upvotes</option>
                <option value="most comments">most comments</option>
                <option value="least comments">least comments</option>
            </select>
        </div>
        <button
          type="button" 
          className="add-feedback-bar__button"
          onClick={() => navigate("/feedback")}
        >
          + Add Feedback
        </button>
    </div>
  )
}
