function binarysearch(arr, x) {
    let lo = 0, hi = arr.length-1;
    while(lo <= hi) {
        const mid = lo + (hi - lo) / 2;
        if(arr[mid] === x) return mid;
        else if(arr[mid] > x) hi = mid - 1;
        else lo = mid + 1;
    }
    return -1;
}