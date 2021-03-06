import React from 'react';
import {InputNumber, Button} from 'antd'
class SatSetting extends React.Component{

    constructor(){
        super();
        this.state ={
            observerLat: 0,
            observerLong: 0,
            observerAlt: 0,
            radius: 90,
        }
    }

    onChangeLat = (value) => {
        console.log('value', value)
        this.setState({
            observerLat : value
        })
    }

    onChangeLong = (value) => {
        console.log('value', value)
        this.setState({
            observerLong : value
        })
    }

    onChangeAlt = (value) => {
        console.log('value', value)
        this.setState({
            observerAlt : value
        })
    }

    onChangeRadius = (value)=>{
        this.setState({
            ridus:value
        })
    }

    showSatellite = () =>{
        // function from main onShow
        this.props.onShow(this.state)
    }


    render(){
        return(
            <div className = "sat-setting">
                <div className = "loc-setting">
                    <p className ="setting-label">From Location</p>
                    <div className ="setting-list two-item-col">
                    <div className = "list-item">
                        <label> Longitude:</label>
                        <InputNumber 
                            min ={-180}
                            max ={180}
                            defaultValue={0}
                            style = {{margin: "0 2px"}}
                            onChange={this.onChangeLat}
                            />
                    </div>

                    <div className="list-item right-item">
                            <label>Latitude: </label>
                            <InputNumber
                                placeholder="latitude"
                                min={-90}
                                max={90}
                                defaultValue={0}
                                style={{margin: "0 2px"}}
                                onChange={this.onChangeLat}
                            />
                        </div>
                    </div>
                    <div className="setting-list">
                        <div className="list-item">
                            <label>Elevation(meters): </label>
                            <InputNumber
                                min={-413}
                                max={8850}
                                defaultValue={0}
                                style={{margin: "0 2px"}}
                                onChange={this.onChangeAlt}
                            />
                        </div>
                    </div>

                    <p className = "setting-label"> Restriction</p>
                    <div className="setting-list">
                        <div className = "list-item">
                            <label> Search Radius</label>
                                <InputNumber
                                min={0}
                                max={90}
                                defaultValue={0}
                                style={{margin: "0 2px"}}
                                onchange= {this.onChangeRadius}
                                />
                    </div>

                    </div>

                    <div className="show-nearby">
                    <Button
                        className="show-nearby-btn"
                        size="large"
                        // onclick button show satellite list 
                        onClick={this.showSatellite}
                    >
                        Find Nearby Satellites
                    </Button>
                </div>
            </div>
        </div>   
        );
    }
}

export default SatSetting;