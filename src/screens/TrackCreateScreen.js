import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import { FontAwesome } from '@expo/vector-icons';
import '../_mockLocation';

const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext);
    const callback = useCallback((location) => {
        // only change new version and return when state.recording value change
        addLocation(location, recording);
    }, [recording]);
    const [err] = useLocation(recording || isFocused, callback);
    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <Text h3>Create a Track</Text>
            <Map />
            {err ? <Text>Please enable your location</Text> : null}
            <TrackForm />
        </SafeAreaView>
    );
};
TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name="plus" size={20} />
}
const styles = StyleSheet.create({});
export default withNavigationFocus(TrackCreateScreen);