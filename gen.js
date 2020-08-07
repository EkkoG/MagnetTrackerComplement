const axios = require('axios');
const fs = require('fs');

axios.get('https://ngosang.github.io/trackerslist/trackers_best.txt')
  .then(function (response) {
    // handle success
    // const d = response.data.replace("/\n\n/g", '\n')
    // console.log(d);

    const data = response.data.replace(/^\s*[\r\n]/gm, "")
    const lines = data.split('\n');
    const trackers = []
    for (let i = 0; i < lines.length; i++) {
        // console.log(lines[i]);
        if (i != lines.length - 1) {
            const line = lines[i]
            console.log(line)
            trackers.push(line)
        }
    }


    fs.readFile('main.js', function(err, data) {
        const content = data.toString().replace('${trackers}', JSON.stringify(trackers))
        fs.writeFile('dist/main.js', content, function (err) {
            if (err) throw err;
            console.log('Replaced!');
        });
    });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
