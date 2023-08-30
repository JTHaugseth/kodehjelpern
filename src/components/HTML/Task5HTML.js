import React from 'react';
import { Link } from 'react-router-dom';
import Task5ExampleCode from '../../HTML-images/Task5ExampleCode.JPG';  
import Task5ExampleResult from '../../HTML-images/Task5ExampleResult.JPG';  

function Task5HTML() {
  return (
    <div className="container-fluid">
      <h1 className='mb-5'>Containere i HTML</h1>
      
      {/* 2x2 Grid */}
      <div className="row mb-4">
        
        {/* Top Left Column */}
        <div className="col-md-6">
          <p>Bruk av &lt;div&gt;: &lt;div&gt; står for "division" og fungerer som en container for andre HTML-elementer. Den er veldig nyttig for å gruppere elementer sammen slik at de kan styles eller posisjoneres som en enhet.</p>
          <p>Bruk av &lt;span&gt;: I motsetning til &lt;div&gt;, er &lt;span&gt; en "inline" container. Det betyr at det ikke starter på en ny linje og bare tar så mye bredde som nødvendig. &lt;span&gt; er nyttig for å stilsette deler av tekst eller andre inline-elementer.</p>
        </div>

        {/* Top Right Column */}
        <div className="col-md-6">
          {/* Placeholder Image */}
          <img src={Task5ExampleCode} alt="Placeholder" className="img-fluid"/>
        </div>

      </div>

      <div className="row">
        
        {/* Bottom Left Column */}
        <div className="col-md-6">
          <h2>Oppgave</h2>
          <p>1. Lag en &lt;div&gt;-container og plasser noen paragrafer (&lt;p&gt;) og en liste (&lt;ul&gt; eller &lt;ol&gt;) inne i den.</p>
          <p>2. I en av paragrafene, bruk &lt;span&gt; for å utheve et ord eller en setning.</p>
        </div>

        {/* Bottom Right Column */}
        <div className="col-md-6">
          {/* Placeholder Image */}
          <div className="browser-mockup">
            <img src={Task5ExampleResult} alt="Placeholder" className="img-fluid"/>
          </div>
        </div>

      </div>

      {/* Buttons at the bottom */}
      <div className="row mt-5 justify-content-center">
        <div className="col-auto">
          <Link to="/bilder-og-attributter" className="btn btn-secondary">Tilbake</Link>
        </div>
        <div className="col-auto">
          <Link to="/håndtering-av-brukerinput" className="btn btn-primary">Neste</Link>
        </div>
      </div>

    </div>
  );
}

export default Task5HTML;