import React from 'react';

function Contact() {
  const yourEmail = "kodehjelpern@gmail.com";

  return (
    <div className="d-flex flex-column justify-content-start align-items-center vh-100" style={{background:  'rgb(238, 238, 238)'}}>
      <h1 className="mb-4 text-center"style={{margin:  '5%'}} >Kontakt utvikleren</h1>
      <p className="mb-4 text-center">{yourEmail}</p>
      <div className="text-center mb-4" style={{ maxWidth: '200px', width: '100%' }}>
        <button 
          type="button" 
          className="btn btn-primary w-100"
          onClick={() => {
            window.location.href = `mailto:${yourEmail}?subject=Kontakt`;
          }}
        >
          Send Epost
        </button>
      </div>
    </div>
  );
}

export default Contact;