import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [actresses, setActresses] = useState([]);
  const [actors, setActors] = useState([]);

  const endpointActresses = 'https://www.freetestapi.com/api/v1/actresses';
  const endpointActrors = 'https://www.freetestapi.com/api/v1/actors';

  function fetchActresses() {
    axios.get(endpointActresses)
      .then((res) => {
        setActresses(res.data);
      });
  }

  function fetchActors() {
    axios.get(endpointActrors)
      .then((res) => {
        setActors(res.data);
      });
  }

  useEffect(fetchActresses, []);
  useEffect(fetchActors, []);
  return (
    <>
      <h1>Attori e Attrici</h1>
      <div className="container">
        <div className="container-actresses">
          <h2>Attrici</h2>
          {actresses.map(actress =>
            <div className='card' key={actress.id}>
              <h3>{actress.name}</h3>
              <img src={actress.image} alt={actress.name} />
              <p><strong>Anno nascita:</strong> {actress.birth_year}</p>
              <p><strong>Nazionalità:</strong> {actress.nationality}</p>
              <p><strong>Bio:</strong> {actress.biography}</p>
              <p><strong>Premi:</strong> {actress.awards}</p>
              <p><strong>Film Famosi in cui ha partecipato:</strong> {actress.most_famous_movies.join(', ')}</p>
            </div>
          )}
        </div>

        <div className="container-actors">
          <h2>Attori</h2>
          {actors.map(actor =>
            <div className='card' key={actor.id}>
              <h3>{actor.name}</h3>
              <img src={actor.image} alt={actor.name} />
              <p><strong>Anno nascita:</strong> {actor.birth_year}</p>
              <p><strong>Nazionalità:</strong> {actor.nationality}</p>
              <p><strong>Bio:</strong> {actor.biography}</p>
              <p><strong>Premi:</strong> {actor.awards}</p>
              <p><strong>Film Famosi in cui ha partecipato:</strong> {actor.known_for.join(', ')}</p>
            </div>
          )}
        </div>
      </div>

    </>
  );
}

export default App;
