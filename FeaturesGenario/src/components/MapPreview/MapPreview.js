import {View, Image} from 'react-native';
import Config from 'react-native-config';
import React, {useEffect} from 'react';
import {styles} from './styles';

const MapPreview = ({location, children, style}) => {
  const mapPreviewUrl =
    location &&
    `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284=&key=AIzaSyDuWEO5ZTit0Zo498096LBA3Sy41FZkuDI`;

  useEffect(() => {
    console.log(mapPreviewUrl);
  }, [location]);
  return (
    <View style={{...styles.mapPreview, ...style}}>
      {location ? (
        <Image style={styles.mapImage} source={{uri: mapPreviewUrl}} />
      ) : (
        children
      )}
    </View>
  );
};

export default MapPreview;
