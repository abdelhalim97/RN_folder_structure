import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useFetchCats from '../../../custom-hooks/fetch-cats';

const Home = () => {
  const {data, isLoading, isError, isSuccess} = useFetchCats();
  return (
    <View style={{flex: 1}}>
      {!isLoading ? (
        <Text style={{color: '#000'}}>done</Text>
      ) : (
        // {data?.data}
        <Text style={{color: '#000'}}>home</Text>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
