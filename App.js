import logo from './logo.svg';
import './App.css';

import FirsComponent from './components/FirstComponent';
import AnotherComponent from './components/AnotherComponent';
import Images from './components/Images';
import Hooks from './components/Hooks';
import Fragment from './components/Fragment';
import Container from './components/Container';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';


function App() {

  const nome = "Maria"

  return (
    <div className="App">
      <h1>Hello React</h1>
      <FirsComponent />
      <AnotherComponent />
      <Images />
      <Hooks />
      <Fragment />
      <Container />
      <SayMyName nome="Maria" />
      <SayMyName nome="João" />
      <SayMyName nome={nome} />
      <Pessoa nome="Margarete" idade="25" profissão="Programadora" foto="pf4.jpg" />
    </div>
  )
}

export default App;
