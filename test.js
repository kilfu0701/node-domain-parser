var test = require('tape'),
    dp = require('./'); 

test('basic test', function (t) {
    var data = {
        'www.doubleinsane.subdomain.example.com.br': 'example.com.br',
        'www.example.com': 'example.com',
        'example.com': 'example.com',
        'example.com.br': 'example.com.br',
        'www.example.com.br': 'example.com.br',
        'www.example.gov.br': 'example.gov.br',
        'localhost': 'localhost',
        'www.localhost': 'localhost',
        'www2.localhost': 'localhost',
        'subdomain.localhost': 'localhost',
        'www.subdomain.example.com': 'example.com',
        'subdomain.example.com': 'example.com',
        'subdomain.example.com.br': 'example.com.br',
        'www.subdomain.example.com.br': 'example.com.br',
        'www.subdomain.example.biz.br': 'biz.br',
        'subdomain.example.biz.br': 'biz.br',
        'subdomain.example.net': 'example.net',
        'www.subdomain.example.net': 'example.net',
        'www.subdomain.example.co.kr': 'example.co.kr',
        'subdomain.example.co.kr': 'example.co.kr',
        'example.co.kr': 'example.co.kr',
        'example.jobs': 'example.jobs',
        'www.example.jobs': 'example.jobs',
        'subdomain.example.jobs': 'example.jobs',
        'insane.subdomain.example.jobs': 'example.jobs',
        'insane.subdomain.example.com.br': 'example.com.br',
        'www.doubleinsane.subdomain.example.com.br': 'example.com.br',
        'www.subdomain.example.jobs': 'example.jobs',
        'test': 'test',
        'www.test': 'test',
        'sub.test': 'test',
        'www.detran.sp.gov.br': 'sp.gov.br',
        'www.mp.sp.gov.br': 'sp.gov.br',
        'ny.library.museum': 'library.museum',
        'www.ny.library.museum': 'library.museum',
        'ny.ny.library.museum': 'library.museum',
        'www.library.museum': 'library.museum',
        'info.abril.com.br': 'abril.com.br',
        '127.0.0.1': '127.0.0.1',
        '::1': '::1',
        'banking.ostsaechsische-sparkasse-dresden.de': 'ostsaechsische-sparkasse-dresden.de',
        '食狮.com.cn': '食狮.com.cn',
        '食狮.公司.cn': '食狮.公司.cn',
        'www.食狮.公司.cn': '食狮.公司.cn',
        'shishi.公司.cn': 'shishi.公司.cn',
        '公司.cn': '公司.cn',
        '食狮.中国': '食狮.中国',
        'www.食狮.中国': '食狮.中国',
        'shishi.中国': 'shishi.中国',
        '中国': '中国',
        'www.www.ck': 'www.ck'
    };

    for(var i in data) {
        t.equal(dp(i).domainName, data[i]);
    }

	t.end();
});
