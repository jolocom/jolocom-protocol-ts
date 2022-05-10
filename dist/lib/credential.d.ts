import { ClaimInterface } from 'cred-types-jolocom-core';
import { JsonLdObject } from './linkedData';
declare type ClaimType = string | number | boolean | {};
export declare type ClaimEntry = ClaimType | ClaimInterface;
export interface IClaimSection {
    id?: string;
    [x: string]: ClaimEntry;
}
export interface ICredentialAttrs extends JsonLdObject {
    type: string[];
    name?: string;
    claim: ClaimEntry;
}
export interface CredentialOfferInputRequest {
    [key: string]: string | null;
}
export declare enum CredentialRenderTypes {
    document = "document",
    permission = "permission",
    claim = "claim"
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
export interface CredentialOffer1 {
    type: string;
    requestedInput?: CredentialOfferInputRequest;
    renderInfo?: CredentialOfferRenderInfo;
    metadata?: CredentialOfferMetadata;
}
export interface CredentialOffer2 {
    type: string;
    locale?: string;
    issuer?: IssuerManifest;
    credential?: CredentialDefinition;
}
export interface CredentialOffer extends CredentialOffer2 {
}
export interface IssuerManifest {
    id: string;
    name?: string;
    styles?: {
        thumbnail?: CredentialDefinitionImage;
        hero?: CredentialDefinitionImage;
        background?: {
            color?: string;
        };
        text?: {
            color?: string;
        };
    };
}
export interface CredentialDefinition {
    schema: string;
    name?: string;
    description?: string;
    display?: {
        title?: CredentialManifestDisplayMapping;
        subtitle?: CredentialManifestDisplayMapping;
        description?: CredentialManifestDisplayMapping;
        properties?: CredentialManifestDisplayMapping[];
    };
    styles?: {
        thumbnail?: CredentialDefinitionImage;
        hero?: CredentialDefinitionImage;
        background?: {
            color?: string;
            image_url?: CredentialDefinitionImage;
        };
        text?: {
            color?: string;
        };
    };
}
export declare enum ClaimMimeType {
    text_plain = "text/plain",
    image_png = "image/png"
}
export interface CredentialManifestDisplayMapping {
    path?: string[];
    text?: string;
    label?: string;
    preview?: boolean;
    mime_type: ClaimMimeType;
}
export interface CredentialDefinitionImage {
    uri: string;
    alt: string;
}
export {};
