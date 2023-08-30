import React from 'react';
import { Link } from 'react-router-dom';
import Task1ExampleCode from '../../CSS-images/Task1ExampleCode.JPG';
import Task1ExampleResult from '../../CSS-images/Task1ExampleResult.JPG';

function Task1CSS() {
  return (
    <div className="container-fluid">
      <h1 className='mb-5'>Introduksjon til CSS</h1>

      {/* 2x2 Grid */}
      <div className="row mb-4">

        {/* Top Left */}
        <div className="col-md-6">
          <h2>Hva er CSS?</h2>
          <p>CSS står for "Cascading Style Sheets" og er et stilarksspråk brukt for å beskrive utseendet og formateringen av et dokument skrevet i et markup-språk som HTML. Mens HTML gir strukturen til nettsiden, gir CSS den visuelle formen. Tenk på HTML som skjelettet og CSS som huden og klærne.</p>

          <h2>Hvorfor er CSS viktig?</h2>
          <ol>
            <li>Separasjon av Innhold og Stil: CSS gjør det mulig å skille innholdet (HTML) fra presentasjonen (utseendet). Dette gjør det enklere å vedlikeholde og oppdatere nettsider.</li>
            <li>Kontroll: CSS gir deg full kontroll over layout og design ned til hvert enkelt element. Du kan tilpasse farger, skrifttyper, størrelser, avstander og mye mer.</li>
            <li>Responsiv Design: Med CSS kan du lage nettsider som tilpasser seg ulike skjermstørrelser og enheter, noe som er viktig i dagens varierte enhetslandskap.</li>
          </ol>

          <h2>Hvordan fungerer CSS og HTML sammen?</h2>
          <p>CSS bruker "selektorer" for å finne HTML-elementer og deretter anvende stilregler på dem. Disse reglene settes inn i CSS-filer (.css) eller direkte inn i HTML-filer gjennom &lt;style&gt;-elementet eller "inline" via style-attributtet.</p>
        </div>

        {/* Top Right */}
        <div className="col-md-6">
          {/* Placeholder image */}
          <img src={Task1ExampleCode} alt="Placeholder" className="img-fluid" />
        </div>

        {/* Bottom Left */}
        <div className="col-md-6">
          <h2>Oppgave:</h2>
          <ol>
            <li>Lag et HTML-dokument med noen &lt;p&gt;-elementer.</li>
            <li>Bruk inline CSS for å endre fargen på en av paragrafene til blått. Bruk attributtet style direkte i HTML-elementet.</li>
            <li>Neste, opprett en ekstern CSS-fil, for eksempel styles.css, og lenk den i HTML-dokumentet. Bruk denne filen for å endre skrifttypen på alle &lt;p&gt;-elementene.</li>
          </ol>
        </div>

        {/* Bottom Right */}
        <div className="col-md-6">
          {/* Placeholder image */}
          <img src={Task1ExampleResult} alt="Placeholder" className="img-fluid" />
        </div>

      </div>

      {/* Buttons at the bottom */}
      <div className="row mt-5 justify-content-center">
        <div className="col-auto">
          <Link to="/utforsk-flere-html-tags" className="btn btn-secondary">Tilbake</Link>
        </div>
        <div className="col-auto">
          <Link to="/css-selektorer-og-grunnleggende-syntaks" className="btn btn-primary">Neste</Link>
        </div>
      </div>

    </div>
  );
}

export default Task1CSS;