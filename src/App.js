import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  componentDidMount(){
    let data = {
      f: 'json'
    }

    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
      }
    };

    let url = 'https://analysis3.arcgis.com/arcgis/rest/services/tasks/GPServer/DeriveNewLocations/submitJob'

    axios.post(url, data, axiosConfig)
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      })

  }

  render() {
    return (
      <div className="App">
        <p>Spatial Analysis test</p>
      </div>
    )
    }

}

export default App;
