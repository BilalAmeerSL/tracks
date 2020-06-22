import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';

const TrackDetailScreen = ({ navigation }) => {

    const _id = navigation.getParam('_id');
    const { state } = useContext(TrackContext);
    const track = state.find(t => t._id === _id);
    const initialCoordinates = track.locations[0].coords;
    return (
        <View>
            <Text>{track.name}</Text>
            <MapView style={styles.map}
                initialRegion={{
                    ...initialCoordinates,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}>
                <Polyline
                    coordinates={track.locations.map(location => location.coords)}
                />
            </MapView>
        </View>
    );
};
const styles = StyleSheet.create({
    map: {
        height: 300
    }
});
export default TrackDetailScreen;