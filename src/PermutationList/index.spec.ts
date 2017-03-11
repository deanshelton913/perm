import { validate } from 'class-validator';
import {} from 'jasmine';
import PermutationList from '../PermutationList';

describe('PermutationList', () => {
  let validParams = { ageBands: [], countries: [], languages: [], clientIds: [], envs: [] } // kinda lame.

  beforeEach(() => {
    validParams = {
      ageBands: ['CHILD'],
      countries: ['US'],
      languages: ['en-US'],
      clientIds: ['FAKE-BUT.VALID'],
      envs: ['stg']
    }
  });

  describe('#permutations', () => {
    describe('with valid args,', () => {
      it('returns cartesian product of permutable params', () => {
        let instance = new PermutationList(validParams);
        expect(instance.permutations[0].clientId).toEqual(validParams.clientIds[0]);
        expect(instance.permutations[0].country).toEqual(validParams.countries[0]);
        expect(instance.permutations[0].language).toEqual(validParams.languages[0]);
        expect(instance.permutations[0].ageBand).toEqual(validParams.ageBands[0]);
      });

      it('returns correct number of permutations', () => {
        expect(new PermutationList(validParams).permutations.length).toEqual(1);
        validParams.clientIds.push('BANANA');
        expect(new PermutationList(validParams).permutations.length).toEqual(2);
        validParams.languages.push('en-UK');
        expect(new PermutationList(validParams).permutations.length).toEqual(4);
        validParams.ageBands.push('TEEN');
        expect(new PermutationList(validParams).permutations.length).toEqual(8);
        validParams.ageBands.push('CHILD');
        expect(new PermutationList(validParams).permutations.length).toEqual(12);
      });
    });
  });

  describe('#toArray', () => {
    it('returns an array of permutations', () => {
       expect(new PermutationList(validParams).toArray().length).toEqual(1)
    })
  })
});

