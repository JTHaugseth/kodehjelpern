import React from 'react';
import { Link } from 'react-router-dom';
import Task2ExampleCode from '../../CSS-images/Task2ExampleCode.JPG';
import Task2ExampleResult from '../../CSS-images/Task2ExampleResult.JPG';

function Task2CSS() {
  return (
    <div className="container-fluid">
      <h1 className='mb-5'>CSS Selektorer og Grunnleggende Syntaks</h1>

      {/* 2x2 Grid */}
      <div className="row mb-4">

        {/* Top Left */}
        <div className="col-md-6">
          <h2>Hva er en CSS Selektor?</h2>
          <p>En CSS-selektor er en "regel" som bestemmer hvilke HTML-elementer som skal styles. Selektoren brukes til å "finne" HTML-elementer basert på deres tag-navn, id, klasse, attributter eller andre egenskaper.</p>
          <p>Typer av CSS Selektorer:</p>
          <ol>
            <li>Element-selektor: Styler alle HTML-elementer av en bestemt type.</li>
            <li>ID-selektor: Styler det HTML-elementet som har en spesifikk id.</li>
            <li>Klasse-selektor: Styler alle HTML-elementer som har en spesifikk klasse.</li>
          </ol>

          <h2>Grunnleggende CSS Syntaks:</h2>
          <p>En CSS-regel har to hoveddeler: en selektor og et regelsett. Regelsettet er omgitt av krøllparenteser {} og inneholder ett eller flere par av egenskaper og verdier, separert med kolon : og avsluttet med semikolon ;.</p>
        </div>

        {/* Top Right */}
        <div className="col-md-6">
          {/* Placeholder image */}
          <img src={Task2ExampleCode} alt="Placeholder" className="img-fluid" />
        </div>

        {/* Bottom Left */}
        <div className="col-md-6">
          <h2>Oppgave:</h2>
          <ol>
            <li>Opprett et HTML-dokument og inkluder minst tre forskjellige typer HTML-elementer (for eksempel &lt;p&gt;, &lt;h1&gt;, &lt;div&gt;).</li>
            <li>Opprett en CSS-fil og lenk den til HTML-dokumentet ditt. I CSS-filen, bruk en element-selektor for å endre tekstfargen på alle &lt;p&gt;-elementer til grønn.</li>
            <li>Legg til en id-selektor som endrer font-størrelsen på et spesifikt element.</li>
            <li>Bruk en klasse-selektor for å sette bakgrunnsfargen på flere elementer til rosa.</li>
          </ol>
        </div>

        {/* Bottom Right */}
        <div className="col-md-6">
          {/* Placeholder image */}
          <div className="browser-mockup">
            <img src={Task2ExampleResult} alt="Placeholder" className="img-fluid" />
          </div>
        </div>

      </div>

      {/* Buttons at the bottom */}
      <div className="row mt-5 justify-content-center">
        <div className="col-auto">
          <Link to="/introduksjon-til-css" className="btn btn-secondary">Tilbake</Link>
        </div>
        <div className="col-auto">
          <Link to="/farger-og-bakgrunn" className="btn btn-primary">Neste</Link>
        </div>
      </div>

    </div>
  );
}

export default Task2CSS;