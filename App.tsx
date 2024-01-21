/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {AppStack, AuthStack} from './src/routes';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {useAuthStore} from './src/zustand/zustand';
import {onlineManager} from '@tanstack/react-query';
import NetInfo from '@react-native-community/netinfo';
import ReactQueryWrapper from './src/react-query/query-client-provider';
import BootSplash from 'react-native-bootsplash';

//auto refetch on reconnect to network
onlineManager.setEventListener(setOnline => {
  return NetInfo.addEventListener(state => {
    setOnline(!!state.isConnected);
  });
});

function App(): React.JSX.Element {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);
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
