import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/sidebar.css';

function Sidebar() {
  const [showGuides, setShowGuides] = useState(false);
  const location = useLocation();

  const htmlTasks = [
    { id: 1, name: 'HTML-dokumentets grunnstruktur' },
    { id: 2, name: 'Tekst og Overskrifter' },
    { id: 3, name: 'Lister og Lenker' },
    { id: 4, name: 'Bilder og Attributter' },
    { id: 5, name: 'Containere i HTML' },
    { id: 6, name: 'Brukerinput' },
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
    <div className="overflow-auto" id="sidebar-wrapper">
      {showGuides ? (
        <div className="list-group list-group-flush overflow-auto">
          <button onClick={toggleGuides} className="btn btn-link text-white">
            &larr; Tilbake
          </button>
          <h2 className="text-white p-3">HTML</h2>
          {htmlTasks.map((task) => (
            <Link
              key={task.id}
              to={`/${urlFriendlyName(task.name)}`}
              className={`list-group-item list-group-item-action ${location.pathname === `/${urlFriendlyName(task.name)}` ? 'active-link' : ''}`}
            >
              {task.name}
            </Link>
          ))}
          <h2 className="text-white p-3">CSS</h2>
          {cssTasks.map((task) => (
            <Link
              key={task.id}
              to={`/${urlFriendlyName(task.name)}`}
              className={`list-group-item list-group-item-action ${location.pathname === `/${urlFriendlyName(task.name)}` ? 'active-link' : ''}`}
            >
              {task.name}
            </Link>
          ))}
          <h2 className="text-white p-3">Ekstra Oppgaver</h2>
          {extraTasks.map((task) => (
            <Link
              key={task.id}
              to={`/${urlFriendlyName(task.name)}`}
              className={`list-group-item list-group-item-action ${location.pathname === `/${urlFriendlyName(task.name)}` ? 'active-link' : ''}`}
            >
              {task.name}
            </Link>
          ))}
        </div>
      ) : (
        <div className="list-group list-group-flush overflow-auto">
          <h3 className="text-white p-2">Kodehjelpern</h3>
          <hr className="bg-white" />
          
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
