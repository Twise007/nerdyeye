const fs = require ('fs')

fs.rename('./solder', 'folder', (err) => {
    if (err) {
        console.log(err)
    }
    console.log('successful')})