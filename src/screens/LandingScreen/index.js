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
        <View
          style={{
            height: 100,
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity style={styles.digiButtonStyle}>
            <Text style={styles.boldButtonText}>CREATE NEW DIGI-ID</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 20,
              height: 100,
              backgroundColor: 'white',
              width: '100%',
            }}>
            <Text style={{}}>CREATE NEW DIGI-ID</Text>
          </TouchableOpacity>
        </View>
        {/* <Section title="Step One">
        Edit <Text style={styles.highlight}>App.js</Text> to change this screen
        and then come back to see your edits.
      </Section>
      <Section title="Learn More">
        Read the docs to discover what to do next:
      </Section> */}
      </View>
    </>
  );
};

export default LandingScreen;
