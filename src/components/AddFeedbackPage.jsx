import "./AddFeedbackPage.css" 


function AddFeedbackPage() {
   return (
    <div className="feedback-page">
        <div className="feedback-box">
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
            
        </div>
    </div>
   ) 
}

export default AddFeedbackPage