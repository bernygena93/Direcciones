import RNFS from 'react-native-fs';
import Config from 'react-native-config';
import {insertAddress, fetchAddress} from '../../db/index';

export const ADD_PLACE = 'ADD_PLACE';
export const LOAD_PLACE = 'LOAD_PLACE';

export const addPlace = (title, image, location) => {
  return async dispatch => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=AIzaSyDuWEO5ZTit0Zo498096LBA3Sy41FZkuDI`,
      );
      const resData = await response.json();
      const address = resData.results[0].formatted_address;

      const fileName = image.split('/').pop();
      const Path = `file:///${RNFS.DocumentDirectoryPath}/${fileName}`;

      await RNFS.copyFile(image, Path);

      const result = await insertAddress(
        title,
        Path,
        address,
        {latitude: location.latitude},
        {longitude: location.longitude},
      );

      dispatch({
        type: ADD_PLACE,
        payload: {
          id: result.insertId,
          image: Path,
          address,
          lat: location.latitude,
          lng: location.longitude,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const loadPlaces = () => {
  return async dispatch => {
    try {
      const result = await fetchAddress();
      dispatch({type: LOAD_PLACE, places: result});
    } catch (err) {
      throw err;
    }
  };
};
