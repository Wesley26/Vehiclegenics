import { createContext } from 'react';

/**
 * DeviceContext
 * @theDevice - number value of your curent device,
 * see DetermineDevice
 * @setTheDevice - set theDevice
 */

export type DEVICE = {
    theDevice: number,
    setTheDevice: (sTD: number) => void,
}

export let DeviceContext = createContext<DEVICE>({

    theDevice: 0,
    setTheDevice: () => {},

});