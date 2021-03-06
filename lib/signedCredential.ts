import { ICredentialAttrs, IClaimSection } from './credential'
import { BaseMetadata } from 'cred-types-jolocom-core'
import { SignedJsonLdObject } from './linkedData'

export interface ISignedCredentialAttrs extends SignedJsonLdObject, ICredentialAttrs {
  id: string
  issuer: string
  issued: string
  expires?: string
  claim: IClaimSection
}

/* Allows for neat claim autocompletion based on metadata type */
export interface ISignedCredCreationArgs<T extends BaseMetadata> {
  metadata: T
  claim: T['claimInterface']
  subject: string
}

export interface IKeyMetadata {
  derivationPath: string
  keyId: string
}
