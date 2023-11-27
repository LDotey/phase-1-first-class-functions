function receivesAFunction(callsBack) {
    callsBack();
}
function returnsANamedFunction() {
    function namedFunction(){
        return 'My Name is Function'
    }
    return namedFunction;
}

function returnsAnAnonymousFunction(){
    return function(){
        return "An anonymous function"
    };
}
const fn = returnsAnAnonymousFunction();
fn();