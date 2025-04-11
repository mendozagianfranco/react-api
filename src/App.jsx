import axios from 'axios';


function App() {
  const endpoint = 'https://www.freetestapi.com/api/v1/actresses';

  function fetchActresses() {
    axios.get(endpoint)
      .then((res) => console.log(res.data));
  }
  fetchActresses();
  return (
    <>
      <h1>Attrici</h1>
      <div className='card'>
        <h2>Nome</h2>
        <p>Anno nascita</p>
        <p>Nazionalità</p>
        <p>Bio</p>
        <p>Premi</p>
        <p>Film Famosi in cui ha partecipato</p>
        <img src="#" alt="" />

      </div>
    </>
  );
}

export default App;
