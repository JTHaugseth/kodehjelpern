import React from 'react';
import { Link } from 'react-router-dom';
import Task10ExampleCode from '../../CSS-images/Task10ExampleCode.JPG';
import Task10ExampleResult from '../../CSS-images/Task10ExampleResult.JPG';


function Task10CSS() {
  return (
    <div className="container-fluid">
      <h1 className='mb-5'>Positioning og Z-Index</h1>

      {/* 2x2 Grid */}
      <div className="row">

        {/* Top Left */}
        <div className="col-md-6">
          <p>Position-egenskapen i CSS styrer hvordan et element er plassert i layouten. De vanligste verdiene er static, relative, absolute, og fixed.</p>
          <p>z-index brukes til å kontrollere stablingen av elementer; et element med en høyere z-index vil vises over et element med en lavere z-index når de overlapper.</p>
          {/* Definitions */}
          <p>
            <strong>static:</strong> Dette er standardverdien. Elementet følger den normale flyten i dokumentet. <br />
            <strong>relative:</strong> Elementet plasseres i forhold til sin opprinnelige plassering i dokumentflyten. Du kan bruke top, right, bottom, og left for å flytte det fra den opprinnelige posisjonen.<br />
            <strong>absolute:</strong> Elementet plasseres i forhold til nærmeste forfar (parent) med en position annet enn static. Hvis det ikke finnes en slik, er det i forhold til {'<html>'}.<br />
            <strong>fixed:</strong> Elementet plasseres i forhold til nettleservinduet, og det blir ikke påvirket av scrolling.<br />
            <strong>z-index:</strong> z-index er et heltall (integer). Elementer med høyere z-index vil stable seg over elementer med lavere z-index.
          </p>
        </div>

        {/* Top Right */}
        <div className="col-md-6">
          {/* Placeholder image */}
          <img src={Task10ExampleCode} alt="Placeholder" className="img-fluid" />
        </div>

        {/* Bottom Left */}
        <div className="col-md-6">
          <h2>Oppgave</h2>
          <ol>
            <li>Lag en HTML-side med minst tre div-elementer.</li>
            <li>Bruk position: static; på det første elementet. Observer at endringer i top, right, bottom, og left ikke påvirker dette elementet.</li>
            <li>Bruk position: relative; på det andre elementet og bruk top og left for å flytte det fra sin opprinnelige posisjon.</li>
            <li>Bruk position: absolute; på det tredje elementet. Plasser det innenfor det andre elementet (som er relative) og bruk top og left for å posisjonere det.</li>
            <li>Bruk z-index på det tredje elementet for å få det til å vises over det andre.</li>
          </ol>
        </div>

        {/* Bottom Right */}
        <div className="col-md-6">
          {/* Placeholder image */}
          <div className="browser-mockup">
            <img src={Task10ExampleResult} alt="Placeholder" className="img-fluid" />
          </div>
        </div>

      </div>

      {/* Buttons at the bottom */}
      <div className="row mt-5 justify-content-center">
        <div className="col-auto">
          <Link to="/hover-og-pseudoklasser" className="btn btn-secondary">Tilbake</Link>
        </div>
        <div className="col-auto">
          <Link to="/display-property-og-visibility" className="btn btn-primary">Neste</Link>
        </div>
      </div>
    </div>
  );
}

export default Task10CSS;