require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food champion rescue noise concert gentle light army gas'; 
let testAccounts = [
"0x57c2b92e601416a42db7739e65bce148e605ff5851ed8e5ae0cb9af457129160",
"0xcbd8bd95ac83a99211e5a5ab03c3d4199257a0ace4c61835b06dbd98b7c522b4",
"0x41fda4551ac61b3b44007a46874ac29d5bb65205bdd649e0152998e11dc926d0",
"0xbf77098d97b133362318cdbeab89b45cd7392ef5bc01625be25982bcb8162c5a",
"0xd01bf78927d2cd02d0ea0093d291bd3cefd93cd609a400ca251c855df10fc300",
"0xc813531a613c57fe14e05b0131c188cca0dd944c0218f06d02e6da2c97f2dfff",
"0xcc2253378830783897d0eb73a516fb1fe6ffeb55223c6b998b3df8c38c3acac8",
"0x1e72e54715fc04f569dd09b49f6c4063c9c15cd7954816a7d13776c38c268b4c",
"0x6eaeb5c5d4338f5dd2abc8796c5e1bb7d8cad9d1206c6888437e9bf86d10f4c0",
"0x19880c33394f4948b15265dd5a4d2c82c725398a92cd6a383d35129fa8977fd8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
