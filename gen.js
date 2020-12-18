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
            trackers.push(encodeURIComponent(line))
        }
    }

    fs.readFile('dist/main.js', function(err, data) {
      var text = data.toString()
      const regex = /^\/\/.*@version.*/gm
      const oldVersionText = text.match(regex)[0]

      const r2 = /(?<=\.).*/
      const oldVersion = oldVersionText.match(r2)[0]
      const newVersion = parseInt(oldVersion) + 1
      
      const newVersionText = oldVersionText.replace(oldVersion, newVersion.toString())
      fs.readFile('main.tpl.js', function(err, data) {
        var text = data.toString()
        const regex = /^\/\/.*@version.*/gm
        const oldVersionText = text.match(regex)[0]

        text = text.replace(oldVersionText, newVersionText)

        const content = text.replace('${trackers}', JSON.stringify(trackers))
        fs.writeFile('dist/main.js', content, function (err) {
            if (err) throw err;
            console.log('Replaced!');
        });
      });


    })

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
