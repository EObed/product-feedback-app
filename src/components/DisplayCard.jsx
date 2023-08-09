import React from 'react'
import Card from './Card'
import NoFeedbacks from './NoFeedbacks';

export default function DisplayCard({ feedbacks, setFeedbacks }) {

  if(feedbacks.length === 0){
    return (<NoFeedbacks />);
  }

  return (
    <>
    {
       feedbacks.map((feedback) => (
        <Card feedback={feedback} feedbacks={feedbacks} setFeedbacks={setFeedbacks} />
       )) 
    }
    </>
  )
}
