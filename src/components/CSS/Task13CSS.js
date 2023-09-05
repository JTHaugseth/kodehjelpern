import React from 'react';
import { Link } from 'react-router-dom';
import Task13ExampleCode from '../../CSS-images/Task13ExampleCode.JPG';
import Task13ExampleResult from '../../CSS-images/Task13ExampleResult.JPG';
import '../../styles/taskStyles.css';  // Importing the CSS file

function Task13CSS() {
  return (
    <div className="container-fluid">
      <h1 className='mb-5'>Responsiv Design</h1>

      <div className='content-container'>
        {/* 2x2 Grid */}
        <div className="row">
          {/* Top Left */}
          <div className="col-md-6">
            <p>Responsiv design sørger for at webinnholdet tilpasses ulike skjermstørrelser og enheter. Fra stasjonære datamaskiner til nettbrett og mobiltelefoner, skal en nettside med responsiv design se bra ut og være brukervennlig på alle enheter.</p>
            <p>Dette oppnås ved hjelp av ulike teknikker som media queries, fleksible grid-layout, og fleksible bilder.</p>
            <p>Media Queries: Tillater deg å sette spesifikke CSS-stiler for bestemte skjermstørrelser eller enheter.</p>
            <p>Fleksible Grids: Bruk av prosentandel i stedet for faste piksler for layoutdimensjoner, slik at innholdet kan tilpasse seg ulike skjermstørrelser.</p>
            <p>Fleksible Bilder: Betyr at bildene skal skalere og tilpasse seg containerne de er i, i stedet for å ha faste dimensjoner.</p>
            <p>Det er viktig å teste hvordan webdesignet ditt tilpasser seg ulike skjermstørrelser. Det finnes flere metoder for dette, men en av de mest tilgjengelige og enkle måtene er å bruke utviklerverktøyene i nettleseren din.</p>
          </div>

          {/* Top Right */}
          <div className="col-md-6">
            <img src={Task13ExampleCode} alt="Example Code" className="img-fluid" />
          </div>
        </div>

        <div className="row">
          {/* Bottom Left */}
          <div className="col-md-6">
            <h2>Oppgave</h2>
            <ol>
              <li>Lag et HTML-dokument med en div som inneholder både tekst og bilder.</li>
              <li>Bruk CSS for å style denne div-en med en fast bredde og høyde.</li>
              <li>Legg til en media query i CSS som endrer stilene når skjermstørrelsen er under 600px.</li>
            </ol>
          </div>

          {/* Bottom Right */}
          <div className="col-md-6">
            <div className="browser-mockup">
              <img src={Task13ExampleResult} alt="Example Result" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      {/* Buttons at the bottom */}
      <div className="row justify-content-center buttons-bar">
        <div className="col-auto">
          <Link to="/flexbox-og-grid" className="btn btn-secondary">Tilbake</Link>
        </div>
        <div className="col-auto">
          <Link to="/div-bot" className="btn btn-primary">Prøv Div-Bot (Beta)</Link>
        </div>
      </div>
    </div>
  );
}

export default Task13CSS;