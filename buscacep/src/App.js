import { FiSearch } from 'react-icons/fi';
import './css/styles.css'; 

function App() {

  return(
  <div className="container">
    <h1 className="title">reset</h1>

    <div className="containerInput">
      <input 
      type="text" 
      placeholder="digite seu CEP..."
      /> 
      <button className="buttonSearch">
        <FiSearch size={25} color='#FFF' />
      </button>
    </div>

    <main className= "main">
      <h2>CEP</h2>
    </main>

  </div>
  );
  
}

export default App;
