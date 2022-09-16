import React from 'react';
import { StatusBar, View } from 'react-native';

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter'

import { Background } from './src/Components/Background/index';
import Home from './src/Views/Home';
import Loaging from './src/Views/Loading';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })

  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      {fontsLoaded ? <Home /> : <Loaging/> }
    </Background>
  );
}

