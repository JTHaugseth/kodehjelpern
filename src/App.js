import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Contact from './components/Contact';
import './App.css';

import Task1HTML from './components/HTML/Task1HTML';
import Task2HTML from './components/HTML/Task2HTML';
import Task3HTML from './components/HTML/Task3HTML';
import Task4HTML from './components/HTML/Task4HTML';
import Task5HTML from './components/HTML/Task5HTML';

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


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-3 p-0">
              <Sidebar />
            </div>
            <div className="col-9 p-0">
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/kontakt-meg" element={<Contact />} />
                
                {/* HTML TASK ROUTES */}
                <Route path="/html-dokumentets-grunnstruktur" element={<Task1HTML />} />
                <Route path="/tekst-og-overskrifter" element={<Task2HTML />} />
                <Route path="/lister-og-lenker" element={<Task3HTML />} />
                <Route path="/bilder-og-attributter" element={<Task4HTML />} />
                <Route path="/utforsk-flere-html-tags" element={<Task5HTML />} />
              
                {/* CSS TASK ROUTES */}
                <Route path="/introduksjon-til-css" element={<Task1CSS />} />
                <Route path="/css-selektorer-og-grunnleggende-syntaks" element={<Task2CSS />} />
                <Route path="/farger-og-bakgrunn" element={<Task3CSS />} />
                <Route path="/tekstformatering" element={<Task4CSS />} />
                <Route path="/margin-og-padding" element={<Task5CSS />} />
                <Route path="/grenser-og-bokser" element={<Task6CSS />} />
                <Route path="/layout-med-div-og-span" element={<Task7CSS />} />
                <Route path="/responsiv-design" element={<Task8CSS />} />
                <Route path="/hover-og-pseudoklasser" element={<Task9CSS />} />
                <Route path="/mer-avanserte-selektorer" element={<Task10CSS />} />
                <Route path="/flexbox-og-grid" element={<Task11CSS />} />
                <Route path="/transisjoner-og-animasjoner" element={<Task12CSS />} />

                {/* EXTRA TASKS */}

              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;