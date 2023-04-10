const encryption_key: string = 'secret';
const encrypt = (input: string) => {
  let delimiter = '-';
  let encrypted = '';

  for (let i = 0; i < input.length; i++) {
    let ascii_code = input.charCodeAt(i);
    let shifted_code =
      ascii_code + encryption_key.charCodeAt(i % encryption_key.length);
    let encryptedChar = String.fromCharCode(shifted_code);
    encrypted += encryptedChar + delimiter;
  }
  return encrypted;
};

const decrypt = (input: string) => {
  let delimiter = '-';
  let encryptedChars = input.split(delimiter);
  let decrypted = '';
  for (let i = 0; i < encryptedChars.length; i++) {
    let ascii_code = encryptedChars[i].charCodeAt(0);
    let shifted_code =
      ascii_code - encryption_key.charCodeAt(i % encryption_key.length);
    let decryptedChar = String.fromCharCode(shifted_code);
    decrypted += decryptedChar;
  }
  return decrypted;
};

export {encrypt, decrypt};
