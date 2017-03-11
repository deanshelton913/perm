"use strict";
var _ = require('underscore');
var PermutationList_1 = require("../PermutationList");
var Perm = (function () {
    function Perm(config) {
        this.permutationLists = [];
        if (!config.explicit) {
            this.permutationLists.push(new PermutationList_1.default(config));
        }
        else {
            this.permutationLists = config.explicit.map(function (explicitConfig) { return new PermutationList_1.default(Object.assign(config, explicitConfig)); });
        }
    }
    Perm.prototype.toArray = function () {
        var arrays = this.permutationLists.map(function (permutationList) { return permutationList.toArray(); });
        return [].concat.apply([], arrays); // flatten
    };
    Perm.prototype.each = function (cb) {
        return this.toArray().forEach(cb);
    };
    return Perm;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Perm;
//# sourceMappingURL=index.js.map