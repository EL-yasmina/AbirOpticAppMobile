import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

const CommandList = () => {
  const [commands, setCommands] = useState([]);

  useEffect(() => {
    // Fetch data from your MySQL database using fetch or Axios
    // Parse the data and set it in the commands state
    // Replace the following with your actual API call
    fetch('http://192.168.1.20:3000/api/commands')
      .then((response) => response.json())
      .then((data) => setCommands(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View>
      <Text>Command List Page</Text>
      <FlatList
        data={commands}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Date: {item.date}</Text>
            <Text>Quantité: {item.quantite}</Text>
            <Text>Statut: {item.statut}</Text>
            <Text>Nom Produit: {item.nomProduit}</Text>
            <Text>Nom Client: {item.nomClient}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CommandList;
