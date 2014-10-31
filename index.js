/**
 * @description
 *    A simple domain parser.
 *
 * @notes
 *    TLD List:  https://wiki.mozilla.org/TLD_List
 *               https://publicsuffix.org/list/effective_tld_names.dat
 *
 *    Search module:  https://registry.npmjs.org/-/_view/byKeyword?startkey=[%22domain%22]&endkey=[%22domain%22,{}]&group_level=3
 *
 *    Testing cases:  http://mxr.mozilla.org/mozilla-central/source/netwerk/test/unit/data/test_psl.txt?raw=1
 *
 * @author
 *    kilfu0701
 */

var validator = require('validator'),
    us = require('underscore')._,
    tlds = require('./res/tlds.js');

var tld_list = JSON.parse(tlds.data);

module.exports = function(str) {
	return new DomainParser(str);
};

function DomainParser(str) {
    this.domain_string = str;
};

DomainParser.prototype = {
    get domainName() {
        var domain = this.domain_string;

        if(domain === null || typeof domain !== 'string') {
            return '';
        }

        domain = domain.toLowerCase();
        var original = domain;

        if(validator.isIP(domain)) {
            return domain;
        }

        var arr = domain.split('.').filter(function(v){ return v; });
        if(arr[0] === 'www') {
            arr.shift();
        }

        var result = '';

        for(var i = 0; i < arr.length; i++) {
            var str = arr.slice(i).join('.');

            if(tld_list[str] === 1 || tld_list['*.' + str] === 1) {
                // match
                if(i > 0) {
                    result = arr.slice(i - 1).join('.');
                } else {
                    result = arr.slice(i).join('.');
                }
                break;
            }
        }

        if(result === '') {
            if(us.indexOf(['localhost', 'test', 'invalid'], arr[arr.length - 1]) !== -1) {
                result = arr[arr.length - 1];
            } else {
                result = arr.join('.');
            }
        }

        return result;
    }

};

