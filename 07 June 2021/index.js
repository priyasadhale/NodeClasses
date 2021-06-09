var circle=require("./circle")
let rect = require("./rectangle")

function solveRect(x, y) {
    rect(x, y, (err, rect) => {
        if (err)
            console.log(`ERROR: ${err.message}`)
        else {
            console.log(`Area of rectangle is ${rect.area()}`)
            console.log(`Perimeter of rectangle is ${rect.perimeter()}`)
        }        
    })
}

solveRect(2,0)











// function solveCircle(x) {
//     console.log(`Solving circle to find area and perimeter for radius= ${x}...`)

//     if (x == 0)
//         console.log("Can not accept Zero for processing....")
//     else {
//         console.log(`Area of circle is ${circle.area(x)}`)
//         console.log(`Perimeter of circle is ${circle.perimeter(x)}`)
//     }
// }

// solveCircle(5)
// solveCircle(34.12)
// solveCircle(-89)
// solveCircle(0)