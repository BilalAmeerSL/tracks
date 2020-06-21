import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = () => {
    const {
        state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();
    return (
        <>
            <Spacer>
                <Input value={name} onChangeText={changeName} placeholder='Enter name' />
            </Spacer>
            <Spacer>
                {recording ? <Button onPress={stopRecording} title='Stop' />
                    : <Button onPress={startRecording} title='Start Recording' />}
            </Spacer>
            <Spacer>
                {!recording && locations.length ?
                    <Button title='Save Track' onPress={saveTrack} />
                    : null}
            </Spacer>
        </>
    );
};
const styles = StyleSheet.create({});
export default TrackForm;