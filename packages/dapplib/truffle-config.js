require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'hover enter flat sugar fan raise still minimum gesture opera bridge general'; 
let testAccounts = [
"0xdf234435a3f5af64bd4763fa01202284518501731babc1aaa4cce5d9dab6d953",
"0x14192d177a5f08fdd27156a4c13d119951fdb093611036b35f51916bcdf42320",
"0xc286274dbb94062de5b9a339f39d31068a5660970c1340e2bf9bfbcfd59770a0",
"0xb305f4142a85a771c31e3aae31a3bfba223ea6a30c403139b4002405169e8bb1",
"0xb6692f0314fca00ec7fecc437182018db2bac21ddf192df43632e94f6d07d79f",
"0x0334c8c52691fb3d09bb885641a52eb0574c2aea0e9aa93ae3722996a7d7d16a",
"0x6f04d563f917d735c5e172f7aba560daa9d3d407970a2453766cd87bc78161b2",
"0x756dc0d062bf6c9d3f52c68d8ead48067d0ee268ec33bb947b1491001cdaca40",
"0x9063439532f774d983ca8f2f128c94e1ddcc2891fb83828e5dea99ca7b4ae8bd",
"0x7040e89b8f5395024a4b632beb805e29f49515c50ed0271468eb53585a3ddd2b"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

