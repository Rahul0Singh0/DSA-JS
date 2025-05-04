var countSubarrays = function(nums, k) {
    const mx_ele = Math.max(...nums);
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        let cnt = 0;
        for (let j = i; j < nums.length; j++) {
            if (mx_ele == nums[j]) cnt++;
            if (cnt >= k) res++;
        }
    }
    return res;
};

// Brute Force Approach, O(n^2) solution

// TLE , Time Complexity: O(n^2), Space Complexity: O(1)

// Optimized Approach, O(n) solution
// using sliding window technique
var countSubarrays1 = function(nums, k) {
    const mx_ele = Math.max(...nums);
    let res = 0;
    let cnt = 0;
    let s = 0;
    for (let e = 0; e < nums.length; e++) {
        if (nums[e] == mx_ele) cnt++;

        while (cnt == k) {
            if (nums[s] == mx_ele) cnt--;
            s++; // count the number of subarrays (atleast k times max element)
        }

        res += s;
    }
    return res;
};