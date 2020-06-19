import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from './Spacer';

const TrackForm = () => {

    return (
        <>
            <Spacer>
                <Input placeholder='Enter name'/>
            </Spacer>
            <Spacer>
                <Button title='Record' />
            </Spacer>
        </>
    );
};
const styles = StyleSheet.create({});
export default TrackForm;