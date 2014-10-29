node-domain-parser
=======================

A simple domain parser, getting the domain name without subdomains.

[![Build Status](https://travis-ci.org/kilfu0701/node-domain-parser.svg?branch=master)](https://travis-ci.org/kilfu0701/node-domain-parser)

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
