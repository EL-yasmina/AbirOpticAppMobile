import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { Badge } from 'react-native-elements';
import moment from 'moment';
const ListScreen = () => {
  const [commands, setCommands] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch('https://abiroptic.store/back-end/api.php');  //fetch effectuer une requete http asynchrone pour recupérer les données 
      const jsonData = await response.json();                                    //recupérées les données au format json
      setCommands(jsonData.data);  //stocker les données récupérées
      setLoading(false); // ajuste le variable d'état loading à false après avoir récupéré les données, pour indiquer le chargement terminé)
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
      setLoading(false); // Définir loading à false en cas d'erreur
    }
  };  

  useEffect(() => {
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
  const getFlatListStyle = (status) => {
    let borderColor = '';
  
    switch (status) {
      case 0:
        borderColor = '#6c757d'; 
        break;
      case 1:
        borderColor = '#198754'; 
        break;
      case 2:
        borderColor = '#0dcaf0'; 
        break;
      case 3:
        borderColor = '#dc35'; 
        break;
      default:
        borderColor = 'black'; 
        break;
    }
  
    return { borderColor, borderWidth: 2 }; 
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dernières commandes</Text>
        <Button title="Actualiser" color="#0367A6" onPress={fetchData} />
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#007BFF" />
      ) : (
        <FlatList
          data={commands}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={[styles.commandItem, getFlatListStyle(item.statut)]}>
              <Text style={styles.date}>
  Le {moment(item.date).format('DD/MM/YYYY')} à {moment(item.date).format('HH:mm')}
</Text>
              <Text style={styles.quantity}><Text style={styles.bold}>Quantité : </Text> {item.quantite}</Text>
              <Text style={styles.status}><Text style={styles.bold}>Statut : </Text> {getStatusLabel(item.statut)}</Text>
              <Text style={styles.product}><Text style={styles.bold}>Nom du Produit : </Text>{item.nomProduit}</Text>
              <Text style={styles.client}><Text style={styles.bold}>Nom du Client : </Text> {item.nomClient}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5F5F5',
  },
  bold:{
    fontWeight: 'bold'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor:'#0367A6'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginLeft:5
  },
  commandItem: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#007BFF',
  },
  quantity: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  status: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  product: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  client: {
    fontSize: 16,
    color: '#555',
  },
});

export default ListScreen;
