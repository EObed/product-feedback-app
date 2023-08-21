import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Card({ feedback, feedbacks, setFeedbacks }) {
  const { name, description, selectedCategory, votes, comments, id} = feedback;

  const [show,setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    const newFeedbacks = feedbacks.filter((item) => (
      item.id !== id
    ))
    setFeedbacks(newFeedbacks)
  }

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  }

  return (
      <div className="card" key={id}>
        <Link to={`/`} className="card__link">
          <div className="card__icon-div" />
          <div className="card__info-div">
            <div className="card__info-inner-div">
                <h3>Title</h3>
                <p>{name}</p>
            </div>
            <div className="card__info-inner-div">
                <h3>Headline</h3>
                <p>{description}</p>
            </div>
            <div className="card__info-inner-div">
                <h3>Category</h3>
                <p>{selectedCategory}</p>
            </div>
          </div>
        </Link>
        <div className="card__button-div">
          <button type="button" className="card__button delete" onClick={ handleDelete }>X</button>
          <button className="card__button" type="button" onClick={handleEdit}>
            <i className="fa-solid fa-pen-to-square" />
          </button>
        </div>
        </div>
  )
}
