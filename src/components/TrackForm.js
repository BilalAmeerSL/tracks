import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';

const TrackForm = () => {
    const {
        state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName } = useContext(LocationContext);
    console.log(locations.length)
    return (
        <>
            <Spacer>
                <Input onChangeText={changeName} placeholder='Enter name' />
            </Spacer>
            <Spacer>
                {recording ? <Button onPress={stopRecording} title='Stop' />
                    : <Button onPress={startRecording} title='Start Recording' />}
            </Spacer>
        </>
    );
};
const styles = StyleSheet.create({});
export default TrackForm;