import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tableau de bord des Statistiques</Text>

      <View style={styles.cardContainer}>
        <Card containerStyle={styles.card}>
          <Text style={styles.cardTitle}>Produits en Stock</Text>
          <Text style={styles.cardText}>125 produits disponibles</Text>
        </Card>
        <Card containerStyle={styles.card}>
          <Text style={styles.cardTitle}>Rupture de Stock</Text>
          <Text style={styles.cardText}>5 produits en rupture de stock</Text>
        </Card>
      </View>
      
      <View style={styles.cardContainer}>
        <Card containerStyle={styles.card}>
          <Text style={styles.cardTitle}>Commandes en Cours</Text>
          <Text style={styles.cardText}>3 commandes en cours de traitement</Text>
        </Card>
        <Card containerStyle={styles.card}>
          <Text style={styles.cardTitle}>Commandes Envoyées</Text>
          <Text style={styles.cardText}>3 commandes envoyées</Text>
        </Card>
      </View>
      <View style={styles.cardContainer}>
        <Card containerStyle={styles.card}>
          <Text style={styles.cardTitle}>Commandes Reçues</Text>
          <Text style={styles.cardText}>6 commandes reçues</Text>
        </Card>
        <Card containerStyle={styles.card}>
          <Text style={styles.cardTitle}>Commandes Annulées</Text>
          <Text style={styles.cardText}>3 commandes annulées</Text>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 17,
    marginBottom: 17,
    textAlign: 'center',
    color: '#333',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    flex: 1,
    borderWidth: 1,
    height: 150,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    padding: 15,
    margin: 5,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  cardText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },
});

export default HomeScreen;
