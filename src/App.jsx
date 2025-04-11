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
      <div>

      </div>
    </>
  );
}

export default App;
