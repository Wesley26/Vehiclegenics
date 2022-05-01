import { FC, useState } from 'react';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  WorkSans_700Bold,
} from '@expo-google-fonts/work-sans';

import Home from './src/components/appPages/Home';
import { DeviceContext } from './src/hooks/contextHooks/DeviceContext';

const App:FC = () => {

  const [theDevice, setTheDevice] = useState<number>(0);

  let [activeFonts] = useFonts({
    //Expand active fonts when needed
    WorkSans_700Bold,
  });

  if (!activeFonts) return <AppLoading />;

  return (
    <DeviceContext.Provider value={{ theDevice, setTheDevice }}>
      <TailwindProvider utilities={utilities}>
        <Home />
      </TailwindProvider>
    </DeviceContext.Provider>
  );
};

export default App;
