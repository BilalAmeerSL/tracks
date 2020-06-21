import React, { useContext } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
    const { state: { currentLocation, locations } } = useContext(LocationContext);
    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
    }
    // let points = [];
    // for (let i = 0; i <= 20; i++) {
    //     points.push({
    //         latitude: 31.582045 + i * 0.01,
    //         longitude: 74.329376 + i * 0.01
    //     });
    // }
    return (
        <View>
            <MapView style={styles.map}
            //removing region, map will not focus on current point
                region={{
                    ...currentLocation.coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
                initialRegion={{
                    // latitude: 31.582045,
                    // longitude: 74.329376,
                    ...currentLocation.coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}>
                <Circle
                    center={currentLocation.coords}
                    radius={20}
                    strokeColor="rgba(158,158,255,1.0)"
                    fillColor="rgba(158,158,255,0.3)"
                />
                <Polyline
                    coordinates={locations.map(location=>location.coords)}
                />
            </MapView>
        </View>
    );
}
const styles = StyleSheet.create({
    map: {
        height: 300
    }
});
export default Map;