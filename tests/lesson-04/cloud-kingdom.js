// Biến playerName có giá trị là “Mario”.
let playername = "Mario";

// Biến currentLives có giá trị là 3.
let currentLives = 3;

// Các hằng số lưu coins theo level:
const coinsLevel1 = 25;
const coinsLevel2 = 30;
const coinsLevel3 = 45;

// Tính giá trị trung bình coin của 3 level và in ra console.
let totalCoins = (coinsLevel1 + coinsLevel2 + coinsLevel3);
let averageCoins = totalCoins / 3;
console.log(`AverageCoins ${averageCoins}`);

// In ra số coin dư khi chia cho 3
let remainder = totalCoins % 3;
console.log(`Remainder coins when divided by 3: ${remainder}`);
