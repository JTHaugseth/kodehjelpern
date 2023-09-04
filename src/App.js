import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Contact from './components/Contact';
import DivBot from './components/DivBot';
import './App.css';

import Task1HTML from './components/HTML/Task1HTML';
import Task2HTML from './components/HTML/Task2HTML';
import Task3HTML from './components/HTML/Task3HTML';
import Task4HTML from './components/HTML/Task4HTML';
import Task5HTML from './components/HTML/Task5HTML';
import Task6HTML from './components/HTML/Task6HTML';
import Task7HTML from './components/HTML/Task7HTML';

import Task1CSS from './components/CSS/Task1CSS';
import Task2CSS from './components/CSS/Task2CSS';
import Task3CSS from './components/CSS/Task3CSS';
import Task4CSS from './components/CSS/Task4CSS';
import Task5CSS from './components/CSS/Task5CSS';
import Task6CSS from './components/CSS/Task6CSS';
import Task7CSS from './components/CSS/Task7CSS';
import Task8CSS from './components/CSS/Task8CSS';
import Task9CSS from './components/CSS/Task9CSS';
import Task10CSS from './components/CSS/Task10CSS';
import Task11CSS from './components/CSS/Task11CSS';
import Task12CSS from './components/CSS/Task12CSS';
import Task13CSS from './components/CSS/Task13CSS';


function App() {
  return (
    <Router>
      <div className="App d-flex">
        <div className="sidebar-container" style={{ width: '15%', minWidth: '200px'}}>
          <Sidebar />
        </div>
        <div className="main-content-container" style={{ width: '85%', overflow: 'auto' }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/div-bot" element={<DivBot />} />

            {/* HTML TASK ROUTES */}
            <Route path="/html-dokumentets-grunnstruktur" element={<Task1HTML />} />
            <Route path="/tekst-og-overskrifter" element={<Task2HTML />} />
            <Route path="/lister-og-lenker" element={<Task3HTML />} />
            <Route path="/bilder-og-attributter" element={<Task4HTML />} />
            <Route path="/containere-i-html" element={<Task5HTML />} />
            <Route path="/brukerinput" element={<Task6HTML />} />
            <Route path="/utforsk-flere-html-tags" element={<Task7HTML />} />

            {/* CSS TASK ROUTES */}
            <Route path="/introduksjon-til-css" element={<Task1CSS />} />
            <Route path="/css-selektorer-og-grunnleggende-syntaks" element={<Task2CSS />} />
            <Route path="/farger-og-bakgrunn" element={<Task3CSS />} />
            <Route path="/tekstformatering" element={<Task4CSS />} />
            <Route path="/margin-og-padding" element={<Task5CSS />} />
            <Route path="/grenser-og-bokser" element={<Task6CSS />} />
            <Route path="/layout-med-div-og-span" element={<Task7CSS />} />
            <Route path="/display-property-og-visibility" element={<Task8CSS />} />
            <Route path="/hover-og-pseudoklasser" element={<Task9CSS />} />
            <Route path="/positioning-og-z-index" element={<Task10CSS />} />
            <Route path="/transisjoner-og-animasjoner" element={<Task11CSS />} />
            <Route path="/flexbox-og-grid" element={<Task12CSS />} />
            <Route path="/responsiv-design" element={<Task13CSS />} />

            {/* EXTRA TASKS */}

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;