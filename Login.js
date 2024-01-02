import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'abir' && password === '123') {
      // Authenticated, navigate to the command list page
      navigation.navigate('CommandList');
    } else {
      // Display an error message
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <View>
      <Text>Login Page</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;
