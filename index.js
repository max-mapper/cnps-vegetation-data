const cheerio = require('cheerio');
const {
  glob
} = require('glob')
var fs = require('fs')

run = async() => {
    const files = await glob('html/*')
    var rows = []
    for (var f in files) {
        var html = fs.readFileSync(files[f]).toString()
        var $ = cheerio.load(html)
        var data = {}
        var sn = $('.allianceHeader .scientificName').text().trim()
        var st = $('.allianceHeader .subtitle').text().trim()
        var ah = $('.allianceHeader').text().trim().replace(sn, '').replace(st, '').trim()
        data['scientificName'] = sn
        data['subtitle'] = st
        data['allianceType'] = ah
        data['fullName']  = sn + ' ' + ah
        data['link'] = 'https://vegetation.cnps.org/alliance/' + files[f].split('/')[1]
        $('.zebraStripe tr').map(function () {
            var k = $(this).children('td:first')
            var v = k.next().text().trim()
            k = k.text().trim()
            if (k && v && v !== '—' && v !== 'null' && v !== 'Unknown') data[k] = v
        })
        rows.push(data)
    }
    fs.writeFileSync('./mcv2.json', rows.map((r) => JSON.stringify(r)).join('\n'))
}

run()