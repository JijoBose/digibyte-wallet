import React, {useState} from 'react';
import {
  View,
  Text,
  useColorScheme,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import bip39 from 'react-native-bip39';
import Colors from '../../theme';
import Layout from '../../components/Layout';
import styles from './styles';

const RecoverScreen = () => {
  const [seed, setSeed] = useState('');
  const isDarkMode = useColorScheme() === 'dark';
  const textTheme = {color: isDarkMode ? Colors.white : Colors.black};

  const generateSeed = async () => {
    const mnemonic = await bip39.entropyToMnemonic('133755ff');
    setSeed(mnemonic);
  };

  return (
    <Layout>
      <View style={styles.mainContainer}>
        <View style={styles.contentPadding}>
          <Text style={[textTheme, styles.title]}>
            Enter the Personal Recovery Key for the DigiWallet you want to
            recover
          </Text>
          <Text>{seed}</Text>
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
          onPress={() => generateSeed()}
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
