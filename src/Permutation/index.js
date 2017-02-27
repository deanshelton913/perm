"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var class_validator_1 = require("class-validator");
var Permutation = (function () {
    function Permutation(params) {
        this.ageBand = params.ageBand;
        this.country = params.country;
        this.language = params.language;
        this.clientId = params.clientId;
        this.env = params.env;
    }
    Permutation.prototype.toObject = function () {
        return {
            ageBand: this.ageBand,
            country: this.country,
            language: this.language,
            clientId: this.clientId,
            env: this.env
        };
    };
    return Permutation;
}());
__decorate([
    class_validator_1.Matches(/^(ADULT|CHILD|TEEN)$/)
], Permutation.prototype, "ageBand", void 0);
__decorate([
    class_validator_1.Matches(/^[A-Z]{2}$/)
], Permutation.prototype, "country", void 0);
__decorate([
    class_validator_1.Matches(/^[a-z]{2}-[A-Z]{2}$/)
], Permutation.prototype, "language", void 0);
__decorate([
    class_validator_1.Matches(/^[A-Z\-\._]*$/)
], Permutation.prototype, "clientId", void 0);
__decorate([
    class_validator_1.Matches(/^[a-z]{2,5}$/)
], Permutation.prototype, "env", void 0);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Permutation;
//# sourceMappingURL=index.js.map