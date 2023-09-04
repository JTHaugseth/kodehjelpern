import React from 'react';
import { Link } from 'react-router-dom';
import Task6ExampleCode from '../../CSS-images/Task6ExampleCode.JPG';
import Task6ExampleResult from '../../CSS-images/Task6ExampleResult.JPG';
import '../../styles/taskStyles.css';  // Import the CSS file

function Task6CSS() {
  return (
    <div className="container-fluid">
      <h1>Grenser og Bokser</h1>

      <div className='content-container'>
        {/* 2x2 Grid */}
        <div className="row">
          {/* Top Left */}
          <div className="col-md-6">
            <p>I CSS blir hvert element ofte tenkt på som om det er i en boks. Denne "boksen" har ulike lag, som inkluderer innhold, padding, border, og margin.</p>
            <p>Border: Grensen er et lag som ligger mellom padding og margin. Den er svært nyttig for å visuelt skille elementer fra hverandre.</p>
            <p>Eksempel: Tenk deg en knapp på en nettside. Den har tekst, padding, en solid border, og margin rundt selve boksen.</p>
          </div>

          {/* Top Right */}
          <div className="col-md-6">
            {/* Placeholder image */}
            <img src={Task6ExampleCode} alt="Placeholder" className="img-fluid" />
          </div>
        </div>

        <div className="row">
          {/* Bottom Left */}
          <div className="col-md-6">
            <h2>Oppgave:</h2>
            <ol>
              <li>Lag en HTML-fil med minst tre forskjellige elementer, som paragrafer eller knapper.</li>
              <li>I en tilknyttet CSS-fil, gi minst ett av disse elementene en border.</li>
              <li>Eksperimenter med ulike border-stiler, som solid, dashed, og dotted.</li>
              <li>Test også å endre border-width og border-color.</li>
            </ol>
          </div>

          {/* Bottom Right */}
          <div className="col-md-6">
            {/* Placeholder image */}
            <div className="browser-mockup">
              <img src={Task6ExampleResult} alt="Placeholder" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      {/* Buttons at the bottom */}
      <div className="row justify-content-center buttons-bar">
        <div className="col-auto">
          <Link to="/margin-og-padding" className="btn btn-secondary">Tilbake</Link>
        </div>
        <div className="col-auto">
          <Link to="/layout-med-div-og-span" className="btn btn-primary">Neste</Link>
        </div>
      </div>

    </div>
  );
}

export default Task6CSS;