let arr = [];

function f(str, subset, i) {
    if(i == str.length) {
        arr.push(subset);
        return;
    }
    f(str, subset, i+1);
    f(str, subset+str[i], i+1);
}

let str = "abc";
f(str, "", 0);
for(subset of arr) {
    console.log(subset);
}