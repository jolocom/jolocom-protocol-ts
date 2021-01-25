import { ClaimInterface } from 'cred-types-jolocom-core'
import { JsonLdObject } from './linkedData'
import { CredentialOfferInputRequest, CredentialOfferRenderInfo, CredentialOfferMetadata } from "./interactionTokens"

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
 * This interface extends both verysion for backwards compatibility
 */
export interface CredentialOffer extends CredentialOffer2, CredentialOffer1 { }

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
      color?: string
    }
    text?: {
      color?: string
    }

  }
}

// TODO
// interface PresentationDefinition { }

export interface CredentialManifestDisplayMapping {
  path?: string[]
  text?: string
  label?: string
}

export interface CredentialDefinitionImage {
  uri: string
  alt: string
}
