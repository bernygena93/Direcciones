import React, {useState, useLayoutEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView, {Marker} from 'react-native-maps';
import {styles} from './styles';

const MapScreen = ({navigation}) => {
  const [selectedLocation, setSelectedLocation] = useState();

  const initialRegion = {
    latitude: 37.4219023,
    longitude: -122.0839984,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const handleLocation = e => {
    setSelectedLocation({
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
    });
  };

  const handleSaveLocation = () => {
    if (selectedLocation) {
      navigation.navigate('Nuevo', {mapLocation: selectedLocation});
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleSaveLocation}>
          <Ionicons name="save-outline" color="white" size={22} />
        </TouchableOpacity>
      ),
    });
  }, [navigation, handleSaveLocation]);
  return (
    <MapView
      initialRegion={initialRegion}
      style={styles.container}
      onPress={handleLocation}>
      {selectedLocation && (
        <Marker
          title="Ubicacion seleccionada"
          coordinate={{
            latitude: selectedLocation.latitude,
            longitude: selectedLocation.longitude,
          }}
        />
      )}
    </MapView>
  );
};

export default MapScreen;
