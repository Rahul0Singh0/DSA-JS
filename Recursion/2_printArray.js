function f(arr, i, n) {
    if(i >= n) return;
    console.log(arr[i]);
    f(arr, i+1, n);
}

f([1, 2, 3, 4, 5], 0, 5);