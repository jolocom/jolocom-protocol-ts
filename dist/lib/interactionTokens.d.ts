export interface IJWTHeader {
    alg: string;
    typ: string;
}
interface IPayload {
    iss?: string;
    iat?: number;
    typ: string;
    [x: string]: any;
}
export interface IJSONWebTokenAttrs {
    header: IJWTHeader;
    payload: IPayload;
    signature: string;
}
export declare enum InteractionType {
    CredentialRequest = "credentialRequest",
    CredentialResponse = "credentialResponse",
    CredentialsReceive = "credentialsReceive",
    Authentication = "authentication",
    CredentialOfferRequest = "credentialOfferRequest",
    CredentialOfferResponse = "credentialOfferResponse",
    PaymentRequest = "paymentRequest",
    PaymentResponse = "paymentResponse"
}
export interface IInteractionToken {
    type: InteractionType | string;
}
import { TransactionOptions } from './contracts';
import { ISignedCredentialAttrs } from './signedCredential';
export interface IPaymentRequestAttrs {
    callbackURL: string;
    description: string;
    transactionOptions: TransactionOptions;
}
export interface IPaymentResponseAttrs {
    txHash: string;
}
export declare enum CredentialRenderTypes {
    document = "document",
    permission = "permission",
    claim = "claim"
}
export interface CredentialOfferInputRequest {
    [key: string]: string | null;
}
export interface CredentialOfferRenderInfo {
    renderAs?: CredentialRenderTypes;
    background?: {
        color?: string;
        url?: string;
    };
    logo?: {
        url: string;
    };
    text?: {
        color: string;
    };
}
export interface CredentialOfferMetadata {
    asynchronous?: boolean;
}
export interface CredentialOffer {
    type: string;
    requestedInput?: CredentialOfferInputRequest;
    renderInfo?: CredentialOfferRenderInfo;
    metadata?: CredentialOfferMetadata;
}
export interface CredentialOfferRequestAttrs {
    callbackURL: string;
    offeredCredentials: CredentialOffer[];
}
export interface CredentialOfferResponseSelection {
    type: string;
    providedInput?: {
        [key: string]: string | null;
    };
}
export interface CredentialOfferResponseAttrs {
    callbackURL: string;
    selectedCredentials: CredentialOfferResponseSelection[];
}
export interface ICredentialRequestAttrs {
    callbackURL: string;
    credentialRequirements: ICredentialRequest[];
}
export interface ICredentialResponseAttrs {
    callbackURL: string;
    suppliedCredentials: ISignedCredentialAttrs[];
}
export interface ICredentialsReceiveAttrs {
    signedCredentials: ISignedCredentialAttrs[];
}
export interface ICredentialRequest {
    type: string[];
    constraints: IConstraint[];
}
export interface IAuthenticationAttrs {
    callbackURL: string;
    description: string;
}
export declare type Operator = '==' | '!=' | '<' | '>';
export interface IConstraint {
    [operator: string]: boolean[] | Array<{
        var: string;
    } | string | Comparable>;
}
export declare type Comparable = number | Date;
declare type ConstraintFunc = (field: string, value: string) => IConstraint;
declare type ComparableConstraintFunc = (field: string, value: Comparable) => IConstraint;
export interface IExposedConstraintFunctions {
    is: ConstraintFunc;
    not: ConstraintFunc;
    greater: ComparableConstraintFunc;
    smaller: ComparableConstraintFunc;
}
export {};
