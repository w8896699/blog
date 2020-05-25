import React from 'react';
import styled from 'styled-components';
import './Line.css';
import experienceConstants from '../../../constants/experience';
import Experience from './Experience.component';


const Line = () => (
  <div>

    <div className="line">
      <div className="cf">
        {
          experienceConstants.map((element, index) => (
            <div className={`${(index % 2 === 0) ? 'block fl' : 'block fr'}`}>

              <Experience experience={element} />
            </div>
          ))
        }
      </div>
    </div>
  </div>

);

export default Line;
