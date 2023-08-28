import React from 'react';
import { Link } from 'react-router-dom';
import ImageHTML from '../../images/HTML.JPG';

function Task1HTML() {
  return (
    <div className="container-fluid">
      {/* Title */}
      <h1 className='mb-5'>HTML-dokumentets grunnstruktur</h1>
      
      {/* 1x1 Grid */}
      <div className="row">
        {/* Text Column */}
        <div className="col-md-6">
          <p><strong>&lt;!DOCTYPE html&gt;:</strong> Dette er dokumenttypedefinisjonen og forteller nettleseren at dokumentet er skrevet i HTML5. Det bør alltid være den første linjen i HTML-dokumentet ditt.</p>
          
          <p><strong>&lt;html lang="en"&gt;:</strong> Dette elementet omslutter alle innholdselementene på nettsiden din. lang="en" attributtet forteller nettleseren at innholdet er på engelsk, noe som kan være nyttig for skjermlesere og søkemotorer.</p>
          
          <p><strong>&lt;head&gt;:</strong> Dette elementet inneholder metainformasjon om dokumentet og andre ressurser som stilark eller skripter som nettsiden bruker. Innholdet i &lt;head&gt; vises ikke på selve nettsiden.</p>
          
          <p><strong>&lt;meta charset="UTF-8"&gt;:</strong> Dette angir tegnkodingen for dokumentet, som er viktig for korrekt tekstvisning.</p>
          
          <p><strong>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;:</strong> Dette hjelper med å gjøre nettsiden responsiv, slik at den ser bra ut på forskjellige enheter.</p>
          
          <p><strong>&lt;title&gt;Document&lt;/title&gt;:</strong> Dette setter tittelen på nettsiden, som vises i nettleserens tittellinje eller fanekort.</p>
          
          <p><strong>&lt;body&gt;:</strong> Dette er hoveddelen av HTML-dokumentet og inneholder alt innholdet som skal vises på nettsiden, som tekst, bilder, lenker, etc.</p>
        </div>
        
        {/* Image Column */}
        <div className="col-md-6">
          <img src={ImageHTML} alt="Placeholder" className="img-fluid"/>
        </div>
      </div>

      {/* Buttons at the bottom */}
      <div className="row mt-5 justify-content-center">
        <div className="col-auto">
          <Link to="/" className="btn btn-secondary">Tilbake</Link>
        </div>
        <div className="col-auto">
          <Link to="/tekst-og-overskrifter" className="btn btn-primary">Neste</Link>
        </div>
      </div>
    </div>
  );
}

export default Task1HTML;