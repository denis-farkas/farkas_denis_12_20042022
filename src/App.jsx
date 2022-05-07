import { UserProvider } from './context/UserProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { ActivityProvider } from './context/ActivityProvider';
import { PerformanceProvider } from './context/PerformanceProvider';
import { SessionProvider } from './context/SessionProvider';

function App() {
  return (
    <UserProvider>
      <ActivityProvider>
        <SessionProvider>
          <PerformanceProvider>
            <Router>
              <div>
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
              </div>
            </Router>
          </PerformanceProvider>
        </SessionProvider>
      </ActivityProvider>
    </UserProvider>
  );
}

export default App;
