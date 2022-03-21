import { FC } from 'react';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  WorkSans_700Bold,
} from '@expo-google-fonts/work-sans';

import Home from './src/components/appPages/Home';

const App:FC = () => {

  let [activeFonts] = useFonts({
    //Expand active fonts when needed
    WorkSans_700Bold,
  });

  if (!activeFonts) return <AppLoading />;

  return (
    <TailwindProvider utilities={utilities}>
      <Home />
    </TailwindProvider>
  );
};

export default App;
