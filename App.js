import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { StyleSheet, Image } from 'react-native';
import LoginForm from './screens/LoginForm';
import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (isLogged) => {
    setLoggedIn(isLogged); // Mettre à jour l'état loggedIn en fonction du résultat de la connexion
  };

  return (
    <NavigationContainer>
      {loggedIn ? (
        <Tab.Navigator>
          <Tab.Screen
            name="Accueil"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" type="font-awesome" color={color} size={size} />
              ),
              headerLeft: () => (
                <Image
                  source={require('./assets/logo.png')} // Remplacez par le chemin de votre image logo
                  style={styles.logo}
                />
              ),
              headerTitleAlign: 'center',
              headerTitle: 'Accueil', // Titre de l'en-tête
            }}
          />
          <Tab.Screen
            name="Commandes"
            component={ListScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="list" type="font-awesome" color={color} size={size} />
              ),
              tabBarBadge:9,
              headerLeft: () => (
                <Image
                  source={require('./assets/logo.png')} // Remplacez par le chemin de votre image logo
                  style={styles.logo}
                />
              ),
              headerTitleAlign: 'center',
              headerTitle: 'Commandes', // Titre de l'en-tête
            }}
          />
          <Tab.Screen
            name="Profil"
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="user" type="font-awesome" color={color} size={size} />
              ),
              headerLeft: () => (
                <Image
                  source={require('./assets/logo.png')} // Remplacez par le chemin de votre image logo
                  style={styles.logo}
                />
              ),
              headerTitleAlign: 'center',
              headerTitle: 'Profile', // Titre de l'en-tête
            }}
          >
            {() => <ProfileScreen logout={handleLogin} />}
          </Tab.Screen>
        </Tab.Navigator>
      ) : (
        <LoginForm name="Login" onLogin={handleLogin} />
      )}
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100, // Ajustez la largeur selon vos besoins
    height: 35,
    marginLeft:10
  },
});
export default App;
