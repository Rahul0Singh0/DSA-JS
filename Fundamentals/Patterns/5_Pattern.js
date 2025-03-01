/**
 * 1
 * 13
 * 135
 * 1357
 */

function pattern1(n) {
    for(let i = 1; i <= n; i++) {
        let a = 1;
        let str = '';
        for(let j = 1; j <= i; j++) {
            str += a;
            a+=2;
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
    for(let i = 1; i <= n; i++) {
        let a = 1;
        let str = '';
        for(let j = 1; j <= n-i+1; j++) {
            str += a;
            a += 2;
        }
        console.log(str);
    }
}

pattern1(5)