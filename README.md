[![Build Status](https://travis-ci.org/telemark/tfk-elevmappa360-tilganger-dokumenter-sync.svg?branch=master)](https://travis-ci.org/telemark/tfk-elevmappa360-tilganger-dokumenter-sync)
[![Coverage Status](https://coveralls.io/repos/telemark/tfk-elevmappa360-tilganger-dokumenter-sync/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/tfk-elevmappa360-tilganger-dokumenter-sync?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# tfk-elevmappa360-tilganger-dokumenter-sync

Synkronisering av tilganger på dokumenter fra Buddy til elevmappene i 360

Hent alle elever fra Buddy

Hent alle dokumenter fra elevmappene

Sjekk at hvert dokument med "Elev-"-tilgang for den enkelte elev har tilgangsgruppen til skolen eleven tilhører.

Lever en liste med dokumenter som skal ha endret tilgangsgruppe.

Hver oppføring skal ha documentNumber og accessGroup som skal settes.

## Usage

Pass an object with masterdata and data.

Masterdata are all students from Buddy

Data are all documents in Public 360 from active Elevmapper

```JavaScript
const syncLists = require('tfk-elevmappa360-tilganger-dokumenter-sync')
const students = require('./test/data/students.json')
const documents = require('./test/data/documents.json')

console.log(syncList({masterdata: students, data: documents}))

```

returns an array.

```JavaScript
[ 
  { documentNumber: '109', accessGroup: 'Elev-Bamble' },
  { documentNumber: '115', accessGroup: 'Elev-Bamble' } 
]
```

## License

[MIT](LICENSE)
