/**
 * 1
 * 12
 * 123
 * 1234
 */

function pattern1(n) {
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = 1; j <= i; j++) {
            str += j;
        }
        console.log(str);
    }
}

/**
 * 1234
 * 123
 * 12
 * 1
 */

function pattern2(n) {
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = 1; j <= n-i+1; j++) {
            str += j;
        }
        console.log(str);
    }
}