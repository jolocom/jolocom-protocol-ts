/// <reference types="node" />
import { IDigestable } from './linkedDataSignature';
export declare enum KeyTypes {
    jolocomIdentityKey = "m/73'/0'/0'/0",
    ethereumKey = "m/44'/60'/0'/0/0"
}
export declare enum SchemeTypes {
    secp256k1 = "EcdsaSecp256k1",
    x25519 = "X25519"
}
export interface IVaultedKeyProvider {
    getPublicKey: (derivationArgs: IKeyDerivationArgs, scheme?: SchemeTypes) => Buffer;
    getPrivateKey: (derivationArgs: IKeyDerivationArgs, scheme?: SchemeTypes) => Buffer;
    sign: (derivationArgs: IKeyDerivationArgs, digest: Buffer) => Buffer;
    signDigestable: (derivationArgs: IKeyDerivationArgs, toSign: IDigestable) => Promise<Buffer>;
    asymEncrypt: (data: Buffer, pubKey: Buffer) => Promise<string>;
    asymDecrypt: (data: string, derivationArgs: IKeyDerivationArgs) => Promise<Buffer>;
    sealBox: (data: Buffer, target: Buffer) => string;
    unsealBox: (box: string, derivationArgs: IKeyDerivationArgs) => Buffer;
}
export interface IKeyDerivationArgs {
    encryptionPass: string;
    derivationPath: string;
}
