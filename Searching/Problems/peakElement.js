// Leetcode 162
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(arr) {
    let l = 0;
    let r = arr.length - 1;
    while(l < r) {
        const mid = (l + r) >> 1;
        if(arr[mid] > arr[mid+1]) r = mid;
        else l = mid + 1;
    }
    return l;
};