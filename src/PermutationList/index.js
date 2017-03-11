"use strict";
var _ = require('underscore');
var Permutation_1 = require("../Permutation");
var PermutationList = (function () {
    function PermutationList(config) {
        var _this = this;
        this.permutations = [];
        // build array of permutations
        PermutationList.cartesianProduct([config.clientIds, config.ageBands, config.countries, config.languages, config.envs]).forEach(function (array) {
            _this.permutations.push(new Permutation_1.default({ clientId: array[0], ageBand: array[1], country: array[2], language: array[3], env: array[4] }));
        });
    }
    PermutationList.cartesianProduct = function (args) {
        // This method creates cartesianProduct with arrays of arrays while keeping their column integrity.
        // We need the first column to always be the clientId, and so on...
        // This was stolen from http://stackoverflow.com/questions/12303989/cartesian-product-of-multiple-arrays-in-javascript
        return _.reduce(args, function (a, b) { return _.flatten(_.map(a, function (x) { return _.map(b, function (y) { return x.concat([y]); }); }), true); }, [[]]);
    };
    ;
    PermutationList.prototype.toArray = function () {
        return this.permutations.map(function (permutation) { return permutation.toObject(); });
    };
    return PermutationList;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PermutationList;
//# sourceMappingURL=index.js.map