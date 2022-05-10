import { ClaimInterface } from 'cred-types-jolocom-core'
import { JsonLdObject } from './linkedData'

type ClaimType = string | number | boolean | {}
/**
 * @public
 */
export type ClaimEntry = ClaimType | ClaimInterface

/**
 * @example
 * ```
 * {
 *  id: 'did:jolo:abcdef',
 *  givenName: 'Example',
 *  familyName: 'Example'
 * }
 * ```
 *
 * @param id - The did of the credential subject
 */
export interface IClaimSection {
  id?: string
  [x: string]: ClaimEntry
}

export interface ICredentialAttrs extends JsonLdObject {
  type: string[]
  name?: string
  claim: ClaimEntry
}

export interface CredentialOfferInputRequest {
  [key: string]: string | null
}

export enum CredentialRenderTypes {
  document = 'document',
  permission = 'permission',
  claim = 'claim',
}

export interface CredentialOfferRenderInfo {
  renderAs?: CredentialRenderTypes
  background?: {
    color?: string // Hex value
    url?: string // URL to base64 encoded background image
  }
  logo?: {
    url: string // URL to base64 encoded image
  }
  text?: {
    color: string // Hex value
  }
}

export interface CredentialOfferMetadata {
  asynchronous?: boolean
}


/**
 * This is here for backwards compatibility
 * @deprecated
 */
export interface CredentialOffer1 {
  type: string
  // NOTE: DEPRECATED FIXME remove @next
  // They were all optional and client apps (i.e. SmartWallet) didn't care about
  // them too much
  requestedInput?: CredentialOfferInputRequest
  renderInfo?: CredentialOfferRenderInfo
  metadata?: CredentialOfferMetadata
}

/**
 * CredentialOffer2 is based on the Credential Manifest Spec: https://identity.foundation/credential-manifest/
 */
export interface CredentialOffer2 {
  type: string
  locale?: string
  issuer?: IssuerManifest
  credential?: CredentialDefinition
  // TODO
  // presentation_definition?: PresentationDefinition
}

/**
 * This interface extends both versions for backwards compatibility
 */
export interface CredentialOffer extends CredentialOffer2 { }

export interface IssuerManifest {
  id: string
  name?: string
  styles?: {
    thumbnail?: CredentialDefinitionImage
    hero?: CredentialDefinitionImage
    background?: {
      color?: string
    }
    text?: {
      color?: string
    }
  }
}

export interface CredentialDefinition {
  schema: string
  name?: string
  description?: string
  display?: {
    title?: CredentialManifestDisplayMapping
    subtitle?: CredentialManifestDisplayMapping
    description?: CredentialManifestDisplayMapping
    properties?: CredentialManifestDisplayMapping[]
  }
  styles?: {
    thumbnail?: CredentialDefinitionImage
    hero?: CredentialDefinitionImage
    background?: {
      color?: string,
      image_url?: CredentialDefinitionImage
    }
    text?: {
      color?: string
    }

  }
}

enum ClaimMimeType {
  text_plain = "text/plain",
  image_png = "image/png",
}

export interface CredentialManifestDisplayMapping {
  path?: string[]
  text?: string
  label?: string
  preview?: boolean,
  mime_type: ClaimMimeType,
}

export interface CredentialDefinitionImage {
  uri: string
  alt: string
}
