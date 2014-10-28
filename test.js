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
        'www.subdomain.example.biz.br': 'example.biz.br',
        'subdomain.example.biz.br': 'example.biz.br',
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
        'subdomain.test': 'test',
        'www.detran.sp.gov.br': 'sp.gov.br',
        'www.mp.sp.gov.br': 'sp.gov.br',
        'ny.library.museum': 'library.museum',
        'www.ny.library.museum': 'library.museum',
        'ny.ny.library.museum': 'library.museum',
        'www.library.museum': 'library.museum',
        'info.abril.com.br': 'abril.com.br',
        '127.0.0.1': '127.0.0.1',
        '::1': '::1'
    };

    for(var i in data) {
        //if(i === 'insane.subdomain.example.jobs')
            t.equal(dp(i).domainName, data[i]);
    }

	t.end();
});
