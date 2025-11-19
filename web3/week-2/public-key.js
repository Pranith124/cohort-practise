

// in crypto  graphy we uses assymetric encryption

// hello ------------> (encrypt using private key )Meaage---------->(the user can decript using public key)

// asymetric algorithums
// 1)RSA
// 2)elliptic curve cryptography(ECDSA)-btc,eth
// 3)edwards-curve Digital Signature Algorithum(ecdsa)-sol

//common elliptic curves avvailable
//secp256k1--- BTC  and ETH
//ed25519----SOL
import * as ed from "@noble/ed25519";

async function main(){

    const privateKey= ed.utils.ran;
    console.log(privateKey);
}

main();