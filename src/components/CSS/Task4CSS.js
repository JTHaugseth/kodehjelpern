import React from 'react';
import { Link } from 'react-router-dom';
import Task4ExampleCode from '../../CSS-images/Task4ExampleCode.JPG';
import Task4ExampleResult from '../../CSS-images/Task4ExampleResult.JPG';
import '../../styles/taskStyles.css';  // Import the CSS file

function Task4CSS() {
  return (
    <div className="container-fluid">
      <h1>Tekstformatering</h1>

      <div className='content-container'>
        {/* 2x2 Grid */}
        <div className="row">
          {/* Top Left */}
          <div className="col-md-6">
            <h2>Tekstformatering i CSS</h2>
            <p>Tekstformatering i CSS handler om å definere stilen til tekst på en nettside. Dette inkluderer ting som font type, font størrelse, farge, tekstutretting, linjeavstand, ordavstand, og bokstavavstand. Her er noen viktige CSS egenskaper for tekstformatering:</p>
            <ol>
              <li><code>font-family</code>: Definere skrifttypen. Du kan spesifisere flere skrifttyper som en "fallback".</li>
              <li><code>font-size</code>: Definere størrelsen på teksten i ulike enheter som px, em, rem, %.</li>
              <li><code>color</code>: Definere fargen på teksten i ulike formater.</li>
              <li><code>text-align</code>: Justere teksten horisontalt.</li>
              <li><code>line-height</code>: Definere avstanden mellom linjene av tekst.</li>
              <li><code>letter-spacing</code>: Definere avstanden mellom bokstavene.</li>
              <li><code>text-decoration</code>: Sette dekorasjon på tekst som understreking, overstrek, gjennomstreking osv.</li>
            </ol>
          </div>

          {/* Top Right */}
          <div className="col-md-6">
            {/* Placeholder image */}
            <img src={Task4ExampleCode} alt="Placeholder" className="img-fluid" />
          </div>
        </div>

        <div className="row">
          {/* Bottom Left */}
          <div className="col-md-6">
            <h2>Oppgave:</h2>
            <ol>
              <li>Lag en HTML-fil med minst to paragrafer og en overskrift.</li>
              <li>Koble HTML-filen til en ekstern CSS-fil.</li>
              <li>Bruk <code>font-family</code> for å endre skrifttypen.</li>
              <li>Bruk <code>font-size</code> for å endre tekststørrelse.</li>
              <li>Bruk <code>color</code> for å endre fargen på overskriften.</li>
              <li>Bruk <code>text-align</code> for å sentrere teksten.</li>
              <li>Bruk <code>line-height</code> og <code>letter-spacing</code> for å endre avstanden mellom linjer og bokstaver.</li>
              <li>Bruk <code>text-decoration</code> for å understreke overskriften.</li>
            </ol>
          </div>

          {/* Bottom Right */}
          <div className="col-md-6">
            {/* Placeholder image */}
            <div className="browser-mockup">
              <img src={Task4ExampleResult} alt="Placeholder" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      {/* Buttons at the bottom */}
      <div className="row justify-content-center buttons-bar">
        <div className="col-auto">
          <Link to="/farger-og-bakgrunn" className="btn btn-secondary">Tilbake</Link>
        </div>
        <div className="col-auto">
          <Link to="/margin-og-padding" className="btn btn-primary">Neste</Link>
        </div>
      </div>

    </div>
  );
}

export default Task4CSS;