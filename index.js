/**
 * @description
 *    A simple domain parser.
 *
 * @notes
 *    TLD List:  https://wiki.mozilla.org/TLD_List
 *    Search module:  https://registry.npmjs.org/-/_view/byKeyword?startkey=[%22domain%22]&endkey=[%22domain%22,{}]&group_level=3
 *
 * @author
 *    kilfu0701
 */

var validator = require('validator'),
    us = require('underscore')._;

module.exports = function (str) {
	return new DomainParser(str);
};

function DomainParser(str) {
    this.domain_string = str;
}

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

        var arr = domain.split('.').map(function(v){ return v==='www' ? false:v; }).filter(function(v){ return v; });
        var _tmp;

        if(arr.length > 4) {
            _tmp = arr.slice(0, 2);
            _tmp.push(arr.slice(2).join('.'));
        } else {
            _tmp = arr;
        }

        var counts = _tmp.length;

        if(counts > 2) {
            var _sub = (counts === 4) ? _tmp[3].split('.') : _tmp[2].split('.');

            if(_sub.length === 2) {
                _tmp.shift();

                if(counts === 4) {
                    _tmp.shift();
                }

            } else if(_sub.length === 1) {
                var removed = _tmp.shift();

                if(_sub[0].length === 2 && counts === 3) {
                    _tmp.unshift(removed);
                } else {
                    var tlds = [
                        'aero',
                        'arpa',
                        'asia',
                        'biz',
                        'cat',
                        'com',
                        'coop',
                        'edu',
                        'gov',
                        'info',
                        'jobs',
                        'mil',
                        'mobi',
                        'museum',
                        'name',
                        'net',
                        'org',
                        'post',
                        'pro',
                        'tel',
                        'travel',
                        'xxx'
                    ];
                    if(_tmp.length > 2 && us.indexOf(tlds, _sub[0]) !== -1) {
                        _tmp.shift();
                    }
                }
            } else {
                for(var i = _sub.length; i > 1; i--) {
                    _tmp.shift();
                }
            }
        } else if(counts === 2) {
            var _tmp0 = _tmp.shift();
            
            if( _tmp.join('.').indexOf('.') === -1
                && us.indexOf(['localhost', 'test', 'invalid'], _tmp[0]) === -1 )
            {
                _tmp.unshift(_tmp0);
            }
        }

        return _tmp.join('.');  
    }
};

