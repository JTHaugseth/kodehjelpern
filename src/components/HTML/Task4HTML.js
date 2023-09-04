import React from 'react';
import { Link } from 'react-router-dom';
import Task4ExampleCode from '../../HTML-images/Task4ExampleCode.JPG';  
import Task4ExampleResult from '../../HTML-images/Task4ExampleResult.JPG';  
import '../../styles/taskStyles.css';

function Task4HTML() {
  return (
    <div className="container-fluid">
      {/* Title */}
      <h1>Bilder og Attributter</h1>
      
      <div className='content-container'>
      {/* 2x2 Grid */}
      <div className="row">
        
        {/* Top Left Column */}
        <div className="col-md-6">
          <p>Å legge til bilder kan gjøre en nettside mer engasjerende. Du bruker &lt;img&gt; taggen for dette. Den viktigste attributten her er src (source), som forteller hvor bildet er lagret.</p>
          <p>ID og Class Attributter: Attributter som id og class er nyttige for å gi spesifikke stiler til elementene ved hjelp av CSS. En id er unik for et enkelt element, mens en class kan brukes på flere elementer.</p>
        </div>

        {/* Top Right Column */}
        <div className="col-md-6">
          <img src={Task4ExampleCode} alt="Example Code" className="img-fluid"/>
        </div>

      </div>

      <div className="row">
        
        {/* Bottom Left Column */}
        <div className="col-md-6">
          <h2>Oppgave</h2>
          <p>1. Lag en enkel HTML-side som inkluderer et bilde av din favorittfrukt. Ikke glem å legge til en alt-tekst.</p>
          <p>2. Legg til en paragraf med id og en med class attributter.</p>
        </div>

        {/* Bottom Right Column */}
        <div className="col-md-6">
          <div className="browser-mockup">
            <img src={Task4ExampleResult} alt="Example Result" className="img-fluid"/>
          </div>
        </div>

      </div>
      </div>

      {/* Buttons at the bottom */}
      <div className="row justify-content-center buttons-bar">
        <div className="col-auto">
          <Link to="/lister-og-lenker" className="btn btn-secondary">Tilbake</Link>
        </div>
        <div className="col-auto">
          <Link to="/containere-i-html" className="btn btn-primary">Neste</Link>
        </div>
      </div>
    </div>
  );
}

export default Task4HTML;