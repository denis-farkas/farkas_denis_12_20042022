import { UserProvider } from './context/UserProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { ActivityProvider } from './context/ActivityProvider';
import { PerformanceProvider } from './context/PerformanceProvider';
import { SessionProvider } from './context/SessionProvider';

function App() {
  return (
    <Router>
      <UserProvider>
        <ActivityProvider>
          <SessionProvider>
            <PerformanceProvider>
              <div>
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
              </div>
            </PerformanceProvider>
          </SessionProvider>
        </ActivityProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
