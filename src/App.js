import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AddFeedbackPage from './components/AddFeedbackPage';
import Edit from './components/Edit';

function App() {

  const [feedbacks, setFeedbacks] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<LandingPage feedbacks={feedbacks} setFeedbacks={setFeedbacks} />}></Route>
          <Route path="/feedback" exact element={<AddFeedbackPage setFeedbacks={setFeedbacks} feedbacks={feedbacks} />}></Route>
          <Route path="/edit/:id" exact element={<Edit feedbacks={feedbacks} setFeedbacks={setFeedbacks} />}></Route>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
