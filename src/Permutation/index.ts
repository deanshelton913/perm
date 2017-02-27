import { Matches, validate } from 'class-validator';

export default class Permutation {

  @Matches(/^(ADULT|CHILD|TEEN)$/)
  ageBand: string;

  @Matches(/^[A-Z]{2}$/)
  country: string;

  @Matches(/^[a-z]{2}-[A-Z]{2}$/)
  language: string;

  @Matches(/^[A-Z\-\._]*$/)
  clientId: string;

  @Matches(/^[a-z]{2,5}$/)
  env: string;

  constructor(params: { ageBand: string, country: string, language: string, clientId: string, env: string }) {
    this.ageBand = params.ageBand;
    this.country = params.country;
    this.language = params.language;
    this.clientId = params.clientId;
    this.env = params.env;
  }

  toObject() {
    return {
      ageBand: this.ageBand,
      country: this.country,
      language: this.language,
      clientId: this.clientId,
      env: this.env
    }
  }
}
