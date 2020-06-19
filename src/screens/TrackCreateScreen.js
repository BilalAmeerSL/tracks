import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, NavigationEvents, withNavigationFocus } from 'react-navigation';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
// import '../_mockLocation';

const TrackCreateScreen = ({ isFocused }) => {
    console.log(isFocused);
    const { addLocation } = useContext(LocationContext);
    const [err] = useLocation(isFocused, addLocation);
    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <Text h3>Create a Track</Text>
            <Map />
            {err ? <Text>Please enable your location</Text> : null}
            <TrackForm/>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({});
export default withNavigationFocus(TrackCreateScreen);