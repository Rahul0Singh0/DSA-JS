/**
 *   *
 *   *
 * *****
 *   *
 *   *
 */
/**
 *  *
 * ***
 *  *
 */
/**
 *    *
 *    *
 *    *
 * *******
 *    *
 *    *
 *    *
 */

function pattern(n) {
    const mid = Math.floor((n/2)+1);
    for(let i = 1; i <= n; i++) {
        let str = '';
        for(let j = 1; j <= n; j++) {
            if(i === mid || j === mid) {
                str += "*";
            } else {
                str += " ";
            }
        }
        console.log(str);
    }
}

pattern(7);