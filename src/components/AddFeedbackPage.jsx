import React, {useState} from "react";
import "./AddFeedbackPage.css" 
import { useNavigate } from "react-router-dom";

const AddFeedbackPage = ({ feedbacks, setFeedbacks }) => {
  const navigate= useNavigate()
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [selectedCategory,setSelectedCategory] = useState("Features");


   
    const handleSubmit = (e) =>{
         e.preventDefault();
         if(name.trim().length !== 0 && description.trim().length !== 0){
             console.log(name,description,selectedCategory)
             const feedback = { name, description, selectedCategory, votes: 0, comments: [], id: Date.now()}
             setFeedbacks([...feedbacks, feedback]);
             navigate('/');
         }
    }

   return (
    <div className="feedback-page">
        <form onSubmit={handleSubmit} className=" form">
            <h5 className="form-title">Create New Feedback</h5>
            <label >Feedback Title</label>
            <input className="input"  type="text" name="title"  onChange={e => setName(e.target.value)}/> <br />
            <label >Add a short, descriptive headline</label>
            <textarea type="text" className="text-area" name="description"  onChange={e => setDescription(e.target.value)} ></textarea>
          
            <p className="Form-category">Category</p>
            <p className="Form-categorys">Choose a category for your feedback</p>
            <select className="form-select" value={selectedCategory}  onChange={e => setSelectedCategory(e.target.value)}>
            <option>Feature</option>
            <option>UI</option>
            <option>UX</option>
            <option>Enhancement</option>
            <option >Bug</option>
            </select>

            <button type="submit" className="form-button">Submit</button>
        </form>
    </div>
   ) 
}

export default AddFeedbackPage