import React from 'react';
import {ScrollView, Text, View, useColorScheme} from 'react-native';
import Section from '../../components/Section';
import Header from '../../components/Header';
import Colors from '../../theme';
import styles from './styles';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <Header />
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <Section title="Step One">
          Edit <Text style={styles.highlight}>App.js</Text> to change this
          screen and then come back to see your edits.
        </Section>
        <Section title="Learn More">
          Read the docs to discover what to do next:
        </Section>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
