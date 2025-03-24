/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let res = [-1, -1];
    for(let i = 0; i < nums.length-1; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                res[0] = i;
                res[1] = j;
                return res;
            }
        }
    }
    return res;
};

var twoSum = function(nums, target) {
    const map = new Map();
    for(let i = 0; i < nums.length; i++) {
        const rem = target - nums[i];
        if(map.has(rem)) {
            return [map.get(rem), i];
        }
        map.set(nums[i], i);
    }
    return [-1, -1];
};