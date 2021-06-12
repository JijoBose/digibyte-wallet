import React, {useState} from 'react';
import {
  Alert,
  View,
  Text,
  useColorScheme,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Mnemonic from 'digicore-mnemonic';
import Colors from '../../theme';
import Layout from '../../components/Layout';
import styles from './styles';
import Address from '../../lib/Address';
import testSeed from './seed';

const RecoverScreen = () => {
  const [seed, setSeed] = useState(testSeed);
  const isDarkMode = useColorScheme() === 'dark';
  const textTheme = {color: isDarkMode ? Colors.white : Colors.black};

  const restoreSeed = async () => {
    var valid = Mnemonic.isValid(seed);
    if (!valid) {
      Alert.alert('Seed not valid');
      return;
    }
    const pair = await Address.deriveChildIndex(seed, false, 0);
    console.log(pair);
  };

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
            value={seed}
            onChangeText={text => setSeed(text)}
            autoCapitalize="none"
          />
        </View>
        <TouchableOpacity
          onPress={() => restoreSeed()}
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
