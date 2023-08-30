import React from 'react';
import { Link } from 'react-router-dom';
import Task2ExampleCode from '../../HTML-images/Task2ExampleCode.JPG';
import Task2ExampleResult from '../../HTML-images/Task2ExampleResult.JPG';
import '../../styles/browser-mockup.css';

function Task2HTML() {
  return (
    <div className="container-fluid">
      <h1 className='mb-5'>Tekst og Overskrifter</h1>

      {/* 2x2 Grid */}
      <div className="row">
        {/* Top-left cell */}
        <div className="col-md-6">
          <p>I HTML bruker vi ulike typer "tags" for å markere tekst. Dette gir nettleseren beskjed om hvordan teksten skal vises. For eksempel, hvis vi ønsker å lage et nytt avsnitt, kan vi bruke &lt;p&gt;-taggen, som står for "paragraf". Hvis vi ønsker å lage en overskrift, kan vi bruke &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt; osv., der tallet indikerer nivået på overskriften.</p>
          <pre>&lt;p&gt;Dette er en paragraf.&lt;/p&gt;</pre>
          <pre>&lt;h1&gt;Dette er en hovedoverskrift&lt;/h1&gt;</pre>
          <pre>&lt;h2&gt;Dette er en underoverskrift&lt;/h2&gt;</pre>
        </div>

        {/* Top-right cell */}
        <div className="col-md-6">
          <img src={Task2ExampleCode} alt="Placeholder" className="img-fluid"/>
        </div>
      </div>

      <div className="row mt-5">
        {/* Bottom-left cell */}
        <div className="col-md-6">
          <h2>Oppgave</h2>
          <p>1. Lag en enkel HTML-side med en hovedoverskrift som sier "Min første nettside".<br/>
          2. Legg til en paragraf under overskriften som forklarer hva nettsiden handler om.<br/>
          3. Bruk en &lt;h2&gt;-tag for å legge til en underoverskrift som sier "Dagens Dato".<br/>
          4. Avslutt med en paragraf som forteller hvilken dato det er i dag.</p>
        </div>

        {/* Bottom-right cell */}
        <div className="col-md-6">
          <div className="browser-mockup">
            <img src={Task2ExampleResult} alt="Webpage screenshot" className="img-fluid" />
          </div>
        </div>
      </div>

      {/* Buttons at the bottom */}
      <div className="row mt-5 justify-content-center">
        <div className="col-auto">
          <Link to="/html-dokumentets-grunnstruktur" className="btn btn-secondary">Tilbake</Link>
        </div>
        <div className="col-auto">
          <Link to="/lister-og-lenker" className="btn btn-primary">Neste</Link>
        </div>
      </div>
    </div>
  );
}

export default Task2HTML;