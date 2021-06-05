import React from 'react';
import {
  View,
  Text,
  useColorScheme,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../theme';
import Layout from '../../components/Layout';
import styles from './styles';

const RecoverScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const textTheme = {color: isDarkMode ? Colors.white : Colors.black};

  return (
    <Layout>
      <View style={styles.mainContainer}>
        <View style={styles.contentPadding}>
          <Text style={[textTheme, styles.title]}>
            Enter the Personal Recovery Key for the DigiWallet you want to
            recover
          </Text>
        </View>
        <View style={styles.contentPadding}>
          <TextInput
            style={{
              ...styles.recoveryText,
              borderColor: textTheme.color,
              color: textTheme.color,
            }}
            autoCapitalize="none"
          />
        </View>
        <TouchableOpacity
          style={{
            ...styles.restoreBtn,
          }}>
          <Text style={styles.textColor}>Restore</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default RecoverScreen;
