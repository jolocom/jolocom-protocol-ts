"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CredentialRenderTypes = exports.InteractionType = void 0;
var InteractionType;
(function (InteractionType) {
    InteractionType["CredentialRequest"] = "credentialRequest";
    InteractionType["CredentialResponse"] = "credentialResponse";
    InteractionType["CredentialsReceive"] = "credentialsReceive";
    InteractionType["Authentication"] = "authentication";
    InteractionType["CredentialOfferRequest"] = "credentialOfferRequest";
    InteractionType["CredentialOfferResponse"] = "credentialOfferResponse";
    InteractionType["PaymentRequest"] = "paymentRequest";
    InteractionType["PaymentResponse"] = "paymentResponse";
})(InteractionType = exports.InteractionType || (exports.InteractionType = {}));
var CredentialRenderTypes;
(function (CredentialRenderTypes) {
    CredentialRenderTypes["document"] = "document";
    CredentialRenderTypes["permission"] = "permission";
    CredentialRenderTypes["claim"] = "claim";
})(CredentialRenderTypes = exports.CredentialRenderTypes || (exports.CredentialRenderTypes = {}));
//# sourceMappingURL=interactionTokens.js.map