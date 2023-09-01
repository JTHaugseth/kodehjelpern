import React from 'react';
import { Link } from 'react-router-dom';
import Task7ExampleCode from '../../CSS-images/Task7ExampleCode.JPG';
import Task7ExampleResult from '../../CSS-images/Task7ExampleResult.JPG';

function Task7CSS() {
  return (
    <div className="container-fluid">
      <h1 className='mb-5'>Layout med div og span</h1>

      {/* 2x2 Grid */}
      <div className="row mb-4">

        {/* Top Left */}
        <div className="col-md-6">
          <p>Hittil har vi jobbet med enkeltstående HTML-elementer og stilisert dem med CSS. Men for å lage mer komplekse layouter trenger vi ofte å gruppere ulike elementer. Dette er der div og span kommer inn i bildet.</p>
          <p>Div: Står for "division" og er en blokk-nivå beholder som ofte brukes for å gruppere flere elementer for å style eller manipulere dem som en samlet enhet. Blokk-nivå betyr at elementet tar opp hele linjebredden og starter på en ny linje i layouten.</p>
          <p>Span: Dette er en inline beholder som kan brukes for å gruppere en liten bit av HTML, uten å påvirke layouten. Dette er nyttig for å style tekst eller for små tilpasninger.</p>
          <p>Å forstå hvordan man bruker div og span er grunnleggende for å kunne lage mer komplekse layouts og nettsider.</p>      
        </div>

        {/* Top Right */}
        <div className="col-md-6">
          {/* Placeholder image */}
          <img src={Task7ExampleCode} alt="Placeholder" className="img-fluid" />
        </div>

        {/* Bottom Left */}
        <div className="col-md-6">
          <h2>Oppgave</h2>
          <ol>
            <li>Lag en HTML-fil med noen paragrafer og tekst.</li>
            <li>Bruk div-elementet for å gruppere noen av paragrafene.</li>
            <li>Bruk span-elementet inne i en paragraf for å markere en del av teksten.</li>
            <li>Legg til CSS for å style div og span gruppene. For eksempel, gi div en grense og gi span en annen tekstfarge.</li>
          </ol>
        </div>

        {/* Bottom Right */}
        <div className="col-md-6">
          {/* Placeholder image */}
          <div className="browser-mockup">
            <img src={Task7ExampleResult} alt="Placeholder" className="img-fluid" />
          </div>
        </div>
      </div>

      {/* Buttons at the bottom */}
      <div className="row mt-5 justify-content-center">
        <div className="col-auto">
          <Link to="/grenser-og-bokser" className="btn btn-secondary">Tilbake</Link>
        </div>
        <div className="col-auto">
          <Link to="/display-property-og-visibility" className="btn btn-primary">Neste</Link>
        </div>
      </div>
    </div>
  );
}

export default Task7CSS;