const encryptedFlagHex = "3c09431700451c00232d19531900026c1e2a09431f7e38075d527e1052";
const key = "Th1s_1s_@_x0r_k3y_l0l!";
let decryptedFlag = "";

for (let i = 0; i < encryptedFlagHex.length / 2; i++) {
  const byte = parseInt(encryptedFlagHex.substr(i * 2, 2), 16);
  decryptedFlag += String.fromCharCode(byte ^ key.charCodeAt(i % key.length));
}

console.log(decryptedFlag);