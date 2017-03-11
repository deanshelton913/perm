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
      this.permutationLists = config.explicit.map((explicitConfig) => new PermutationList(Object.assign(config, explicitConfig)));
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