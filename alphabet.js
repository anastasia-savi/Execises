let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let randomString = '';
while (randomString.length < 6) {
    randomIndex = Math.floor(Math.random() * alphabet.length)
    randomString += alphabet[randomIndex];
}
console.log(randomString);