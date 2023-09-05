import React, { useState } from 'react';
import '../styles/divBot.css';

function DivBot() {
  const [response, setResponse] = useState(null);
  const [difficulty, setDifficulty] = useState('Veldig enkel');
  const [loading, setLoading] = useState(false);

  const callApi = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://localhost:7129/api/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          Message: `Du er implementert som en AI-bot på en opplæringsside i HTML og CSS for nye studenter. Du har vanskelighetsgradene: "Veldig enkel", "Enkel", "Medium", "Litt vanskelig" og "Vanskelig". Følg desse reglene:
          - Responsivt design, flexbox og grid hører kun til på "Vanskelig". 
          - Animasjoner starter enkelt fra "Medium", og blir vanskeligere på "Litt vanskelig" og "Vanskelig". 
          - Du skal IKKE gi kodeforslag, eller løsningsforslag. 
          - Du skal lage en punktliste på hva de skal gjøre i hver oppgave.
          - Du skal IKKE gi responser som likner på dette: "Husk å understreke at dette er en veldig enkel oppgave og at de kan be om hjelp hvis de trenger det!".
          - De kan IKKE spørre deg om mer hjelp etter at de har fått en oppgave. Anbefal heller at de spør læreren sin.
          Beskjeden du får nå vil avgjøre hvor vanskelig oppgaven skal være. Beskjeden er: Kan du lage en ${difficulty.toLowerCase()} HTML og CSS oppgave?`
        })
      });
      const data = await res.json();
      setResponse(data.choices[0].message.content);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid vh-100 overflow-auto">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <h1 className="text-center my-4">Div Bot (Beta)</h1>
          <div className="d-flex justify-content-center mb-4">
            {['Veldig enkel', 'Enkel', 'Medium', 'Litt vanskelig', 'Vanskelig'].map((diff) => (
              <button
                key={diff}
                className={`btn ${difficulty === diff ? 'btn-success' : 'btn-secondary'} mx-1`}
                style={{ flex: 1, maxWidth: '150px' }}
                onClick={() => setDifficulty(diff)}
              >
                {diff}
              </button>
            ))}
          </div>
          <div className="mb-4 text-center">
            <button className="btn btn-primary" onClick={callApi} disabled={loading}>Lag en oppgave!</button>
          </div>
          {loading && <div className="text-center">💭 Tenker...</div>}
          {response && <pre style={{ whiteSpace: 'pre-wrap' }}>{response}</pre>}
        </div>
      </div>
    </div>
  );
}

export default DivBot;