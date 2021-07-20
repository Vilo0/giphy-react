import { useState } from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';

import { Link, Route } from 'wouter';

function App() {
  const [keyword, setKeyword] = useState('one piece')
  return (
    <div className="App">
      <header className="App-header">
        <section className="App-content"> 
            <h1>App</h1>    
            <Link to='gif/bolivia'>Gif de Bolivia</Link>
            <Link to='gif/peru'>Gif de Perú</Link>
            <Link to='gif/chile'>Gif de Chile</Link>
            <Route path='/gif/:keyword' component={ListOfGifs} />
        </section>
      </header>
    </div>
  );
}

export default App;
