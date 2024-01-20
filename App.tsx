/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  AppState,
  AppStateStatus,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {AppStack, AuthStack} from './src/routes';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {useAuthStore} from './src/zustand/zustand';
import {onlineManager} from '@tanstack/react-query';
import NetInfo from '@react-native-community/netinfo';
import {onAppStateChange} from './src/react-query/app-state-change';
import ReactQueryWrapper from './src/react-query/query-client-provider';

//auto refetch on reconnect to network
onlineManager.setEventListener(setOnline => {
  return NetInfo.addEventListener(state => {
    setOnline(!!state.isConnected);
  });
});

//refetch when the app is running in the foreground
//TODO: recheck this  https://tanstack.com/query/v4/docs/react/react-native
useEffect(() => {
  const subscription = AppState.addEventListener('change', onAppStateChange);

  return () => subscription.remove();
}, []);

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const isAuthed = useAuthStore(state => state.isAuthed);

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };
  return (
    <ReactQueryWrapper>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <NavigationContainer>
          {isAuthed ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
      </SafeAreaView>
    </ReactQueryWrapper>
  );
}

export default App;
