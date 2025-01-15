// Generate all binary strings of length n without consecutive 1's
function binaryString(binary, n) {
    if(binary.length === n) {
        console.log(binary);
        return;
    }
    binaryString(binary+'0', n);
    if(binary[binary.length-1] !== '1') 
        binaryString(binary+'1', n);
}

binaryString("", 3);