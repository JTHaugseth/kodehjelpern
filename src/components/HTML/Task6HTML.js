import React from 'react';
import { Link } from 'react-router-dom';
import Task6ExampleCode from '../../images/Task6ExampleCode.JPG';  // Import placeholder images
import Task6ExampleResult from '../../images/Task6ExampleResult.JPG';  // Import placeholder images

function Task6HTML() {
  return (
    <div className="container-fluid">
      <h1 className='mb-5'>Håndtering av Brukerinput</h1>

      {/* 2x2 Grid */}
      <div className="row mb-4">
        
        {/* Top Left Column */}
        <div className="col-md-6">
          <p>&lt;label&gt; i HTML brukes for å gi en beskrivende tekst til et inndatafelt, som et tekstfelt eller en avmerkingsboks. Dette gjør det enklere å forstå hva feltet skal brukes til, og man kan også klikke på teksten for å fokusere på feltet.</p>
          <p>Tekst Input: Det mest grunnleggende input-elementet er tekstfeltet, som er definert med &lt;input type="text"&gt;</p>
          <p>Passord Input: For passord bruker vi &lt;input type="password"&gt; slik at teksten blir maskert.</p>
          <p>Radio Buttons og Checkboxes: Brukes ofte for valgmuligheter hvor brukeren skal velge ett eller flere alternativ.</p>
          <p>Dropdowns: For en liste med alternativer, kan vi bruke &lt;select&gt; og &lt;option&gt;</p>
          <p>Knapper: For å legge til en knapp som brukeren kan klikke på, kan du enten bruke &lt;input type="button"&gt; eller &lt;button&gt; taggen.</p>
        </div>

        {/* Top Right Column */}
        <div className="col-md-6">
          {/* Placeholder Image */}
          <img src={Task6ExampleCode} alt="Placeholder" className="img-fluid"/>
        </div>

      </div>

      <div className="row">
        
        {/* Bottom Left Column */}
        <div className="col-md-6">
          <h2>Oppgave</h2>
          <p>Lag et enkelt skjema som inkluderer tekst input, passord input, radio buttons, checkboxes, button, og en dropdown. Gi hvert input-felt en relevant &lt;label&gt;</p>
        </div>

        {/* Bottom Right Column */}
        <div className="col-md-6">
          {/* Placeholder Image */}
          <div className="browser-mockup">
            <img src={Task6ExampleResult} alt="Placeholder" className="img-fluid"/>
          </div>
        </div>

      </div>

      {/* Buttons at the bottom */}
      <div className="row mt-5 justify-content-center">
        <div className="col-auto">
          <Link to="/containere-i-html" className="btn btn-secondary">Tilbake</Link>
        </div>
        <div className="col-auto">
          <Link to="/utforsk-flere-html-tags" className="btn btn-primary">Neste</Link>
        </div>
      </div>

    </div>
  );
}

export default Task6HTML;