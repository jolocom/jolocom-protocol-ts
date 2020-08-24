"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyTypes = exports.KeyPaths = void 0;
var KeyPaths;
(function (KeyPaths) {
    KeyPaths["jolocomIdentityKey"] = "m/73'/0'/0'/0";
    KeyPaths["ethereumKey"] = "m/44'/60'/0'/0/0";
})(KeyPaths = exports.KeyPaths || (exports.KeyPaths = {}));
var KeyTypes;
(function (KeyTypes) {
    KeyTypes["secp256k1"] = "EcdsaSecp256k1";
    KeyTypes["x25519"] = "X25519";
})(KeyTypes = exports.KeyTypes || (exports.KeyTypes = {}));
//# sourceMappingURL=vaultedKeyProvider.js.map