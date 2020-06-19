import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import '../_mockLocation';

const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext);
    const callback = useCallback((location) => {
        // only change new version and return when state.recording value change
        addLocation(location, recording);
    }, [recording]);
    const [err] = useLocation(recording, callback);
    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <Text h3>Create a Track</Text>
            <Map />
            {err ? <Text>Please enable your location</Text> : null}
            <TrackForm />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({});
export default withNavigationFocus(TrackCreateScreen);