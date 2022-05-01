import { FC } from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../../globalStyles';
import { useTailwind } from 'tailwind-rn';

import DetermineDevice from '../../hooks/anyHooks/DetermineDevice';

/**
 * @returns MainLogo component
 */

const MainLogo:FC = () => {

    const deviceType: number = DetermineDevice();
    const tailwind = useTailwind();
    const logoText: string = `Vehiclegenics`;

    console.log(`The deviceType inside MainLogo.tsx is: ${(deviceType)}`);
    //todo: create the tailwind styles for both tablet and phone

    return (

        <View style={[
            globalStyles.bgMedium,
            tailwind('mt-55pix p-15pix h-32 border-slate-700 border-3pix justify-center items-center rounded-md')
        ]}>
            <View style={[
                globalStyles.textDark, 
                tailwind('justify-center items-center')]}
            >
                <Text style={[
                    globalStyles.workSansBold700,
                    globalStyles.primaryShadow, 
                    tailwind('mt-2pix px-10pix justify-center items-center text-42pix text-center')]}
                >
                    {logoText}
                </Text>
            </View>
        </View>

    );
};

export default MainLogo;