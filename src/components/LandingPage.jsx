import React from "react";
import "./LandingPage.css";
import img1 from "./images/background-header.png"
// import { Link } from "react-router-dom";
// import AddFeedbackPage from "./AddFeedbackPage";
import { useLocation } from "react-router-dom";
// import Card from "./Card";
import DisplayCard from "./DisplayCard";
import AddFeedBackBar from "./AddFeedBackBar";
// import img2 from "./images/bulb-removebg-preview.png"





function LandingPage({ feedbacks, setFeedbacks }){
//     const [open, setOpen] = useState(false);
 
//   let menuRef = useRef();

//   useEffect(() => {
//     let handler = (e)=>{
//       if(!menuRef.current.contains(e.target)){
//         setOpen(false);
//         console.log(menuRef.current);
//       }      
//     };

//     document.addEventListener("mousedown", handler);
    

//     return() =>{
//       document.removeEventListener("mousedown", handler);
//     }
   
//   });
  

    // const getData = (data) =>{
    //  console.log("sdDMCDAKX",data)
    // };
   const location = useLocation();
   console.log(location)
    return (
        <div className="landing-page">
            <div className="side-bar-land"> 
                <div className="logo-land" style={{backgroundImage: `url(${img1})`}}>
                   <div className="mentor">Frontend Mentor</div>
                   <div className="board">Feedback Board</div>
                </div>
                <div className="features-land">
                    <div className="features-button-box" id="features-button-box">
                        <div className="row1-feat" id="row1-feat">
                            <button className="butn"> All </button>
                            <button className="butn">UI</button>
                            <button className="butn">UX</button>
                        </div>
                        <div className="row2-feat">
                            <button className="butn" id="bug-btn">Enhancement</button>
                            <button className="butn" >Bug</button>
                        </div>
                        <div className="row3-feat">
                            <button className="butn"> Feature </button>
                        </div>
                    </div>
                </div>
                <div className="roadmap-land">
                    <div className="roadmap-title">
                        <div className="roadmap-left-title">Roadmap</div>
                        <div className="roadmap-right-title">View</div>
                    </div>
                    <div className="planned-and-views">
                        <div className="planned"><li>Planned</li></div>
                        <div className="planned-views"> 0</div>
                    </div>
                    <div className="progress-and-views">
                        <div className="progress"><li>In-Progress</li></div>
                        <div className="progress-views"> 0</div>
                    </div>
                    <div className="live-and-views">
                        <div className="live"><li>Live</li></div>
                        <div className="live-views"> 0</div>
                    </div>

                </div>
            </div>
            <div className="main-content-land">
                <AddFeedBackBar />
                <DisplayCard feedbacks={feedbacks} setFeedbacks={setFeedbacks} />
            </div>
            </div>
        
    )
}

function DropDownItem (props) {
    return (
        <li className="dropdownItem"> 
            <a>{props.text}</a>
        </li>
        
    )
}

export default LandingPage