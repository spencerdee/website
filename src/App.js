
import React from 'react';
import Navbar from './Navbar';
import './App.css'
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './Home';
import Calculator from './Calculator';
import Gym from './Gym';
import Resume from './Resume';
import Quiz from './Quiz';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/website' element={<Home />} />
                <Route path='/website/calculator' element={<Calculator />} />
                <Route path='/website/gym' element={<Gym />} />
                <Route path='/website/resume' element={<Resume />} />
                <Route path='/website/quiz' element={<Quiz />} />
            </Routes>
        </Router>
    );
}

export default App;