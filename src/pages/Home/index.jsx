import React from 'react';
import Profile from '../../components/Profile';
import Histogramme from '../../components/Histogramme';
import Moyenne from '../../components/Moyenne';
import Performance from '../../components/Performance';
import Score from '../../components/Score';
import AsideElements from '../../components/AsideElements';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { UserProvider } from '../../context/UserProvider';
import { ActivityProvider } from '../../context/ActivityProvider';
import { SessionProvider } from '../../context/SessionProvider';
import { PerformanceProvider } from '../../context/PerformanceProvider';
import AsideLeft from '../../components/AsideLeft';
import Header from '../../components/Header';
import './home.css';

/**
 * @description Generate home page with context providers, and components
 * useFetch control if the API is connected
 * @returns { React.ReactElement }
 */

function Home() {
  sessionStorage.clear();
  const id = useParams();
  let { data, error, isPending, env } = useFetch(
    process.env.REACT_APP_API_URL + `/${id.id}`
  );

  if (data !== null) {
    sessionStorage.setItem('idUser', JSON.stringify(id));
  }
  if (env === 'local') {
    sessionStorage.setItem('env', JSON.stringify(env));
  }
  return (
    <div className="global container">
      {isPending && (
        <div className="spinner-container">
          <div className="loading-spinner"></div>
        </div>
      )}
      {error && <div>{error}</div>}
      {data && (
        <UserProvider>
          <Header />
          <div className="row col-lg-12">
            <div className="col-lg-1">
              <AsideLeft />
            </div>
            <div className="frame col-lg-11">
              <Profile />
              <div className="row col-lg-12">
                <div className="graphs col-lg-9">
                  <div className="histo col-lg-12">
                    <ActivityProvider>
                      <Histogramme />
                    </ActivityProvider>
                  </div>
                  <div className="little-graphs row">
                    <div className="moy col-lg-4">
                      <SessionProvider>
                        <Moyenne />
                      </SessionProvider>
                    </div>
                    <div className="radar col-lg-4">
                      <PerformanceProvider>
                        <Performance />
                      </PerformanceProvider>
                    </div>
                    <div className="score col-lg-4">
                      <Score />
                    </div>
                  </div>
                </div>
                <div className="apports col-lg-3">
                  <AsideElements />
                </div>
              </div>
            </div>
          </div>
        </UserProvider>
      )}
    </div>
  );
}

export default Home;
