import { FC } from 'react';
import { globalStyles } from '../../../globalStyles';
import { useTailwind } from 'tailwind-rn';
import { LinearGradient } from 'expo-linear-gradient';

import { 
    MainLogo,
} from '../globalComponents/indexGlobal';

const Home:FC = () => {

    const tailwind = useTailwind();

    return (
        <LinearGradient
            colors={[
                globalStyles.primary.color, 
                globalStyles.textMedium.color, 
                globalStyles.textDark.color
            ]}  
            style={tailwind('p-20pix flex-1 flex-col')}
        >

            <MainLogo />

        </LinearGradient>
    );
};

export default Home;