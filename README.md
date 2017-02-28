![Merida](./merida.jpg)
# Perm
### The Permutation Engine for testing OneID.
Stack arrays of strings and build permutations!

From simple cartesian products, to explicit custom permutations, Perm combines arrays of arrays
into advanced configurations to aid in your testing, and day-to-day operations.

## Why not just write permutations as flat arrays?
Every additional param you add, blows up the permutations you need to manually edit by a factor of 2.
Some day soon, you are gonna get that phone call which says all ESPN clients now require a new language,
your flat perm structure explodes in complexity, and without a tool like this, the manual inspection,
maintanence, and updates to your flat permutations will literally kill you figuratively.


# Examples
### Simple Cartesian Product
Generate the Cartesian Product of all permutable aguments.

```javascript
let perm = new Perm({
  env: ['stg'],
  ageBands: ['CHILD', 'ADULT'],
  countries: ['US', 'DE'],
  languages: ['en-US'],
  clientIds: ['MY-CLIENTID.WEB']
});

console.log(perm.toArray()); /*
==> [
      { ageBand: 'CHILD',
        country: 'US',
        language: 'en-US',
        env: 'stg',
        clientId: 'MY-CLIENTID.WEB'
      },{
        ageBand: 'CHILD',
        country: 'DE',
        language: 'en-US',
        env: 'stg',
        clientId: 'MY-CLIENTID.WEB'
      },{
        ageBand: 'ADULT',
        country: 'US',
        language: 'en-US',
        env: 'stg',
        clientId: 'MY-CLIENTID.WEB'
      },{
        ageBand: 'ADULT',
        country: 'DE',
        language: 'en-US',
        env: 'stg',
        clientId: 'MY-CLIENTID.WEB'
      }
    ]
*/
```

## Explicit Permutations
If your Business Unit has multiple client ID's which are gated by country, it would not make sense to test all countries for all clientIDs.

In that case you may want you use an explicit permutation.

In this example, We want to run a test script against `stg`, for `ADULT`s, who speak `en-US`,  for 2 British client IDs and one German, from `GB`, and `DE` respectively.
This perm represents three iterations.
```javascript
let perm = new Perm({
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
});

console.log(perm.toArray()); /*
==> [
      {
        ageBand: 'ADULT',
        country: 'GB',
        language: 'en-US',
        clientId: 'UK-CLIENT.FAKE',
        env: 'stg'
      },{
        ageBand: 'ADULT',
        country: 'GB',
        language: 'en-US',
        clientId: 'OTHER-UK.FAKE',
        env: 'stg'
      },{
        ageBand: 'ADULT',
        country: 'DE',
        language: 'en-US',
        clientId: 'GERMAN-GATED-CLIENT.FAKE',
        env: 'stg'
      }
  ]
*/
```

## Install
`npm install`

