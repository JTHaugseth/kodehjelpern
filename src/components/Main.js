import React from 'react';
import { Link } from 'react-router-dom';
import LiveServer from '../HTML-images/LiveServer.JPG';
import LiveShare from '../HTML-images/LiveShare.JPG';

function Main() {
  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-start position-relative" style={{ minHeight: '100vh', overflowY: 'auto' }}>
      <div className="text-center"style={{ marginTop: '5%' }}>
        <h1 className="mb-4">Velkommen til Kodehjelpern!</h1>
        <h1>Test 1</h1>
        <p className="mb-5">
          Hos kodehjelpern lærer du det grunnleggende i HTML og CSS. Trykk START nederst for å begynne!
        </p>
        <h2 className="mb-5">Anbefalninger</h2>
        <h5 className="mb-2">Verktøy: Visual Studio Code</h5>
        <h5 className="mb-2">File -{">"} Auto Save</h5>
        <h6 className="mb-5">Dette vil automatisk lagre dokumentet ditt for hver endring</h6>
        
        <div className="row mb-3">
          <div className="col">
            Last ned Live Server for å se endringene dine i nettleseren i sanntid
          </div>
          <div className="col">
            <img src={LiveServer} alt="Live Server Plugin" className="img-fluid" />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col">
            Last ned Live Share for å samarbeide med andre på prosjektet
          </div>
          <div className="col">
            <img src={LiveShare} alt="Live Share Plugin" className="img-fluid" />
          </div>
        </div>
        <p className="mb-4">
          Husk å ta pauser! Man kan ikke lære alt på en dag.
        </p>
        <div className="mb-3">
          <Link to="/html-dokumentets-grunnstruktur" className="btn btn-primary">START</Link>
        </div>
      </div>
    </div>
  );
}

export default Main;