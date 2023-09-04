import React from 'react';
import { Link } from 'react-router-dom';
import Task3ExampleCode from '../../CSS-images/Task3ExampleCode.JPG';
import Task3ExampleResult from '../../CSS-images/Task3ExampleResult.JPG';
import '../../styles/taskStyles.css';  // Import the CSS file

function Task3CSS() {
  return (
    <div className="container-fluid">
      <h1>Farger og Bakgrunn</h1>

      <div className='content-container'>
        {/* 2x2 Grid */}
        <div className="row">
          {/* Top Left */}
          <div className="col-md-6">
            <h2>Fargeegenskaper i CSS</h2>
            <p>CSS tilbyr flere egenskaper for å endre farger:</p>
            <ol>
              <li><code>color</code>: Styrer tekstfargen i et element.</li>
              <li><code>background-color</code>: Angir bakgrunnsfargen til et element.</li>
            </ol>

            <h2>Måter å spesifisere farger</h2>
            <ol>
              <li>Fargenavn: som "red", "green", "blue".</li>
              <li>Hex-koder: som #FF5733, #33FF57.</li>
              <li>RGB-verdier: som rgb(255, 87, 51).</li>
              <li>RGBA-verdier: som rgba(255, 87, 51, 0.5), hvor den siste verdien er alfa-transparens.</li>
            </ol>
          </div>

          {/* Top Right */}
          <div className="col-md-6">
            {/* Placeholder image */}
            <img src={Task3ExampleCode} alt="Placeholder" className="img-fluid" />
          </div>
        </div>

        <div className="row">
          {/* Bottom Left */}
          <div className="col-md-6">
            <h2>Oppgave:</h2>
            <ol>
              <li>Legg til minst tre paragrafer &lt;p&gt; i HTML-dokumentet ditt.</li>
              <li>Bruk CSS for å endre tekstfargen på de forskjellige paragrafene ved å bruke fargenavn, hex-koder, og RGB-verdier.</li>
              <li>I CSS brukes <code>body</code> for å definere stiler som skal gjelde for hele nettsiden, fra topp til bunn. Hvis du setter egenskaper som <code>background-color</code> innenfor <code>body</code>, vil denne stilen påvirke alle elementer på siden, med mindre de overstyres av mer spesifikke regler. Bruk <code>body</code> for å sette bakgrunnsfargen til nettsiden.</li>
            </ol>
          </div>

          {/* Bottom Right */}
          <div className="col-md-6">
            {/* Placeholder image */}
            <div className="browser-mockup">
              <img src={Task3ExampleResult} alt="Placeholder" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      {/* Buttons at the bottom */}
      <div className="row justify-content-center buttons-bar">
        <div className="col-auto">
          <Link to="/css-selektorer-og-grunnleggende-syntaks" className="btn btn-secondary">Tilbake</Link>
        </div>
        <div className="col-auto">
          <Link to="/tekstformatering" className="btn btn-primary">Neste</Link>
        </div>
      </div>

    </div>
  );
}

export default Task3CSS;