import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Simulate from './pages/Simulate';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/:id" element={<Home />} />
          <Route path="*" element={<Simulate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
