import React from 'react';
import Header from '../../components/Header';
import Histogramme from '../../components/Histogramme';
import Moyenne from '../../components/Moyenne';
import Radar from '../../components/Radar';
import Aside from '../../components/Aside';

const Home = () => {
  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="graphs col-lg-9">
          <Histogramme />
          <Moyenne />
          <Radar />
        </div>
        <div className="apports col-lg-3">
          <Aside />
        </div>
      </div>
    </div>
  );
};

export default Home;
