// Bài 1: Tạo Hàm createCharacter - Khai báo mảng các object: characters có các thuộc tính: name, level, health.

function createCharacters() {
  const characters = [
    { name: "hades", level: 29, health: 290 },
    { name: "poseidon", level: 9, health: 90 },
    { name: "zeus", level: 97, health: 1997 },
  ];

  // Sử dụng hàm map để tạo ra mảng mới: charactersPowerUp:
  const charactersPowerUp = characters.map((char) => {
    return {
      name: char.name.toUpperCase(), // thuộc tính name: UPPERCASE của name gốc
      level: char.level * 2, // level: x2 của level gốc
      health: char.health * 3, // health: x3 của health gốc
    };
  });

  // Sử dụng hàm filter để lọc ra các phần tử có chỉ số health > 1000. Đặt tên mảng mới lọc được này là “possibleWinners”.
  const posibleWinners = characters.filter((char) => char.health > 1000);
}

// Gọi Hàm createCharacters
createCharacters();

// Bài 2: Tạo hàm printLeaderboard:

function printLeaderboard() {
  const players = [
    { name: "Mario", score: 90 },
    { name: "Luigi", score: 970 },
    { name: "Peach", score: 290 },
    { name: "Yoshi", score: 330 },
    { name: "Hades", score: 1997 },
  ];

  const sortedPlayers = players.sort((a, b) => b.score - a.score); // Sử dụng sort giảm dần để lấy thứ tự score từ cao đến thấp.
  let rank = 1; // Dùng for...of để in ra từng dòng
  for (const player of sortedPlayers) {
    let medal = "";
    if (rank === 1) {
      medal = "🥇 ";
    } else if (rank === 2) {
      medal = "🥈 ";
    } else if (rank === 3) {
      medal = "🥉 ";
    }
    console.log(`${medal}${rank}. ${player.name} - ${player.score}`);
    rank++;
  }
}

// Gọi Hàm printLeaderboard
printLeaderboard();
