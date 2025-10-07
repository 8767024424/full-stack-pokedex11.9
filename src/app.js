import React, { useState, useEffect } from 'react';

const Ivysaur = () => (
  <div>
    <h2>Ivysaur</h2>
    <p>Ivysaur is a Grass/Poison-type Pokémon. It evolves from Bulbasaur.</p>
    <p>Abilities: chlorophyll, overgrow</p>
  </div>
);


const Home = () => (
  <div>
    <h1>Pokedex Application</h1>
    <p>Welcome to the front page! (This is where ivysaur should be visible)</p>
    <div id="pokedex-list">
      <a href="#/ivysaur">ivysaur</a>
    </div>
  </div>
);

const App = () => {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(window.location.hash);
    };

    window.addEventListener('hashchange', onHashChange);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  return (
    <div className="container" style={{ textAlign: 'center', padding: '20px' }}>
      {route === '#/ivysaur' ? <Ivysaur /> : <Home />}
      <footer style={{ marginTop: '50px', fontSize: '0.8em', color: '#666' }}>
        Pokémon and Pokémon character names are trademarks of Nintendo.
      </footer>
    </div>
  );
};

export default App;
