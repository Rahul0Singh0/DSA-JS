// Leetcode 39
function combination(candidate, target) {
    function dfs(arr, target, idx) {
        if(target === 0) {
            console.log(arr);
            return;
        }
        if(target < 0) return;
        if(candidate[idx] <= target) {
            arr.push(candidate[idx]);
            dfs(arr, target-candidate[idx], idx);
            arr.pop();
        }
        dfs(arr, target, idx+1);
    }
    // dfs([], target, 0);
    function method1(arr, target, idx) {
        if(target === 0) {
            console.log(arr);
            return;
        }
        if(target < 0) return;
        for(let i = idx; i < arr.length; i++) {
            arr.push(arr[i]);
            method1(arr, target-candidate[i], i);
            arr.pop();
        }
    }
    method1([], target, 0);
}

let candidate = [1,2,3,4,5];
let target = 6;
combination(candidate, target);