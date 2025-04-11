import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [actresses, setActresses] = useState([]);

  const endpoint = 'https://www.freetestapi.com/api/v1/actresses';

  function fetchActresses() {
    axios.get(endpoint)
      .then((res) => {
        setActresses(res.data);
      });
  }

  useEffect(fetchActresses, []);
  return (
    <>
      <h1>Attrici</h1>
      {actresses.map(actress =>
        <div className='card' key={actress.id}>
          <h2>{actress.name}</h2>
          <img src={actress.image} alt={actress.name} />
          <p>Anno nascita: {actress.birth_year}</p>
          <p>Nazionalità: {actress.nationality}</p>
          <p>Bio: {actress.biography}</p>
          <p>Premi: {actress.awards}</p>
          <p>Film Famosi in cui ha partecipato: {actress.most_famous_movies.join(', ')}</p>
        </div>
      )}

    </>
  );
}

export default App;
