let mx = -Infinity;

function f(arr, i) {
    if(i >= arr.length) {
        return mx;
    }
    return mx = Math.max(arr[i], f(arr, i+1));
}

console.log(f([1, -5, 2, 0, 5], 0));