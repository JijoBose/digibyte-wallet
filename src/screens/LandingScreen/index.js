import React from 'react';
import {
  Image,
  TouchableOpacity,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import Colors from '../../theme';
import styles from './styles';

const LandingScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const textTheme = {color: isDarkMode ? Colors.white : Colors.black};

  return (
    <>
      <View
        style={[
          {backgroundColor: isDarkMode ? Colors.black : Colors.white},
          styles.mainContainer,
        ]}>
        <Image source={require('../../../assets/images/icon.png')} />
        <View style={styles.buttonContent}>
          <TouchableOpacity style={styles.digiButtonStyle}>
            <Text style={styles.boldButtonText}>CREATE NEW DIGI-ID</Text>
          </TouchableOpacity>
          <View style={styles.bottomButtonContainer}>
            <TouchableOpacity style={styles.transparentButton}>
              <Text style={textTheme}>Create new wallet</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.transparentButton}>
              <Text style={textTheme}>Recover wallet</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default LandingScreen;
