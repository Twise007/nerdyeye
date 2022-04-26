const fs = require ('fs')

try {
    if (!fs.existsSync("deleteMe")){
        fs.mkdirSync('deleteMe')
        console.log(`Successful`)
    }
    } catch(error){
        console.log(error)
}

// const data = 'write new text'
// try {
//     fs.writeFileSync('./newFolder/index.txt', data)
//     console.log("successful")
// }catch(error){
//     console.log(error)
// }
    
// let data = `Somethings Esle`
// try {
//     fs.writeFile('./newFolder/text.txt', data, err=>{
//         if(err){
//             console.log(err)
//         }
//         console.log(`successful`)
//     })
// }catch(error){
//     console.log(error)
// }