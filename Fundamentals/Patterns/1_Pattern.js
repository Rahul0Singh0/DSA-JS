/**
 * ****
 * ****
 * ****
 * ****
 */

function pattern(n) {
    for(let i = 1; i <= n; i++) {
        let str = "";
        for(let j = 1; j <= n; j++) {
            str += "*";
        }
        console.log(str);
    }
}

// pattern(4);

function pattern1(n) {
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= n; j++) {
            process.stdout.write("*");
        }
        console.log();
    }
}

pattern1(4);