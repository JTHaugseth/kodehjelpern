import React from 'react';
import { Link } from 'react-router-dom';
import Task11ExampleCode from '../../CSS-images/Task11ExampleCode.JPG';
import Task11ExampleVideo from '../../CSS-images/Task11ExampleVideo.mp4';
import '../../styles/taskStyles.css';  // Import the CSS file

function Task11CSS() {
  return (
    <div className="container-fluid">
      <h1 className='mb-5'>Transisjoner og Animasjoner</h1>

      <div className='content-container'>
        {/* 2x2 Grid */}
        <div className="row">
          {/* Top Left */}
          <div className="col-md-6">
            <p>Transisjoner i CSS lar deg endre egenskaper jevnt over en bestemt tidsperiode. Dette gjør at du kan lage jevn animasjon ved å endre fra en CSS-stilsetting til en annen.</p>
            <p>Viktige egenskaper inkluderer:</p>
            <ul>
              <li>transition-property</li>
              <li>transition-duration</li>
              <li>transition-timing-function</li>
              <li>transition-delay</li>
            </ul>
            <p>Med CSS-animasjoner kan du lage komplekse animasjoner ved å bruke @keyframes-regelen for å lage animasjoner som består av flere trinn.</p>
            <p>Viktige egenskaper:</p>
            <ul>
              <li>animation-name</li>
              <li>animation-duration</li>
              <li>animation-timing-function</li>
              <li>animation-delay</li>
              <li>animation-iteration-count</li>
            </ul>
          </div>

          {/* Top Right */}
          <div className="col-md-6">
            {/* Placeholder image */}
            <img src={Task11ExampleCode} alt="Example Code" className="img-fluid" />
          </div>
        </div>

        <div className="row">
          {/* Bottom Left */}
          <div className="col-md-6">
            <h2>Oppgave</h2>
            <ol>
              <li>Lag en div med en enkel transisjon på hover. For eksempel, div'en kan vokse i størrelse når man holder musepekeren over den.</li>
              <li>Lag en annen div med en animasjon som endrer bakgrunnsfargen over tid.</li>
            </ol>
          </div>

          {/* Bottom Right */}
          <div className="col-md-6">
            {/* Embedding MP4 video */}
            <video controls className="img-fluid">
              <source src={Task11ExampleVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Buttons at the bottom */}
      <div className="row justify-content-center buttons-bar">
        <div className="col-auto">
          <Link to="/positioning-og-z-index" className="btn btn-secondary">Tilbake</Link>
        </div>
        <div className="col-auto">
          <Link to="/flexbox-og-grid" className="btn btn-primary">Neste</Link>
        </div>
      </div>
    </div>
  );
}

export default Task11CSS;