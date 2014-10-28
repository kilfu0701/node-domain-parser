node-domain-parser
=======================

A simple parser that breaks apart a domain name into its components

[![build status](https://secure.travis-ci.org/kilfu0701/node-domain-parser.png)](http://travis-ci.org/kilfu0701/node-domain-parser)

install
=======

npm

```bash
npm install domain-parser
```

usage
=====

```javascript
var dp = require('domain-parser');

var result = dp('www.google.com.tw').domainName;
console.log(result);
```

license
=======

MIT
