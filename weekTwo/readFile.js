const fs = require('fs')

// try {
//     const data = fs.readFileSync('./newFolder/text.txt', 'utf-8')
//     console.log(data)
// } catch (error) {

// }

fs.readFile('./newFolder/text.txt', 'utf-8', (err, data)=>{
    if (err){
        console.log(err)
    }
    console.log(data)
})