import { ILinkedDataSignatureAttrs } from './linkedDataSignature'
import { ContextEntry, JsonLdObject } from '../'

export interface IDidDocumentAttrs {
  '@context': ContextEntry[] | string
  specVersion?: number
  id: string
  authentication?:
    | IAuthenticationSectionAttrsv0[]
    | IAuthenticationSectionAttrs[]
  publicKey?: IPublicKeySectionAttrs[]
  service?: IServiceEndpointSectionAttrs[]
  created?: string
  proof?: ILinkedDataSignatureAttrs
}

export interface IPublicKeySectionAttrs extends JsonLdObject {
  id: string
  type: string
  publicKeyHex: string
}

export interface IServiceEndpointSectionAttrs extends JsonLdObject {
  id: string
  type: string
  serviceEndpoint: string
  description: string
}

export interface IAuthenticationSectionAttrsv0 {
  publicKey: string
  type: string
}

export type IAuthenticationSectionAttrs = IPublicKeySectionAttrs | string
