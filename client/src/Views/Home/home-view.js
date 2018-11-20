import React from 'react';
import './home-view.scss';
import Map from '../../Components/Map/map'
import { Navigation } from '../../Components/Navbar/navbar';


export default props =>

<div className='home'>
  <div className='home-body'>
  <div className='map-container'>
    <Map/>
    </div>
  </div>
</div>
