import { FC } from 'react';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import Demo from './src/Demo';

const App:FC = () => {

  return (
    <TailwindProvider utilities={utilities}>
      <Demo />
    </TailwindProvider>
  );
};

export default App;
