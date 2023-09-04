import React from 'react';
import { Link } from 'react-router-dom';
import Task9ExampleCode from '../../CSS-images/Task9ExampleCode.JPG';
import Task9ExampleResult from '../../CSS-images/Task9ExampleResult.JPG';
import '../../styles/taskStyles.css';  // Import the CSS file

function Task9CSS() {
  return (
    <div className="container-fluid">
      <h1>Hover og Pseudoklasser</h1>

      <div className='content-container'>
        {/* 2x2 Grid */}
        <div className="row">
          {/* Top Left */}
          <div className="col-md-6">
            <p>Pseudoklasser i CSS gir deg muligheten til å definere spesielle tilstander for HTML-elementer som ikke kan fanges opp av enkle selektorer.</p>
            <p>For eksempel lar :hover pseudoklassen deg endre stil på et element når musepekeren er over det. Dette kan gjøre brukeropplevelsen mer interaktiv og dynamisk.</p>
            <p>Andre eksempler på pseudoklasser inkluderer :active, :visited, og :focus, som endrer stilen på elementer når de klikkes på, har blitt besøkt eller er i fokus.</p>
          </div>

          {/* Top Right */}
          <div className="col-md-6">
            {/* Placeholder image */}
            <img src={Task9ExampleCode} alt="Placeholder" className="img-fluid" />
          </div>
        </div>

        <div className="row">
          {/* Bottom Left */}
          <div className="col-md-6">
            <h2>Oppgave</h2>
            <ol>
              <li>Lag en HTML-fil med flere paragrafer og lenker.</li>
              <li>Bruk CSS til å endre farge på paragrafene når musepekeren er over dem. Du kan bruke :hover for dette.</li>
              <li>Bruk pseudoklassen :active til å endre farge på lenkene når de er klikket på.</li>
              <li>Prøv å bruke :focus på et input-felt, slik at det endrer bakgrunnsfarge når det er i fokus.</li>
              <li>Eksperimenter med flere pseudoklasser og se hvordan de fungerer.</li>
            </ol>
          </div>

          {/* Bottom Right */}
          <div className="col-md-6">
            {/* Placeholder image */}
            <div className="browser-mockup">
              <img src={Task9ExampleResult} alt="Placeholder" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      {/* Buttons at the bottom */}
      <div className="row justify-content-center buttons-bar">
        <div className="col-auto">
          <Link to="/display-property-og-visibility" className="btn btn-secondary">Tilbake</Link>
        </div>
        <div className="col-auto">
          <Link to="/positioning-og-z-index" className="btn btn-primary">Neste</Link>
        </div>
      </div>
    </div>
  );
}

export default Task9CSS;