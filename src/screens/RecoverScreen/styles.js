import {Dimensions} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('screen').width;

export default {
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  contentPadding: {
    paddingHorizontal: 20,
  },
  recoveryText: {
    height: 140,
    borderWidth: 1,
    width: DEVICE_WIDTH - 60,
    textAlign: 'center',
    textTransform: 'lowercase',
  },
  title: {
    lineHeight: 20,
  },
  restoreBtn: {
    borderWidth: 1,
    width: 150,
    height: 80,
    padding: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  textColor: {
    color: 'white',
  },
};
