import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ProfileScreen = ({ logout }) => {
  const handleLogout = () => {
    logout(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mon Profil</Text>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Nom:</Text>
        <Text style={styles.info}>Abir EL TAIEBI</Text>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>contact.abiroptic@gmail.com</Text>
        <Text style={styles.label}>Téléphone:</Text>
        <Text style={styles.info}>+212 63780251</Text>
        <Text style={styles.label}>Langues:</Text>
        <Text style={styles.info}>Français</Text>
        <Text style={styles.label}>Limite commandes:</Text>
        <Text style={styles.info}>9</Text>
        <Text style={styles.label}>Notifications</Text>
        <Text style={styles.info}>Désactiver</Text>
        <Text style={styles.label}>Version</Text>
        <Text style={styles.info}>1.0.0</Text>
      </View>
      <Button title="Déconnexion" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileInfo: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  info: {
    fontSize: 16,
    marginBottom: 12,
  },
});

export default ProfileScreen;
