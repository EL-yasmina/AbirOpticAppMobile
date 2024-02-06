// LoginForm.js
import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { Input, Icon } from 'react-native-elements';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = () => {
    // Vérifier les informations de connexion ici
    if (username === 'abir' && password === '123456789') {
      onLogin(true); 
    } else {
      // Afficher un message d'erreur ou effectuer une action en cas d'informations incorrectes
      
      setUsername('');
      setPassword('');
      // Afficher un message d'erreur
      console.log('Nom d\'utilisateur ou mot de passe incorrect.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('../assets/logo.png')} 
        style={styles.logo}
      />
      <Input
        placeholder="Identifiant"
        leftIcon={<Icon name="user" type="font-awesome" />}
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <Input
        placeholder="Mot de passe"
        leftIcon={<Icon name="lock" type="font-awesome" />}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button title="Connexion" color="#0367A6" onPress={handleLoginPress} />
    </View>
  );
};
const styles = StyleSheet.create({
  logo: {
    width: 200, 
    height: 70, 
    marginBottom:50
  },
});
export default LoginForm;
