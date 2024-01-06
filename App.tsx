/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {AppStack, AuthStack} from './src/routes';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Config from 'react-native-config';
import {NavigationContainer} from '@react-navigation/native';
import {useAuthStore} from './src/zustand/zustand';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const isAuthed = useAuthStore(state => state.isAuthed);

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <NavigationContainer>
          {isAuthed ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
      </SafeAreaView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
