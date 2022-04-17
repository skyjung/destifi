import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import * as Font from 'expo-font';
import * as React from 'react';
import {RootTabScreenProps} from "./types";

const fetchFonts = () =>
  Font.loadAsync({
    'poppins': require('./assets/fonts/Poppins-Regular.ttf'),
  });
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    fetchFonts();
    return (
      <SafeAreaProvider>
          <PaperProvider>
              <Navigation colorScheme={colorScheme} />
              <StatusBar />
          </PaperProvider>
      </SafeAreaProvider>
    );
  }
}
