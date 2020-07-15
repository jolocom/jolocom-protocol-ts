"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemeTypes = exports.KeyTypes = void 0;
var KeyTypes;
(function (KeyTypes) {
    KeyTypes["jolocomIdentityKey"] = "m/73'/0'/0'/0";
    KeyTypes["ethereumKey"] = "m/44'/60'/0'/0/0";
})(KeyTypes = exports.KeyTypes || (exports.KeyTypes = {}));
var SchemeTypes;
(function (SchemeTypes) {
    SchemeTypes["secp256k1"] = "EcdsaSecp256k1";
    SchemeTypes["x25519"] = "X25519";
})(SchemeTypes = exports.SchemeTypes || (exports.SchemeTypes = {}));
//# sourceMappingURL=vaultedKeyProvider.js.map