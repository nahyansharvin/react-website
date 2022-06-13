import './App.css';
import {Navbar} from './components';
import {Home,About,Tech,Vision,Contact} from './containers';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Tech />
      <Vision />
      <Contact />
    </div>
  );
}

export default App;
