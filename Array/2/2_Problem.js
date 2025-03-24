function rotation(arr, k) {
    const n = arr.length;
    k = k % n;
    while(k--) {
        let temp = arr[n-1];
        for(let i = n-2; i >= 0; i--) {
            arr[i+1] = arr[i];
        }
        arr[0] = temp;
    }
}

function rotation1(arr, k) {
    const n = arr.length;
    k = k % n;
    function reverse(l, r) {
        while(l < r) {
            [arr[l], arr[r]] = [arr[r], arr[l]];
            l++; 
            r--;
        }
    }

    reverse(0, n-1);
    reverse(n, k-1);
    reverse(k, n-1);
}

let arr = [1,2,3,4,5];
rotation1(arr, 2);
console.log(arr);