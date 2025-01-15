function parentheses(n) {
    function dfs(open, close, str) {
        if (open === n && close === n) {
            console.log(str);
            return;
        }
        if (open < n)
            dfs(open + 1, close, str + '(');
        if (close < open)
            dfs(open, close + 1, str + ')');
    }
    dfs(0, 0, "");
}
parentheses(3);
