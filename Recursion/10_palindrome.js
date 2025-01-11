function palindrome(str, lo, hi) {
    if(lo > hi) return true;
    if(str[lo] != str[hi]) return false;
    return palindrome(str, lo + 1, hi - 1);
}

const str = "aba";
console.log(palindrome(str, 0, str.length-1));