import MapView from "react-native-map-clustering";
import { Marker } from "react-native-maps";
import React, { Component } from 'react';


export default class Maps extends Component {

  state = {
    clusters: [],
    INITIAL_REGION: {
      latitude: 37.983810,
      longitude: 23.727539,
      latitudeDelta: 8.5,
      longitudeDelta: 8.5,
    }
    }

    fetchClusters() {
        fetch(`https://warply.s3.amazonaws.com/data/test_pois.json`)
            // We get the API response and receive data in JSON format
            .then(response => response.json())
            // then we update clusters State
            .then(data =>
                this.setState({
                    clusters: data
                })
            )
  }

  componentDidMount(){
      this.fetchClusters();
  }

render() {

  return(
    <MapView initialRegion={ this.state.INITIAL_REGION } style={{ flex: 1 }}>
          { this.state.clusters.map((cluster, index) => (
             <Marker key={index} coordinate={{ latitude: parseFloat(cluster.latitude), longitude: parseFloat(cluster.longitude) }} />
          ))}
      </MapView>
  )

}
}


