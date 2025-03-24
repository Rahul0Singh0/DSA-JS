// Reverse array without extra memory
function reverse(arr) {
    let i = 0, j = arr.length-1;
    while (i < j) {
        arr[i] = arr[i] ^ arr[j];
        arr[j] = arr[i] ^ arr[j];
        arr[i] = arr[i] ^ arr[j];
        i++;
        j--;
    }
}

let arr = [1,2,3,4,5];

reverse(arr);

console.log(arr);