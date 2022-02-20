import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {useSelector} from 'react-redux';
import MapPreview from '../../components/MapPreview/MapPreview';
import {styles} from './styles';

const PlaceDetailScreen = ({route}) => {
  const {placeID} = route.params;
  const place = useSelector(state =>
    state.places.places.find(item => item.id === placeID),
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{uri: place.image}} style={styles.image} />
      <View style={styles.location}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{place.address}</Text>
        </View>
        <MapPreview
          style={styles.map}
          location={{latitude: place.latitude, longitude: place.longitude}}>
          <Text>Ubicación no disponible</Text>
        </MapPreview>
      </View>
    </ScrollView>
  );
};

export default PlaceDetailScreen;
