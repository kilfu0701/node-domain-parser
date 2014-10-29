var fs = require('fs');
var result = {};

fs.readFile('effective_tld_names.dat', function(err, data) {
    if(err) {
        console.log('read file error');
        return false;
    }

    var lines = data.toString().split('\n');

    for(var i in lines) {
        var line = lines[i];
        if(line.substring(0, 2) === '//' || line === '') {
            // donothing
            //console.log(line);
        } else {
            result[line] = 1;
        }
    }

    console.log('exports.data = \'' + JSON.stringify(result) + '\';');
});
