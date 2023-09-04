import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/taskStyles.css';

function Task7HTML() {
  return (
    <div className="container-fluid">
      {/* Title */}
      <h1>Utforsk Flere HTML Tags</h1>

      <div className='content-container'>
        {/* 1x1 Grid */}
        <div className="row">

          {/* Left Side */}
          <div className="col-md-6">
            <p>
              <strong>&lt;table&gt;:</strong> Brukes for å lage tabeller.<br />
              <strong>&lt;th&gt; og &lt;td&gt;:</strong> Brukes i tabeller for å spesifisere tabellhoder og tabellceller.<br />
              <strong>&lt;blockquote&gt;:</strong> For lengre sitater fra andre kilder.<br />
              <strong>&lt;hr&gt;:</strong> Skaper en horisontal linje, ofte brukt som en tematisk pause i en side.<br />
              <strong>&lt;abbr&gt;:</strong> Gjør det mulig å gi en forklaring på forkortelser.<br />
              <strong>&lt;cite&gt;:</strong> Brukes for å angi kilden til et sitat.<br />
              <strong>&lt;code&gt;:</strong> Viser en enkelt linje med kode.<br />
              <strong>&lt;strong&gt; og &lt;em&gt;:</strong> For å vektlegge tekst. &lt;strong&gt; er sterkere vektlegging mens &lt;em&gt; er mildere.<br />
              <strong>&lt;s&gt;:</strong> Streker gjennom tekst, som for eksempel utgåtte priser.<br />
              <strong>&lt;q&gt;:</strong> Brukes for korte sitater.<br />
              <strong>&lt;pre&gt;:</strong> Bevarer både mellomrom og linjeskift, noe som er nyttig for kode.<br />
              <strong>&lt;figcaption&gt; og &lt;figure&gt;:</strong> Brukes for å legge til bildetekst til bilder.<br />
            </p>
          </div>

          {/* Right Side */}
          <div className="col-md-6">
            <p>
              <strong>&lt;nav&gt;:</strong> Definerer en navigasjonslenke-seksjon.<br />
              <strong>&lt;header&gt;:</strong> Definerer en header for et dokument eller en seksjon.<br />
              <strong>&lt;footer&gt;:</strong> Definerer en footer for et dokument eller en seksjon.<br />
              <strong>&lt;main&gt;:</strong> Spesifiserer hovedinnholdet i et dokument.<br />
              <strong>&lt;aside&gt;:</strong> Definerer innhold som er adskilt fra innholdet rundt det og som kan betraktes som uavhengig av det innholdet det er plassert i.<br />
              <strong>&lt;article&gt;:</strong> Spesifiserer uavhengig, selvstendig innhold.<br />
              <strong>&lt;section&gt;:</strong> Definerer en seksjon i et dokument.<br />
              <strong>&lt;time&gt;:</strong> Definerer en tid eller en tidsperiode.<br />
              <strong>&lt;mark&gt;:</strong> Markerer tekst som oppmerksomhet eller vektlegging.<br />
              <strong>&lt;small&gt;:</strong> Gjør teksten mindre for fintrykk og andre småtekster.<br />
              <strong>&lt;sub&gt; og &lt;sup&gt;:</strong> Definerer subskript og superskript tekst.<br />
            </p>
          </div>

        </div>

        {/* Footer text */}
        <div className="row">
          <div className="col-12">
            <p>Hver av disse har sin egen spesielle funksjon, og å vite hvordan man bruker dem kan gi deg mer kontroll og fleksibilitet når du lager nettsider. For å lære mer om disse, og fler, kan du besøke ressurser som W3Schools eller Mozilla Developer Network (MDN).</p>
            <p>Prøv å bruk noen av disse i dine egne prosjekter for å se hvordan de fungerer i praksis!</p>
            <p>Nå har du det grunnleggende for å bevege deg inn i CSS!</p>
          </div>
        </div>
      </div>

      {/* Buttons at the bottom */}
      <div className="row justify-content-center buttons-bar">
        <div className="col-auto">
          <Link to="/brukerinput" className="btn btn-secondary">Tilbake</Link>
        </div>
        <div className="col-auto">
          <Link to="/introduksjon-til-css" className="btn btn-primary">Gå videre til CSS</Link>
        </div>
      </div>

    </div>
  );
}

export default Task7HTML;