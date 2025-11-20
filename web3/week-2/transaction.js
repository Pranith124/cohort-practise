import { keygen } from "@noble/ed25519";
import { EpochSchedule, Keypair, PublicKey } from "@solana/web3.js";
import nacl from "tweetnacl";

const keypair = Keypair.generate();

const publickey = keypair.publicKey.toBase58();
const privateKey = keypair.secretKey;

console.log(publickey);

const message = new TextEncoder().encode("hello world");

const Signature = nacl.sign.detached(message,privateKey);

const result = nacl.sign.detached.verify(message,Signature,keypair.publicKey.toBytes());


console.log(result);


// hd wallets
// generating the seed phrase from the seed phrase we can creare as many wallets as we want and we can back up this wallets and we can login this wallets in differnt wallets (phantom,webpack)

// Context-Hashing(SHA-256),Encryption(EDDSA,ECDSA),Public and Private keys,HD Wallets
// keccak-256
// Frontend vs backend,Http Servers
// RPC, JSON-RPC
// Wei, Lamports
// RPC server
// Common RPC calls on Solana
// Common RPC calls on ETH
// Creating a web based wallet


