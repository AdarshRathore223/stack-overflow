import './App.css';
import './componenets/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './componenets/Navbar/Navbar';
function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
