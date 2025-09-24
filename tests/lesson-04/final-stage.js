function findPairsDivisbleBy17() {
  const numbers = [];
  // Lấy tất cả số chia hết cho 17 trong khoảng 1..100, và push vào mảng
  for (let i = 1; i <= 100; i++) {
    if (i % 17 === 0) {
      numbers.push(i);
    }
  }

  let count = 0;
  // Tìm các cặp (i, j) với i < j
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      console.log(`Cặp: (${numbers[i]}, ${numbers[j]})`);
      count++;
    }
  }

  console.log(`\nTổng cộng: ${count} cặp`);
}

findPairsDivisbleBy17();
