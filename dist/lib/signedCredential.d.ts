import { ICredentialAttrs, IClaimSection } from './credential';
import { BaseMetadata } from 'cred-types-jolocom-core';
import { SignedJsonLdObject } from './linkedData';
export interface ISignedCredentialAttrs extends SignedJsonLdObject, ICredentialAttrs {
    id: string;
    issuer: string;
    issued: string;
    expires?: string;
    claim: IClaimSection;
}
export interface ISignedCredCreationArgs<T extends BaseMetadata> {
    metadata: T;
    claim: T['claimInterface'];
    subject: string;
}
export interface IKeyMetadata {
    derivationPath: string;
    keyId: string;
}
