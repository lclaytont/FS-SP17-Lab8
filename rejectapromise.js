// function rejectPromise() {
//     return new Promise(function(resolve, reject) {
//         if (false) {
//             setTimeout(function () {
//                 resolve("FULFILL!")
//             }, 300)
//         } else {
//             setTimeout(function () {    
//                 reject("REJECT!")
//             }, 300)
//         }
//     });
// }

var promise = new Promise(function (resolve, reject) {
    setTimeout(function() {
        reject(new Error("REJECTED!"))
    }, 300);
})
        
function onReject(error) {
    console.log(error.message)
}

promise.then(null, onReject);


