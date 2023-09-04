import React from 'react';
import { Link } from 'react-router-dom';
import Task5ExampleCode from '../../CSS-images/Task5ExampleCode.JPG';
import Task5ExampleResult from '../../CSS-images/Task5ExampleResult.JPG';
import '../../styles/taskStyles.css';  // Import the CSS file

function Task5CSS() {
  return (
    <div className="container-fluid">
      <h1>Margin og Padding</h1>

      <div className='content-container'>
        {/* 2x2 Grid */}
        <div className="row">
          {/* Top Left */}
          <div className="col-md-6">
            <h2>I Webdesign</h2>
            <p>I webdesign er det ofte like viktig å kontrollere mellomrommet mellom elementene som det er å style elementene selv. Dette er der margin og padding kommer inn i bildet.</p>
            <p>Margin er plassen som omgir et HTML-element. Padding er plassen som er innenfor et element, men utenfor selve innholdet.</p>
            <p>Eksempel: La oss si at du har en tekstboks, og du vil at det skal være 20 piksler avstand fra denne boksen til neste element. Dette ville du løst med margin. Hvis du vil at teksten skal ha 20 piksler avstand til kantene inni boksen, ville dette vært jobben til padding.</p>
          </div>

          {/* Top Right */}
          <div className="col-md-6">
            {/* Placeholder image */}
            <img src={Task5ExampleCode} alt="Placeholder" className="img-fluid" />
          </div>
        </div>

        <div className="row">
          {/* Bottom Left */}
          <div className="col-md-6">
            <h2>Oppgave:</h2>
            <ol>
              <li>Lag en HTML-fil med flere elementer som paragrafer og knapper.</li>
              <li>I en tilknyttet CSS-fil, bruk margin for å kontrollere avstanden mellom disse elementene.</li>
              <li>Bruk padding for å justere plassen innenfor minst ett av elementene, for eksempel en knapp eller en tekstboks.</li>
            </ol>
          </div>

          {/* Bottom Right */}
          <div className="col-md-6">
            {/* Placeholder image */}
            <div className="browser-mockup">
              <img src={Task5ExampleResult} alt="Placeholder" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      {/* Buttons at the bottom */}
      <div className="row justify-content-center buttons-bar">
        <div className="col-auto">
          <Link to="/tekstformatering" className="btn btn-secondary">Tilbake</Link>
        </div>
        <div className="col-auto">
          <Link to="/grenser-og-bokser" className="btn btn-primary">Neste</Link>
        </div>
      </div>

    </div>
  );
}

export default Task5CSS;