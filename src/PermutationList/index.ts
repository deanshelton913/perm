import { Matches } from 'class-validator';
let _ = require('underscore');
import Permutation from '../Permutation';

export default class PermutationList {
  permutations: Permutation[];

  constructor(config: { clientIds: string[], ageBands: string[], countries: string[], languages: string[], envs: string[] }) {
    this.permutations = [];

    // build array of permutations
    PermutationList.cartesianProduct([config.clientIds, config.ageBands, config.countries, config.languages, config.envs]).forEach((array) => {
      this.permutations.push(new Permutation({clientId: array[0], ageBand: array[1], country: array[2], language: array[3], env: array[4]}));
    })
  }

  static cartesianProduct(args: string[][]) {
    // This method creates cartesianProduct with arrays of arrays while keeping their column integrity.
    // We need the first column to always be the clientId, and so on...
    // This was stolen from http://stackoverflow.com/questions/12303989/cartesian-product-of-multiple-arrays-in-javascript
     return _.reduce(args, (a, b) => _.flatten(_.map(a, (x) => _.map(b, (y) => x.concat([y]))), true), [ [] ]);
  };

  toArray() {
    return this.permutations.map((permutation) => permutation.toObject())
  }
}
