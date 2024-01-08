import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const CommandList = () => {
  const [commands, setCommands] = useState([]);

  const fetchData = () => {
    // Replace the following with your actual API call
    fetch('https://fine-twilight-astronaut.glitch.me/api/commands', {
      method: 'DELETE', // Ajouter cette ligne pour vider la table des commandes
    })
      .then(() => fetch('https://fine-twilight-astronaut.glitch.me/api/commands'))
      .then((response) => response.json())
      .then((data) => setCommands(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const getStatusLabel = (status) => {
    switch (status) {
      case 0:
        return 'En traitement';
      case 1:
        return 'Envoyé';
      case 2:
        return 'Reçu';
      case 3:
        return 'Annulé';
      default:
        return 'Statut inconnu';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Command List Page</Text>
        <Button title="Refresh" onPress={fetchData} />
      </View>
      <FlatList
        data={commands}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.commandItem}>
            <Text>Date: {item.date}</Text>
            <Text>Quantité: {item.quantite}</Text>
            <Text>Statut: {getStatusLabel(item.statut)}</Text>
            <Text>Nom Produit: {item.nomProduit}</Text>
            <Text>Nom Client: {item.nomClient}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  commandItem: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default CommandList;
