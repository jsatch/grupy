import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, HashRouter  } from 'react-router-dom';
import './index.css';
import AssignmentPage from './Presentation/pages/AssignmentPage.page';
import CoursePage from './Presentation/pages/CoursePage.page';
import MainPage from './Presentation/pages/MainPage.page';
import SettingsPage from './Presentation/pages/SettingsPage.page';
import GradingPage from './Presentation/pages/GradingPage.page';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/settings' element={<SettingsPage />} />
                <Route path='/course' element={<CoursePage />} />
                <Route path='/assignment' element={<AssignmentPage />} />
                <Route path='/grading' element={<GradingPage />} />
            </Routes>
        </HashRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
