import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useAuthStore} from '../../../zustand/zustand';

const Login = () => {
  const updateAuthStore = useAuthStore().updateAuthStore;
  return (
    <View>
      <TouchableOpacity onPress={() => updateAuthStore()}>
        <Text>login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
