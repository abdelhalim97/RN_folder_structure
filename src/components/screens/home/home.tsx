import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useFetchCats from '../../../custom-hooks/fetch-cats';

const Home = () => {
  const {data, isLoading, isError, isSuccess} = useFetchCats();
  return (
    <View style={{flex: 1}}>
      {isSuccess ? (
        data?.data.map((cat: any) => (
          <Text style={{color: '#000'}} testID="fetchedCats">
            {cat.id}
          </Text>
        ))
      ) : (
        <Text style={{color: '#000'}}>home</Text>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
