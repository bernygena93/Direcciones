import {StyleSheet} from 'react-native';
import COLORS from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    height: '35%',
    minHeight: 300,
    width: '100%',
  },
  location: {
    margin: 20,
    width: '90%',
    maxWidth: 350,
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 10,
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: COLORS.MAROON,
    textAlign: 'center',
  },
  map: {
    height: 300,
  },
});
