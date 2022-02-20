import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  preview: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderColor: Colors.BLUSH,
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
