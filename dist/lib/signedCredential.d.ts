import { ICredentialAttrs, IClaimSection } from './credential';
import { BaseMetadata } from 'cred-types-jolocom-core';
import { SignedJsonLdObject } from './linkedData';
export interface ISignedCredentialAttrs extends SignedJsonLdObject, ICredentialAttrs {
    id: string;
    issuer: string;
    issuanceDate: string;
    expires?: string;
    credentialSubject: IClaimSection;
}
export interface ISignedCredCreationArgs<T extends BaseMetadata> {
    metadata: T;
    credentialSubject: T['claimInterface'];
    subject: string;
}
export interface IKeyMetadata {
    derivationPath: string;
    keyId: string;
}
