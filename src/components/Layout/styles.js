import {Dimensions} from 'react-native';

const DEVICE_HEIGHT = Dimensions.get('screen').height;
// const DEVICE_WIDTH = Dimensions.get('screen').width;

export default {
  containerHeight: {
    height: DEVICE_HEIGHT,
  },
};
