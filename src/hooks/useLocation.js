import { useContext, useState, useEffect } from 'react';
import { requestPermissionsAsync, Accuracy, watchPositionAsync } from 'expo-location';

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null);

    const [subscriber, setSubscriber] = useState(null);
    const startWatching = async () => {
        try {
            await requestPermissionsAsync();
            const sub = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, location => {
                callback(location);
            });
            setSubscriber(sub);
            setSubscriber(null);
        } catch (err) {
            setErr(err);
        }
    }
    useEffect(() => {
        shouldTrack ? startWatching() :
            subscriber ? subscriber.remove() : null;
    }, [shouldTrack, callback]); // don't use normal function (otherwise it renders multiple time) but useCallback

    return [err];
};