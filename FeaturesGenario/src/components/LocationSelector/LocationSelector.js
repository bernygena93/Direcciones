import {View, Text, Button, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {styles} from './styles';
import COLORS from '../../constants/Colors';
import Geolocation from '@react-native-community/geolocation';
import MapPreview from '../../components/MapPreview/MapPreview';

const LocationSelector = ({onLocation}) => {
  const [pickedLocation, setPickedLocation] = useState();
  const navigation = useNavigation();
  const route = useRoute();
  const mapLocation = route.params?.mapLocation;

  useEffect(() => {
    if (mapLocation) {
      setPickedLocation(mapLocation);
      onLocation(mapLocation);
    }
  }, [mapLocation]);

  const handleGetLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.warn(position);
        const {latitude, longitude} = position.coords;
        const location = {
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        };
        setPickedLocation(location);
        onLocation(location);
      },
      error => {
        console.warn(error);
        Alert.alert(
          'Could not fetch location',
          'Please enable location services and try again',
          [{text: 'Okay'}],
        );
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        forceRequestLocation: true,
        showLocationDialog: true,
      },
    );
  };

  const handlepickOnMap = () => {
    navigation.navigate('Map');
  };

  return (
    <View style={styles.container}>
      <MapPreview location={pickedLocation} style={styles.preview}>
        <Text>Localizacion en progreso...</Text>
      </MapPreview>
      <View style={styles.actions}>
        <Button
          title="Obtener ubicacion"
          color={COLORS.PEACH_PUFF}
          onPress={handleGetLocation}
        />
        <Button
          title="Elegir del mapa"
          color={COLORS.LIGTH_PINK}
          onPress={handlepickOnMap}
        />
      </View>
    </View>
  );
};

export default LocationSelector;
