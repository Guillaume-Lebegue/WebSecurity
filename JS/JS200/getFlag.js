var flag = "K@UC,bswslubr.wohp.dibokdmdb";
var out = flag;
var i = 0;
var input = "";

do {
    input += String.fromCharCode(out.charCodeAt(i) ^ 1);
    input += String.fromCharCode(out.charCodeAt(i + 1) ^ 3);
    input += String.fromCharCode(out.charCodeAt(i + 2) ^ 3);
    input += String.fromCharCode(out.charCodeAt(i + 3) ^ 7);
    i += 4;
} while (i < 28);

console.log(input);