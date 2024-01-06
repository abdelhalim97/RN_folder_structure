import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useAuthStore} from '../../../zustand/zustand';

const Login = () => {
  const updateAuthStore = useAuthStore(state => state.updateAuthStore);
  const isAuthed = useAuthStore(state => state.isAuthed);
  return (
    <View>
      <TouchableOpacity onPress={() => updateAuthStore(isAuthed)}>
        <Text>login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
