import './App.css';

import { useState } from 'react';
import CodeGenerated from './components/CodeGenerated';
import Content from './components/Content';
import Footer from './components/Footer';
import Title from './components/Title';



function App() {
  document.title = 'Shorten Link'
  const [typeShorten, setTypeShorten] = useState({ id: 0, type: 'shrtco.de' })
  return (
    <div className="App">
      <Title />
      <Content typeShorten={typeShorten} setTypeShorten={setTypeShorten} />
      <Footer />
      <CodeGenerated typeShorten={typeShorten} />
    </div>
  );
}

export default App;
