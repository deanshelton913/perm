
import {} from 'jasmine';
import Perm from '.';
import PermutationList from '../PermutationList';

describe('Perm', () => {
  let singlePermParams = { ageBands: [], countries: [], languages: [], clientIds: [], env: [] } // kinda lame.
  let multiplePermListParams = {
    ageBands: ['ADULT'],
    languages: ['en-US'],
    env: ['stg'],
    explicit: [
      {
        clientIds: ['UK-CLIENT.FAKE', 'OTHER-UK.FAKE'],
        countries: ['GB']
      },
      {
        clientIds: ['GERMAN-GATED-CLIENT.FAKE'],
        countries: ['DE']
      }
    ]
  }

  beforeEach(() => {
    singlePermParams = {
      ageBands: ['CHILD'],
      countries: ['US'],
      languages: ['en-US'],
      clientIds: ['FAKE-BUT.VALID'],
      env: ['stg']
    }
  })

  describe('#permutationLists', () => {
    describe('with sigle PermList args,', () => {
      it('returns an array of PermutationLists', () => {
        const instance = new Perm(singlePermParams);
        expect(instance.permutationLists.length).toEqual(1)
      });
    });

    describe('with multiple/custom PermList args,', () => {


      it('returns an array of PermutationLists', () => {
        const instance = new Perm(multiplePermListParams);
        expect(instance.permutationLists[0].permutations[0].clientId).toEqual(multiplePermListParams.explicit[0].clientIds[0])
        expect(instance.permutationLists[0].permutations[0].country).toEqual(multiplePermListParams.explicit[0].countries[0])
        expect(instance.permutationLists[1].permutations[0].clientId).toEqual(multiplePermListParams.explicit[1].clientIds[0])
        expect(instance.permutationLists[1].permutations[0].country).toEqual(multiplePermListParams.explicit[1].countries[0])
        expect(instance.permutationLists[0].permutations.length).toEqual(2);
      });
    });
  });

  describe('#toArray', () => {
    it('returns a single array of all permutations', () =>{
      const instance = new Perm(multiplePermListParams);
      expect(instance.toArray().length).toBe(3);
    })
  })

  describe('#each', () => {
    it('calls my callback correct # of times, with the right data', () =>{
      const instance = new Perm(multiplePermListParams);
      let spy = jasmine.createSpy('spy')

      instance.each((spy))

      expect(spy).toHaveBeenCalledTimes(3);

      expect(spy.calls.first().args[0]).toEqual({
        clientId: multiplePermListParams.explicit[0].clientIds[0],
        ageBand: multiplePermListParams.ageBands[0],
        country: multiplePermListParams.explicit[0].countries[0],
        language: multiplePermListParams.languages[0],
        env: multiplePermListParams.env[0]
      })

      expect(spy.calls.argsFor(1)[0]).toEqual({
        clientId: multiplePermListParams.explicit[0].clientIds[1],
        ageBand: multiplePermListParams.ageBands[0],
        country: multiplePermListParams.explicit[0].countries[0],
        language: multiplePermListParams.languages[0],
        env: multiplePermListParams.env[0]
      })
    })
  })
});
