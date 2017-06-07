var grail = Promise.resolve("YOU HAVE CHOSEN WISELY");
var balrog = Promise.reject(new Error("YOU SHALL NOT PASS"));

grail.then(console.log);
balrog.catch(function(err) {
    console.log(err.message);
});