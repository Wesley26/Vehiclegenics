import { useContext, useEffect } from 'react';
import * as Device from 'expo-device';

import { DeviceContext } from '../contextHooks/DeviceContext';

/**
 * @returns theDevice - return the enum number value
 * of the current device, see expo-device for these
 * enum values: UNKNOWN = 0, PHONE = 1, TABLET = 2
 */

const DetermineDevice = () => {

    const { theDevice, setTheDevice } = useContext(DeviceContext);

    useEffect(() => {

        const getDevice = async () => {

            let device = await Device.getDeviceTypeAsync();
            setTheDevice(Number(device));

            return device;

        };

        getDevice();

    }, []);
    
    return theDevice;

};

export default DetermineDevice;