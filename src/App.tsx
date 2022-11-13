import React from 'react';
import MainPage from './components/MainPage/MainPage';
import SkillsPage from './components/SkillsPage/SkillsPage';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import ExperiencePage from './components/ExperiencePage/ExperiencePage.lazy';
import ConnectPage from './components/ConnectPage/ConnectPage.lazy';

function App() {
    return (
        <div id="1">
            <MainPage />
            <SkillsPage />
            <ProjectsPage />
            <ExperiencePage />
            <ConnectPage />
        </div>
    );
}

export default App;
