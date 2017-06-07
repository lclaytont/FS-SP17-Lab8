// var val = "SECRET VALUE";
var promise_one = first(); 

var promise_two = promise_one.then(function(val) {
    return second(val)
});

promise_two.then(console.log);