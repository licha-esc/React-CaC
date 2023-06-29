import { PeliculasGrid } from './components/PeliculasGrid';
import './App.css';

function App() {
  return (
    <div>
      <header className="title">PELÍCULAS</header>
        <main>
          <PeliculasGrid />  {/* renderiza peliculasGrid.jsx */}
        </main>
    </div>
  );
}

export default App;
