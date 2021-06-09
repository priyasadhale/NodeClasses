const fs = require('fs')

fs.readFile("./FileOperation/country.txt", "UTF8", (err, data) => {
    if (err) {
        console.log(err.message)
    }
    else {
        console.log(data)
    }    
})