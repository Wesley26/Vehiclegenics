import { useState } from 'react';
import * as Device from 'expo-device';

/**
 * @returns device - return the enum value
 * of the 
 */

const DetermineDevice = async () => {

    const [theDevice, setTheDevice] = useState<number>(0);

    const device = await Device.getDeviceTypeAsync();
    console.log(`Device is determined to be: ${device}`);
    console.log(`Type of the device variable is: ${typeof device}`);

    setTheDevice(Number(device));

    console.log(`theDevice is now set to: ${theDevice}`);
    
    return theDevice;

};

export default DetermineDevice;