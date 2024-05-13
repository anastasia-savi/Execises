let randomBodyParts = ['lips', 'mouth', 'boobs', 'dick', 'ass', 'vagina'];
let who = ['I', 'you'];
let action = ['lick', 'suck', 'kiss', 'slap', 'fuck'];
let where = ['balcony', 'car', 'parking', 'table', 'beach'];
let whose = ['my', 'yours']

let randomBodyPart =
  randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
let who1 = who[Math.floor(Math.random() * who.length)];
let whose1 = whose[Math.floor(Math.random() * whose.length)];
let action1 = action[Math.floor(Math.random() * action.length)];
let where1 = where[Math.floor(Math.random() * where.length)];

let sexRandom = [who1, "will", action1, whose1, randomBodyPart, 'on the', where1].join(' ');

console.log(sexRandom);
