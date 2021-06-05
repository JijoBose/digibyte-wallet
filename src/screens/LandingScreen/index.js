import React from 'react';
import {
  Image,
  TouchableOpacity,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import Colors from '../../theme';
import Layout from '../../components/Layout';

import styles from './styles';

const LandingScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const textTheme = {color: isDarkMode ? Colors.white : Colors.black};

  const goRecover = () => {
    // navigation.navigate({name: 'RecoverScreen'});
    navigation.navigate('stack', {screen: 'RecoverScreen'});
  };

  return (
    <Layout>
      <View style={[styles.mainContainer]}>
        <Image source={require('../../../assets/images/icon.png')} />
        <View style={styles.buttonContent}>
          <TouchableOpacity style={styles.digiButtonStyle}>
            <Text style={styles.boldButtonText}>CREATE NEW DIGI-ID</Text>
          </TouchableOpacity>
          <View style={styles.bottomButtonContainer}>
            <TouchableOpacity style={styles.transparentButton}>
              <Text style={textTheme}>Create new wallet</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => goRecover()}
              style={styles.transparentButton}>
              <Text style={textTheme}>Recover wallet</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default LandingScreen;
