import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';

function Sidebar() {
  const [showGuides, setShowGuides] = useState(false);

  const htmlTasks = [
    { id: 1, name: 'HTML-dokumentets grunnstruktur' },
    { id: 2, name: 'Tekst og Overskrifter' },
    { id: 3, name: 'Lister og Lenker' },
    { id: 4, name: 'Bilder og Attributter' },
    { id: 5, name: 'Containere i HTML' },
    { id: 6, name: 'Håndtering av Brukerinput' },
    { id: 7, name: 'Utforsk Flere HTML-Tags' }
    // You can add more HTML tasks here
  ];

  const cssTasks = [
    { id: 1, name: 'Introduksjon til CSS' },
    { id: 2, name: 'CSS Selektorer og Grunnleggende Syntaks' },
    { id: 3, name: 'Farger og Bakgrunn' },
    { id: 4, name: 'Tekstformatering' },
    { id: 5, name: 'Margin og Padding' },
    { id: 6, name: 'Grenser og Bokser' },
    { id: 7, name: 'Layout med div og span' },
    { id: 8, name: 'Display Property og Visibility' },
    { id: 9, name: 'Hover og Pseudoklasser' },
    { id: 10, name: 'Positioning og Z-index' },
    { id: 11, name: 'Transisjoner og Animasjoner' },
    { id: 12, name: 'Flexbox og Grid' },
    { id: 13, name: 'Responsiv Design' }
    // You can add more CSS tasks here
  ];

  const extraTasks = [
    { id: 1, name: 'Ekstra Oppgave 1' },
    { id: 2, name: 'Ekstra Oppgave 2' },
    { id: 3, name: 'Ekstra Oppgave 3' },
    { id: 4, name: 'Ekstra Oppgave 4' },
    { id: 5, name: 'Ekstra Oppgave 5' }
    // You can add more CSS tasks here
  ];

  const urlFriendlyName = (name) => {
    return name.replace(/\s+/g, '-').toLowerCase();
  };

  const toggleGuides = () => {
    setShowGuides(!showGuides);
  };

  return (
    <div className="col-8 border-right overflow-auto" id="sidebar-wrapper">
      {showGuides ? (
        <div className="list-group list-group-flush overflow-auto">
          <button onClick={toggleGuides} className="btn btn-link text-white">
            &larr; Back
          </button>
          <h1 className="text-white p-1">HTML</h1>
          {htmlTasks.map((task) => (
            <Link
              key={task.id}
              to={`/${urlFriendlyName(task.name)}`}
              className="list-group-item list-group-item-action bg-transparent"
            >
              {task.name}
            </Link>
          ))}
          <h1 className="text-white p-1">CSS</h1>
          {cssTasks.map((task) => (
            <Link
              key={task.id}
              to={`/${urlFriendlyName(task.name)}`}
              className="list-group-item list-group-item-action bg-transparent"
            >
              {task.name}
            </Link>
          ))}
          <h1 className="text-white p-1">Ekstra Oppgaver</h1>
          {extraTasks.map((task) => (
            <Link
              key={task.id}
              to={`/${urlFriendlyName(task.name)}`}
              className="list-group-item list-group-item-action bg-transparent"
            >
              {task.name}
            </Link>
          ))}
        </div>
      ) : (
        <div className="list-group list-group-flush overflow-auto">
          <h1 className="text-white p-1">Kodehjelpern</h1>
          <hr className="bg-white" />
          <h2 className="text-white p-1">Guider</h2>
          <button onClick={toggleGuides} className="btn btn-secondary list-group-item list-group-item-action">
            HTML og CSS
          </button>
          <hr className="bg-white" />
          <button className="btn btn-secondary list-group-item list-group-item-action disabled">
            Oppgave Generator BETA
          </button>
          <button className="btn btn-secondary list-group-item list-group-item-action">
            Kontakt
          </button>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
