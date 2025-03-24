// copy elements of one array to another array in reverse order
const reverse = (arr) => {
    const res = []
    for(let i = arr.length-1; i >= 0; i--) {
        res.push(arr[i]);
    }
    return res;
}

const res = reverse([1,2,3,4,5]);
console.log(res);