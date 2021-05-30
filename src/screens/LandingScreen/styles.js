import {Dimensions} from 'react-native';

const DEVICE_HEIGHT = Dimensions.get('screen').height;
const DEVICE_WIDTH = Dimensions.get('screen').width;

export default {
  highlight: {
    fontWeight: '700',
  },
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height: DEVICE_HEIGHT,
  },
  digiButtonStyle: {
    height: 80,
    borderRadius: 10,
    backgroundColor: '#265EB7',
    alignItems: 'center',
    justifyContent: 'center',
    width: DEVICE_WIDTH - 80,
  },
  boldButtonText: {
    fontWeight: '500',
    fontSize: 18,
    color: 'white',
  },
  // mainContainer: {
  //   alignItems: 'center',
  //   justifyContent: 'flex-end',
  //   height: DEVICE_HEIGHT,
  // },
};
