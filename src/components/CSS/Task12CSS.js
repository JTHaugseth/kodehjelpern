import React from 'react';
import { Link } from 'react-router-dom';
import Task12ExampleCode from '../../CSS-images/Task12ExampleCode.JPG';
import Task12ExampleResult from '../../CSS-images/Task12ExampleResult.JPG';

function Task12CSS() {
  return (
    <div className="container-fluid">
      <h1 className='mb-5'>Flexbox og Grid</h1>

      {/* 2x2 Grid */}
      <div className="row">

        {/* Top Left */}
        <div className="col-md-6">
          <p>Disse to layout-teknikkene er avanserte og gir deg enorm kontroll over hvordan elementer skal posisjoneres og skaleres i et design.</p>

          <h3>Flexbox</h3>
          <p>Flexbox, eller den fleksible boksen, er en moderne layoutmodell i CSS. Her er noen viktige egenskaper:</p>
          <ul>
            <li><strong>display:</strong> flex; eller display: inline-flex;</li>
            <li><strong>justify-content:</strong> Horisontal justering</li>
            <li><strong>align-items:</strong> Vertikal justering</li>
          </ul>

          <h3>Grid</h3>
          <p>CSS Grid gir en to-dimensjonal grid-basert layoutsystem. Viktige egenskaper inkluderer:</p>
          <ul>
            <li><strong>display:</strong> grid;</li>
            <li><strong>grid-template-columns</strong> og <strong>grid-template-rows</strong></li>
            <li><strong>grid-gap</strong></li>
          </ul>
        </div>

        {/* Top Right */}
        <div className="col-md-6">
          {/* Placeholder image */}
          <img src={Task12ExampleCode} alt="Placeholder" className="img-fluid" />
        </div>

        {/* Bottom Left */}
        <div className="col-md-6">
          <h2>Oppgave</h2>
          <p>Gå til <a href="https://flexboxfroggy.com/" target="_blank" rel="noopener noreferrer">Flexbox Froggy</a> for å lære deg mer om hvordan flexbox fungerer.</p>
          <p>Vil du lære mer om grid har du også <a href="https://codepip.com/games/grid-garden/" target="_blank" rel="noopener noreferrer">Grid Garden</a>.</p>
        </div>

        {/* Bottom Right */}
        <div className="col-md-6">
          {/* Placeholder image */}
          <img src={Task12ExampleResult} alt="Placeholder" className="img-fluid" />
        </div>

      </div>

      {/* Buttons at the bottom */}
      <div className="row mt-5 justify-content-center">
        <div className="col-auto">
          <Link to="/transisjoner-og-animasjoner" className="btn btn-secondary">Tilbake</Link>
        </div>
        <div className="col-auto">
          <Link to="/responsiv-design" className="btn btn-primary">Neste</Link>
        </div>
      </div>
    </div>
  );
}

export default Task12CSS;