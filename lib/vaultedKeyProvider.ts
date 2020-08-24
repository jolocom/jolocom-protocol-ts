import { IDigestable } from './linkedDataSignature'

export enum KeyPaths {
  jolocomIdentityKey = "m/73'/0'/0'/0",
  ethereumKey = "m/44'/60'/0'/0/0",
}

export enum KeyTypes {
  secp256k1 = "EcdsaSecp256k1",
  x25519 = "X25519"
}

export interface IVaultedKeyProvider {
  getPublicKey: (derivationArgs: IKeyDerivationArgs, scheme?: KeyTypes) => Buffer
  getPrivateKey: (derivationArgs: IKeyDerivationArgs, scheme?: KeyTypes) => Buffer
  sign: (derivationArgs: IKeyDerivationArgs, digest: Buffer) => Buffer
  signDigestable: (
    derivationArgs: IKeyDerivationArgs,
    toSign: IDigestable,
  ) => Promise<Buffer>
  asymEncrypt: (data: Buffer, pubKey: Buffer) => Promise<string>
  asymDecrypt: (
    data: string,
    derivationArgs: IKeyDerivationArgs,
  ) => Promise<Buffer>,
  sealBox: (data: Buffer, target: Buffer) => string,
  unsealBox: (box: string, derivationArgs: IKeyDerivationArgs) => Buffer
}

export interface IKeyDerivationArgs {
  encryptionPass: string
  derivationPath: string
}
