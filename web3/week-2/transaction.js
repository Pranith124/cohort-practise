import { keygen } from "@noble/ed25519";
import { Keypair, PublicKey } from "@solana/web3.js";
import nacl from "tweetnacl";

const keypair = Keypair.generate();

const publickey = keypair.publicKey.toBase58();
const privateKey = keypair.secretKey;

console.log(publickey);

const message = new TextEncoder().encode("hello world");

const Signature = nacl.sign.detached(message,privateKey);

const result = nacl.sign.detached.verify(message,Signature,keypair.publicKey.toBytes());

const 
console.log(result);

