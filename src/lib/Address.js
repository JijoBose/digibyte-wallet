const digibyte = require('digibyte');
// const Mnemonic = require('digibytejs-mnemonic');
import Mnemonic from 'digicore-mnemonic';
const Promise = require('bluebird');

const Explorer = require('./Explorer');

const GAP = 20;

/**
 * USING ToAddress() instead of to
 */

/**
 * Derives a child keypair from a seed
 * @param {String} seed seed to derive child from
 * @param {Boolean} isChange Get the change address
 * @param {Number} index Index of derived child
 * @returns {Object}
 */
const deriveChildIndex = (seed, isChange, index) => {
  const path = `m/44'/14'/0'/${isChange ? '1' : '0'}/${index}`;
  const hdKey = seedToHdKey(seed);
  const key = hdKey.derive(path);
  return privKeyToAddress(key.privateKey);
};

/**
 * Gets a new Mnemonic seed
 * @returns {String} the seed as a string
 */
const getNewSeed = () => {
  const seed = new Mnemonic();
  return seed.toString();
};

/**
 * Generates a new Private key and Digiasset address
 * @returns {(String |Object)} address and privKey
 */
const getNewAddress = () => {
  const privKey = new digibyte.PrivateKey();
  return privKeyToAddress(privKey);
};

/**
 * Gets the balance for a seed based on the GAP limit
 * @param {String} seed Seed to get balance for
 * @param {Number} gap Amount of address indexes to search (Default is 20)
 * @returns {Array} [{ }]
 */
const getSeedBalance = (seed, gap) => {
  const pairs = [];
  const gapLength = gap || GAP;
  for (let i = 0; i <= gapLength; i++) {
    const mainPair = deriveChildIndex(seed, false, i);
    const changePair = deriveChildIndex(seed, true, i);
    pairs.push({mainPair, changePair, index: i});
  }
  return Promise.map(pairs, pair => {
    return Explorer.getBalance(pair.mainPair.address)
      .then(balance => {
        pair.mainPair.balance = balance;
        return Explorer.getBalance(pair.changePair.address);
      })
      .then(balance => {
        pair.changePair.balance = balance;
        return pair;
      });
  });
};

/**
 * Generates a DigiAsset Address from a Private Key
 * @param {string} key The Private Key to derive address from
 * @returns {(String |Object)} address and privKey
 */
const addressFromPrivkey = key => {
  const privKey = new digibyte.PrivateKey(key);
  return privKeyToAddress(privKey);
};

/**
 * Takes Digibyte.PrivateKey and turns into into an object with digiasset address
 * @param {digibyte.PrivateKey} privKey Private Key
 * @returns {(String |Object)} address and privKey
 */
const privKeyToAddress = privKey => {
  const address = privKey.toAddress();
  // todo use toDigiAssetString instead of toString once insight supports DAP address format
  return {address: address.toString(), privKey: privKey.toWIF()};
};

/**
 * Gets HD Private Key from seed
 * @param {string} seed 12 word seed
 * @returns {digibyte.HDPrivateKey} returns a HD Private Key
 */
const seedToHdKey = seed => {
  const mnemonic = new Mnemonic(seed);
  return mnemonic.toHDPrivateKey();
};

module.exports = {
  addressFromPrivkey,
  deriveChildIndex,
  getNewAddress,
  getNewSeed,
  getSeedBalance,
  seedToHdKey,
};
