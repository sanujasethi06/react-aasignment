import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNav from './components/SideNav';
import Tables from './components/Tables';
import Forms from './components/Forms';
import Charts from './components/Charts';
import './App.css';

function App() {
    const [language, setLanguage] = useState('en');

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    return (
        <Router>
            <div className="App">
                <SideNav />
                <div className="main-content">
                    <select onChange={handleLanguageChange} value={language}>
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                    </select>
                    <Routes>
                        <Route path="/tables" element={<Tables/>} />
                        <Route path="/forms" element={<Forms/>} />
                        <Route path="/charts" element={<Charts/>} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
