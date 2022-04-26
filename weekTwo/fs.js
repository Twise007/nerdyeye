const fs = require ('fs')
// console.log(fs)


// const makeFolder = () => {
     try {
if (!fs.existsSync("newFolder")){
    fs.mkdirSync('newFolder')
    console.log(`Successful`)
}
} catch(error){
    console.log(error)
}
// }
// makefolder()