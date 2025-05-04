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