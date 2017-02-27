
import { validate } from 'class-validator';
import {} from 'jasmine';
import Permutation from '../Permutation';

describe('Permutation', () => {
  let validParams = { ageBand: '', country: '', language: '', clientId: '', env: ''  }// kinda lame.

  beforeEach(() => {
    validParams = {
      ageBand: 'CHILD',
      country: 'US',
      language: 'en-US',
      clientId: 'FAKE-BUT.VALID',
      env: 'stg'
    }
  })

  describe('#ageBand', () => {
    describe('is invalid', () => {
      beforeEach( () => {
        validParams.ageBand = 'NOT_CHILD_TEEN_OR_ADULT';
      });

      it('returns errors when validating', (done) => {
        let instance = new Permutation(validParams);
        validate(instance).then((errors) => {
          expect(errors[0].property).toBe('ageBand')
          done();
        });
      });
    });

    describe('is valid', () => {
      it('returns no errors when validating', (done) => {
        let instance = new Permutation(validParams);
        validate(instance).then((errors) => {
          expect(errors.length).toBe(0)
          done();
        });
      });
    });

    describe('is invalid', () => {
      it('returns errors when validating', (done) => {
        validParams.ageBand = 'WRONG';
        let instance = new Permutation(validParams);
        validate(instance).then((errors) => {
          expect(errors.length).not.toBe(0)
          done();
        });
      });
    });
  });

  describe('#country', () => {
    describe('is invalid,', () => {
      beforeEach(() => {
        validParams.country = 'notCountry';
      });

      it('returns errors when validating', (done) => {
        let instance = new Permutation(validParams);
        validate(instance).then((errors) => {
          expect(errors[0].property).toBe('country')
          done();
        });
      });
    });

    describe('is valid', () => {
      it('returns no errors when validating', (done) => {
        let instance = new Permutation(validParams);
        validate(instance).then((errors) => {
          expect(errors.length).toBe(0)
          done();
        });
      });
    });
  });

  describe('#language', () => {
    describe('is invalid,', () => {
      beforeEach(() => {
        validParams.language = 'badLanguage!';
      });

      it('returns errors when validating', (done) => {
        let instance = new Permutation(validParams);
        validate(instance).then((errors) => {
          expect(errors[0].property).toBe('language')
          done();
        });
      });
    });

    describe('is valid', () => {
      it('returns no errors when validating', (done) => {
        let instance = new Permutation(validParams);
        validate(instance).then((errors) => {
          expect(errors.length).toBe(0)
          done();
        });
      });
    });
  });

  describe('#clientId', () => {
    describe('is invalid,', () => {
      beforeEach(() => {
        validParams.clientId = 'badclientId!';
      });

      it('returns errors when validating', (done) => {
        let instance = new Permutation(validParams);
        validate(instance).then((errors) => {
          expect(errors[0].property).toBe('clientId')
          done();
        });
      });
    });

    describe('is valid', () => {
      it('returns no errors when validating', (done) => {
        let instance = new Permutation(validParams);
        validate(instance).then((errors) => {
          expect(errors.length).toBe(0)
          done();
        });
      });
    });
  });
});

