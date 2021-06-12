const request = require('request');

const DIGIEXPLORER = 'https://explorer-1.us.digibyteservers.io/api/';

const getRequest = url => {
  return new Promise((resolve, reject) => {
    const opts = {
      url,
      json: true,
    };
    request(opts, (err, resp, body) => {
      if (err) {
        return reject(err);
      }
      if (resp.statusCode === 200 || resp.statusCode === 201) {
        return resolve(body);
      }
      return reject(new Error('There was an error with the request'));
    });
  });
};

/**
 * Gets an address balance
 * @param {string} address Address to get balance for
 * @returns {number} the balance
 */
const getBalance = address => {
  const url = `${DIGIEXPLORER}addr/${address}/balance`;
  return getRequest(url);
};

/**
 * Gets utxos corrosponding to the address
 * @param {string} address Address to get balance for
 * @returns {Array} Array of utxos
 */
const getUtxos = address => {
  const url = `${DIGIEXPLORER}addr/${address}/utxo`;
  return getRequest(url);
};

module.exports = {
  getBalance,
  getRequest,
  getUtxos,
};
