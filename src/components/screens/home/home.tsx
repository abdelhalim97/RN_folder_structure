import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import useFetchCats from '../../../custom-hooks/fetch-cats';

const Home = () => {
  // const {data, isLoading, isError} = useFetchCats();
  return (
    <View style={{flex: 1}} accessibilityRole="text">
      <Text style={{color: '#000'}} accessibilityRole="text">
        home
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
