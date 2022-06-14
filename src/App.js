import './App.css';
import {Navbar} from './components';
import {Home,About,Tech,Vision,Contact, Footer} from './containers';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Tech />
      <Vision />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
