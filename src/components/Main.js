import React from 'react';
import SatSetting from './SatSetting';
import SatelliteList from './SatelliteList';
import {NEARBY_SATELLITE, STARLINK_CATEGORY, SAT_API_KEY } from '../constant';
import Axios from 'axios';

class Main extends React.Component{
    constructor(){
        super();
        this.state = {
            loadSatellites : false,
        }
      }
  
      showNearbySatellite = (setting) => {
        this.fetchSatellite(setting);
      }
  
      fetchSatellite = (setting) => {
        const {observerLat, observerLong, observerAlt, radius} = setting;
        const url = `${NEARBY_SATELLITE}/${observerLat}/${observerLong}/${observerAlt}/${radius}/${STARLINK_CATEGORY}/&apiKey=${SAT_API_KEY}`;

        this.setState({
            loadSatellites : true,
        })
  
        Axios.get(url)
            .then(response => {
                this.setState({
                    satInfo: response.data,
                    loadSatellites : false,
                })
            })
            .catch(error => {
                console.log('err in fetch satellite -> ', error);
                this.setState({
                    loadSatellites : false,
                })
          
            })
      }

    render(){
        return (
            <div className='main'>
                <div className="left-side">
                    <SatSetting onShow={this.showNearbySatellite }/>
                    <SatelliteList satInfo={this.state.satInfo} loading={this.state.loadSatellites}/>
                </div>
                <div className="right-side">
                right
                </div>
            </div>
        );
    }
}

export default Main;