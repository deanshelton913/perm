"use strict";
var PermutationList_1 = require("../PermutationList");
describe('PermutationList', function () {
    var validParams = { ageBands: [], countries: [], languages: [], clientIds: [], envs: [] }; // kinda lame.
    beforeEach(function () {
        validParams = {
            ageBands: ['CHILD'],
            countries: ['US'],
            languages: ['en-US'],
            clientIds: ['FAKE-BUT.VALID'],
            envs: ['stg']
        };
    });
    describe('#permutations', function () {
        describe('with valid args,', function () {
            it('returns cartesian product of permutable params', function () {
                var instance = new PermutationList_1.default(validParams);
                expect(instance.permutations[0].clientId).toEqual(validParams.clientIds[0]);
                expect(instance.permutations[0].country).toEqual(validParams.countries[0]);
                expect(instance.permutations[0].language).toEqual(validParams.languages[0]);
                expect(instance.permutations[0].ageBand).toEqual(validParams.ageBands[0]);
            });
            it('returns correct number of permutations', function () {
                expect(new PermutationList_1.default(validParams).permutations.length).toEqual(1);
                validParams.clientIds.push('BANANA');
                expect(new PermutationList_1.default(validParams).permutations.length).toEqual(2);
                validParams.languages.push('en-UK');
                expect(new PermutationList_1.default(validParams).permutations.length).toEqual(4);
                validParams.ageBands.push('TEEN');
                expect(new PermutationList_1.default(validParams).permutations.length).toEqual(8);
                validParams.ageBands.push('CHILD');
                expect(new PermutationList_1.default(validParams).permutations.length).toEqual(12);
            });
        });
    });
    describe('#toArray', function () {
        it('returns an array of permutations', function () {
            expect(new PermutationList_1.default(validParams).toArray().length).toEqual(1);
        });
    });
});
//# sourceMappingURL=index.spec.js.map