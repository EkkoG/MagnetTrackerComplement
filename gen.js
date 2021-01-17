const axios = require('axios')
const fs = require('fs')

axios.get('https://github.com/XIU2/TrackersListCollection/raw/master/best.txt')
  .then((response) => {
    const trackerData = response.data.replace(/^\s*[\r\n]/gm, '')
    const lines = trackerData.split('\n')
    const trackers = []
    for (let i = 0; i < lines.length; i += 1) {
      if (i !== lines.length - 1) {
        const line = lines[i]
        trackers.push(encodeURIComponent(line))
      }
    }

    fs.readFile('dist/main.js', (err, mainJsData) => {
      const text = mainJsData.toString()
      const regex = /^\/\/.*@version.*/gm
      const oldVersionText = text.match(regex)[0]

      const r2 = /(?<=\.).*/
      const oldVersion = oldVersionText.match(r2)[0]
      const newVersion = parseInt(oldVersion, 10) + 1

      const newVersionText = oldVersionText.replace(oldVersion, newVersion.toString())
      fs.readFile('main.tpl.js', (tplErr, tplData) => {
        let tplText = tplData.toString()
        const tplVersionRegex = /^\/\/.*@version.*/gm
        const tplOldVersionText = tplText.match(tplVersionRegex)[0]

        tplText = tplText.replace(tplOldVersionText, newVersionText)

        // eslint-disable-next-line
        const content = tplText.replace("['placeholder']", JSON.stringify(trackers))
        fs.writeFile('dist/main.js', content, (mainJsWriteErr) => {
          if (mainJsWriteErr) throw mainJsWriteErr
          console.log('Replaced!')
        })
      })
    })
  })
  .catch((error) => {
    // handle error
    console.log(error)
  })
  .then(() => {
    // always executed
  })
