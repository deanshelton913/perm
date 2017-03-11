import { Matches } from 'class-validator';
let _ = require('underscore');
import PermutationList from '../PermutationList';

export default class Perm {
  permutationLists: PermutationList[];
  config: any;

  constructor(config: any) {
    this.permutationLists = [];
    this.config = config;

    if(!config.explicit) {
      this.permutationLists.push(new PermutationList(config));
    }else{
      this.permutationLists = config.explicit.map((explicitConfig) => new PermutationList(Object.assign(config, explicitConfig)));
    }
  }

  merge(config: { ageBands: string[], countries: string[], languages: string[], clientIds: string[], envs: string[] }) {
    var mergedConfig = {};
    for(var key in config) {
      mergedConfig[key] = _.union(config[key], this.config[key])
      if(mergedConfig[key].length > 1){
        mergedConfig[key] = mergedConfig[key].filter((x) => x); // kill nulls
      }
    }
    if(this.config.explicit) mergedConfig['explicit'] = this.config.explicit;
    return new Perm(mergedConfig);
  }

  toArray() {
    let arrays = this.permutationLists.map((permutationList) => permutationList.toArray());
    return [].concat.apply([], arrays); // flatten
  }

  each(cb) {
    return this.toArray().forEach(cb);
  }
}