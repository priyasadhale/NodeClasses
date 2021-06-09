/**
 * find area and perimeter of rectangle, using 
 * 1) callback
 * 2) Error object
 * 
 * Error First Callback: Callback that captures error as the first parameter.
 * 
 * Single Responsibility
 */

module.exports = (x, y, callback) => {
    if (x <= 0 || y <= 0)
    {
        errMsg = "Can not process rectangle as it has either of the side as 0 or negative"
        setTimeout(() =>
            callback(new Error(errMsg), null)
            , 2000)
    }
    else {
        setTimeout(() =>
            callback(null,
                {
                    perimeter: () => (2 * (x + y)),
                    area: () => (x*y)
                }
        ), 2000)}
}