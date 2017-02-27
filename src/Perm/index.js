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
            var base_1 = {};
            base_1['clientIds'] = config.clientIds;
            base_1['ageBands'] = config.ageBands;
            base_1['countries'] = config.countries;
            base_1['languages'] = config.languages;
            base_1['env'] = config.env;
            this.permutationLists = config.explicit.map(function (config) { return new PermutationList_1.default(Object.assign(base_1, config)); });
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