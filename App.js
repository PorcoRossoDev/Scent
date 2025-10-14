// ⚡️ Luôn import 2 dòng này đầu tiên
import 'react-native-gesture-handler';
import 'react-native-reanimated';

import './global.css';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import AppNavigation from './app/navigation/AppNavigator';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <SafeAreaProvider>
          <StatusBar
            translucent={false}
            backgroundColor={'#0089FF'}
            barStyle={'light-content'}
          />
          <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <NavigationContainer>
              <AppNavigation />
            </NavigationContainer>
          </SafeAreaView>
        </SafeAreaProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
