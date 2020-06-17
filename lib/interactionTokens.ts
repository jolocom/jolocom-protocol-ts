export interface IJWTHeader {
  alg: string
  typ: string
}

interface IPayload {
  iss?: string
  iat?: number
  typ: string
  [x: string]: any
}

export interface IJSONWebTokenAttrs {
  header: IJWTHeader
  payload: IPayload
  signature: string
}

export enum InteractionType {
  CredentialRequest = 'credentialRequest',
  CredentialResponse = 'credentialResponse',
  CredentialsReceive = 'credentialsReceive',
  Authentication = 'authentication',
  CredentialOfferRequest = 'credentialOfferRequest',
  CredentialOfferResponse = 'credentialOfferResponse',
  PaymentRequest = 'paymentRequest',
  PaymentResponse = 'paymentResponse',
}


import { TransactionOptions } from './contracts'
import { ISignedCredentialAttrs } from './signedCredential'

export interface IPaymentRequestAttrs {
  callbackURL: string
  description: string
  transactionOptions: TransactionOptions
}

export interface IPaymentResponseAttrs {
  txHash: string
}

export enum CredentialRenderTypes {
  document = 'document',
  permission = 'permission',
  claim = 'claim',
}

export interface CredentialOfferInputRequest {
  [key: string]: string | null
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

export interface CredentialOffer {
  type: string
  requestedInput?: CredentialOfferInputRequest
  renderInfo?: CredentialOfferRenderInfo
  metadata?: CredentialOfferMetadata
}

export interface CredentialOfferRequestAttrs {
  callbackURL: string
  offeredCredentials: CredentialOffer[]
}

export interface CredentialOfferResponseSelection {
  type: string
  providedInput?: {
    [key: string]: string | null
  }
}

export interface CredentialOfferResponseAttrs {
  callbackURL: string
  selectedCredentials: CredentialOfferResponseSelection[]
}

export interface ICredentialRequestAttrs {
  callbackURL: string
  credentialRequirements: ICredentialRequest[]
}

export interface ICredentialResponseAttrs {
  callbackURL: string
  suppliedCredentials: ISignedCredentialAttrs[]
}

export interface ICredentialsReceiveAttrs {
  signedCredentials: ISignedCredentialAttrs[]
}

export interface ICredentialRequest {
  type: string[]
  constraints: IConstraint[]
}

export interface IAuthenticationAttrs {
  callbackURL: string
  description: string
}

/* Related to constraint functions */

export type Operator = '==' | '!=' | '<' | '>'

export interface IConstraint {
  [operator: string]: boolean[] | Array<{ var: string } | string | Comparable>
}

export type Comparable = number | Date
type ConstraintFunc = (field: string, value: string) => IConstraint
type ComparableConstraintFunc = (
  field: string,
  value: Comparable,
) => IConstraint

export interface IExposedConstraintFunctions {
  is: ConstraintFunc
  not: ConstraintFunc
  greater: ComparableConstraintFunc
  smaller: ComparableConstraintFunc
}
