import React from 'react';
import { Link } from 'react-router-dom';
import Task8ExampleCode from '../../CSS-images/Task8ExampleCode.JPG';
import Task8ExampleResult from '../../CSS-images/Task8ExampleResult.JPG';
import '../../styles/taskStyles.css';  // Import the CSS file

function Task8CSS() {
  return (
    <div className="container-fluid">
      <h1>Display-Property og Visibility</h1>

      <div className='content-container'>
        {/* 2x2 Grid */}
        <div className="row">
          {/* Top Left */}
          <div className="col-md-6">
            <p>display-egenskapen bestemmer hvordan et element skal vises i forhold til layout og formatering.</p>
            <p>
              <strong>block:</strong> Elementet tar opp hele bredden og starter på en ny linje. <br />
              <strong>inline:</strong> Elementet tar bare opp så mye plass som det trenger, og blir ikke brutt til en ny linje. <br />
              <strong>none:</strong> Elementet vil ikke bli vist, og tar ingen plass (som om det ikke finnes).
            </p>
            <p>visibility-egenskapen bestemmer om et element skal være synlig eller ikke.</p>
            <p>
              <strong>visible:</strong> Elementet er synlig. <br />
              <strong>hidden:</strong> Elementet er usynlig, men tar opp plass.
            </p>
          </div>

          {/* Top Right */}
          <div className="col-md-6">
            {/* Placeholder image */}
            <img src={Task8ExampleCode} alt="Placeholder" className="img-fluid" />
          </div>
        </div>

        <div className="row">
          {/* Bottom Left */}
          <div className="col-md-6">
            <h2>Oppgave</h2>
            <ol>
              <li>Lag et HTML-dokument med tre div-elementer.</li>
              <li>Det første elementet skal ha display: block; og ha en blå bakgrunnsfarge.</li>
              <li>Det andre elementet skal ha display: inline; og ha en grønn bakgrunnsfarge.</li>
              <li>Det tredje elementet skal ha visibility: hidden; men ha en rød bakgrunnsfarge.</li>
            </ol>
          </div>

          {/* Bottom Right */}
          <div className="col-md-6">
            {/* Placeholder image */}
            <div className="browser-mockup">
              <img src={Task8ExampleResult} alt="Placeholder" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      {/* Buttons at the bottom */}
      <div className="row justify-content-center buttons-bar">
        <div className="col-auto">
          <Link to="/layout-med-div-og-span" className="btn btn-secondary">Tilbake</Link>
        </div>
        <div className="col-auto">
          <Link to="/hover-og-pseudoklasser" className="btn btn-primary">Neste</Link>
        </div>
      </div>
    </div>
  );
}

export default Task8CSS;