import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, NavigationEvents, withNavigationFocus } from 'react-navigation';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
// import '../_mockLocation';

const TrackCreateScreen = ({ isFocused }) => {
    console.log(isFocused);
    const { addLocation } = useContext(LocationContext);
    const [err] = useLocation(isFocused, addLocation);
    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <Text h3>Create a Track</Text>
            <Map />
            {/* <NavigationEvents onWillBlur={() => { console.log('blur') }} /> */}
            {err ? <Text>Please enable your location</Text> : null}
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({});
export default withNavigationFocus(TrackCreateScreen);