import React, { useState, useEffect } from 'react';
import { Text as RNText } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

const fetchFonts = () => {
  return Font.loadAsync({
    'montserrat-regular': require('../../assets/fonts/Montserrat/Montserrat-Regular.ttf'),
    'montserrat-bold': require('../../assets/fonts/Montserrat/Montserrat-Bold.ttf'),
  });
};

export default function FontLoader({ children }) {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (fontsLoaded) {
      RNText.defaultProps = RNText.defaultProps || {};
      RNText.defaultProps.style = {
        fontFamily: 'montserrat-regular',
      };
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return <>{children}</>;
}