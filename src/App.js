import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Navbar-top">
        <h1>
          React and Morty App
          </h1>
          </div>

          <article className= "card">
            
            <h3>Random card</h3>  <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="Random Pic"></img>
          </article>
          <div>
            <ul className="Navbar-bottom">
              <li className="Link">Random 1</li>
              <li className="Link">Random 2</li>
              <li className="Link">Random 3</li>
            
            </ul>
          </div>
      </header>
    </div>
  );
}

export default App;
