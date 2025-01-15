// Leetcode 39
function combination(candidate, target) {
    let arr = [];
    function dfs(t, idx) {
        if(t === 0) {
            console.log(arr);
            arr = [];
            return;
        }
        if(idx >= candidate.length || t < candidate[idx]) return;

        dfs(t, idx+1);
        arr.push(candidate[idx]);
        dfs(t-candidate[idx], idx);
        arr.pop();
    }
    dfs(target, 0);
    function method1(target, idx) {
        if(target === 0) {
            console.log(arr);
            arr = [];
            return;
        }
        if(target < 0) return;
        for(let i = idx; i < candidate.length; i++) {
            arr.push(candidate[i]);
            method1(target-candidate[i], i);
            arr.pop();
        }
    }
    // method1(target, 0);
}

let candidate = [2,3,6,7];
let target = 7;
combination(candidate, target);