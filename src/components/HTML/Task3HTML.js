import React from 'react';
import { Link } from 'react-router-dom';
import Task3ExampleCode from '../../HTML-images/Task3ExampleCode.JPG';
import Task3ExampleResult from '../../HTML-images/Task3ExampleResult.JPG';

function Task3HTML() {
  return (
    <div className="container-fluid">
      {/* Content for Intro to HTML will go here */}
      <h1 className='mb-5'>Lister og Lenker</h1>
    {/* 2x2 Grid */}
    <div className="row mb-4">
        {/* Top Left Column */}
        <div className="col-md-6">
          <p>Lister og lenker er svært nyttige for å strukturere og koble informasjon på en nettside.</p>
          <p>En punktliste (uordnet liste) er en samling av elementer som ikke nødvendigvis 
          har en bestemt rekkefølge. For å lage en punktliste, bruker vi &lt;ul&gt; taggen og legger elementene inni denne taggen som listeelementer &lt;li&gt;</p>
          <p>I en nummerert (ordnet) liste, har elementene en bestemt rekkefølge. For å lage en nummerert liste bruker vi &lt;ol&gt; taggen. 
          Akkurat som med punktlistene, bruker vi &lt;li&gt; for å legge til elementer.</p>
          <p>En hyperlenke er en måte å koble til andre nettsider eller ressurser. Vi bruker &lt;a&gt; taggen og angir mål-URLen i href-attributtet.</p>
        </div>

        {/* Top Right Column */}
        <div className="col-md-6">
          {/* Placeholder Image */}
            <img src={Task3ExampleCode} alt="Placeholder" className="img-fluid"/>
        </div>
      </div>

      <div className="row">
        {/* Bottom Left Column */}
        <div className="col-md-6">
          <h2>Oppgave</h2>
          <p>1. Lag en enkel HTML-side som inkluderer en punktliste med dine tre favorittfrukter.</p>
          <p>2. Legg til en nummerert liste med trinnene du tar for å lage en smoothie.</p>
          <p>3. Til slutt, legg til en lenke som fører til en nettside der man kan lese mer om frukt eller smoothies.</p>
        </div>

        {/* Bottom Right Column */}
        <div className="col-md-6">
          {/* Placeholder Image */}
          <div className="browser-mockup">
            <img src={Task3ExampleResult} alt="Placeholder" className="img-fluid"/>
          </div>
        </div>
      </div>

      {/* Buttons at the bottom */}
      <div className="row mt-5 justify-content-center">
        <div className="col-auto">
          <Link to="/tekst-og-overskrifter" className="btn btn-secondary">Tilbake</Link>
        </div>
        <div className="col-auto">
          <Link to="/bilder-og-attributter" className="btn btn-primary">Neste</Link>
        </div>
      </div>
    </div>
  );
}

export default Task3HTML;