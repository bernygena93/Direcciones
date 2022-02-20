import React from 'react';
import {Platform, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../constants';

// screens
import PlaceListScreen from '../screens/PlaceList/PlaceListScreen';
import PlaceDetailScreen from '../screens/PlaceDetail/PlaceDetailScreen';
import NewPlaceScreen from '../screens/NewPlace/NewPlaceScreen';
import MapScreen from '../screens/Map/MapScreen';

const PlaceStack = createNativeStackNavigator();

const PlaceNavigator = () => (
  <PlaceStack.Navigator
    initialRoute="Place"
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? COLORS.DARK_SIENNA : '',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.DARK_SIENNA,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <PlaceStack.Screen
      name="Direcciones"
      component={PlaceListScreen}
      options={({navigation}) => ({
        title: 'Direcciones',
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Nuevo')}>
            <Ionicons name="add-outline" size={23} color="white" />
          </TouchableOpacity>
        ),
      })}
    />
    <PlaceStack.Screen
      name="Detalle"
      component={PlaceDetailScreen}
      options={{title: 'Detalle direccion'}}
    />
    <PlaceStack.Screen
      name="Nuevo"
      component={NewPlaceScreen}
      options={{title: 'Nueva direccion'}}
    />
    <PlaceStack.Screen
      name="Map"
      component={MapScreen}
      options={{title: 'Mapa'}}
    />
  </PlaceStack.Navigator>
);

export default PlaceNavigator;
