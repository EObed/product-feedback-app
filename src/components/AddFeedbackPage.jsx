import React, {useState} from "react";
import "./AddFeedbackPage.css" 
import { useNavigate } from "react-router-dom";

const AddFeedbackPage = (props) => {
  const navigate= useNavigate()
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [selectedCategory,setSelectedCategory] = useState();


   
    const handleSubmit = (e) =>{
         e.preventDefault();
         console.log(name,description,selectedCategory)
    }
   return (
    <div className="feedback-page">
        {/* <div className="feedback-box">
            <div className="feedback-heading">Create New Feedback</div>
            <div className="feedback1">
                <div className="feedback1-name">Feedback Title</div>
                <div className="feedback1-desc">Add a short, descriptive headline</div>
                <div className="feedback1-input"><input type="text"></input></div>
            </div>
            <div className="feedback2">
                <div className="feedback2-name">Category</div>
                <div className="feedback2-desc">Choose a category for your feedback</div>
                <div className="feedback2-form">
                    <form name="dropForm">
                        <select name="dropSelect" onchange="{showDropInfo()}">
                            <option value="P">Feature</option>
                            <option value="B">UI</option>
                            <option value="C">UX</option>
                            <option value="C">Enhancement</option>
                            <option value="C">Bug</option>
                        </select>
                </form>
                </div>
            </div>
            
        </div> */}

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

            <button type="submit" className="form-button" onClick={()=>navigate('/',{replace:true, state:{name,description,selectedCategory}})}>Submit</button>
        </form>
    </div>
   ) 
}

export default AddFeedbackPage