import React from 'react';
import './aside_left.css';

/**
 *  Aside navigation icons in window
 * @returns (React.ReactElement)
 */

function AsideLeft() {
  return (
    <div className="aside_left">
      <div className="vide"></div>
      <div className="elements">
        <img className="xsmall-img" src="images/chill.png" alt="chill" />
        <img className="xsmall-img" src="images/swim.png" alt="swim" />
        <img className="xsmall-img" src="images/cycle.png" alt="cycle" />
        <img className="xsmall-img" src="images/weight.png" alt="weight" />
      </div>
      <div className="copyright">
        <span>Copyright, SportSee 2020</span>
      </div>
    </div>
  );
}

export default AsideLeft;
