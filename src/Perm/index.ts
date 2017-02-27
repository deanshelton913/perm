import { Matches } from 'class-validator';
let _ = require('underscore');
import PermutationList from '../PermutationList';

export default class Perm {
  permutationLists: PermutationList[];

  constructor(config: any) {
    this.permutationLists = [];

    if(!config.explicit) {
      this.permutationLists.push(new PermutationList(config));
    }else{
      let base = {};

      base['clientIds'] = config.clientIds;
      base['ageBands'] = config.ageBands;
      base['countries'] = config.countries;
      base['languages'] = config.languages;
      base['env'] = config.env;

      this.permutationLists = config.explicit.map((config) => new PermutationList(Object.assign(base, config)));
    }
  }

  toArray() {
    let arrays = this.permutationLists.map((permutationList) => permutationList.toArray());
    return [].concat.apply([], arrays); // flatten
  }

  each(cb) {
    return this.toArray().forEach(cb);
  }
}