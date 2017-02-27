"use strict";
var class_validator_1 = require("class-validator");
var Permutation_1 = require("../Permutation");
describe('Permutation', function () {
    var validParams = { ageBand: '', country: '', language: '', clientId: '', env: '' }; // kinda lame.
    beforeEach(function () {
        validParams = {
            ageBand: 'CHILD',
            country: 'US',
            language: 'en-US',
            clientId: 'FAKE-BUT.VALID',
            env: 'stg'
        };
    });
    describe('#ageBand', function () {
        describe('is invalid', function () {
            beforeEach(function () {
                validParams.ageBand = 'NOT_CHILD_TEEN_OR_ADULT';
            });
            it('returns errors when validating', function (done) {
                var instance = new Permutation_1.default(validParams);
                class_validator_1.validate(instance).then(function (errors) {
                    expect(errors[0].property).toBe('ageBand');
                    done();
                });
            });
        });
        describe('is valid', function () {
            it('returns no errors when validating', function (done) {
                var instance = new Permutation_1.default(validParams);
                class_validator_1.validate(instance).then(function (errors) {
                    expect(errors.length).toBe(0);
                    done();
                });
            });
        });
        describe('is invalid', function () {
            it('returns errors when validating', function (done) {
                validParams.ageBand = 'WRONG';
                var instance = new Permutation_1.default(validParams);
                class_validator_1.validate(instance).then(function (errors) {
                    expect(errors.length).not.toBe(0);
                    done();
                });
            });
        });
    });
    describe('#country', function () {
        describe('is invalid,', function () {
            beforeEach(function () {
                validParams.country = 'notCountry';
            });
            it('returns errors when validating', function (done) {
                var instance = new Permutation_1.default(validParams);
                class_validator_1.validate(instance).then(function (errors) {
                    expect(errors[0].property).toBe('country');
                    done();
                });
            });
        });
        describe('is valid', function () {
            it('returns no errors when validating', function (done) {
                var instance = new Permutation_1.default(validParams);
                class_validator_1.validate(instance).then(function (errors) {
                    expect(errors.length).toBe(0);
                    done();
                });
            });
        });
    });
    describe('#language', function () {
        describe('is invalid,', function () {
            beforeEach(function () {
                validParams.language = 'badLanguage!';
            });
            it('returns errors when validating', function (done) {
                var instance = new Permutation_1.default(validParams);
                class_validator_1.validate(instance).then(function (errors) {
                    expect(errors[0].property).toBe('language');
                    done();
                });
            });
        });
        describe('is valid', function () {
            it('returns no errors when validating', function (done) {
                var instance = new Permutation_1.default(validParams);
                class_validator_1.validate(instance).then(function (errors) {
                    expect(errors.length).toBe(0);
                    done();
                });
            });
        });
    });
    describe('#clientId', function () {
        describe('is invalid,', function () {
            beforeEach(function () {
                validParams.clientId = 'badclientId!';
            });
            it('returns errors when validating', function (done) {
                var instance = new Permutation_1.default(validParams);
                class_validator_1.validate(instance).then(function (errors) {
                    expect(errors[0].property).toBe('clientId');
                    done();
                });
            });
        });
        describe('is valid', function () {
            it('returns no errors when validating', function (done) {
                var instance = new Permutation_1.default(validParams);
                class_validator_1.validate(instance).then(function (errors) {
                    expect(errors.length).toBe(0);
                    done();
                });
            });
        });
    });
});
//# sourceMappingURL=index.spec.js.map