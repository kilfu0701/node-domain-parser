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
// google.com.tw

result = dp('direct.jp-bank.japanpost.jp').domainName;
console.log(result);
// japanpost.jp
```

If you have a url look likes `https://www.google.com.tw/search?q=python&biw=1440&bih=805&source=lnms&sa=X&ei=se9SVIqlKonp8gW5mYKIBg`
```
var url = require('url'),
    dp = require('domain-parser');

var link = 'https://www.google.com.tw/search?q=python&biw=1440&bih=805&source=lnms&sa=X&ei=se9SVIqlKonp8gW5mYKIBg'
var hostname = url.parse(link).hostname;
console.log(hostname);
// www.google.com.tw

var domain = dp(hostname).domainName;
console.log(domain);
// google.com.tw
```

license
=======

MIT
