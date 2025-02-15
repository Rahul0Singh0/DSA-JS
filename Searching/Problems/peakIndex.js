// leetcode 852
var peakIndexInMountainArray = function(arr) {
    for(let i = 1; i <= arr.length-2; i++) {
        if(arr[i] > arr[i-1] && arr[i] > arr[i+1]) return i;
    }
    return -1;
};

var peakIndexInMountainArray = function(arr) {
    let l = 1;
    let r = arr.length - 2;
    while(l < r) {
        const mid = (l + r) >> 1;
        if(arr[mid] > arr[mid+1]) r = mid;
        else l = mid + 1;
    }
    return l;
};