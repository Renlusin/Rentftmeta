export interface TeamComp {
  carry: string[];
  core_units: string[];
  items: Record<string, string[]>;
  augments: string[];
  cost?: number;
  difficulty?: string;
  description?: string;
}

export const metaComps: Record<string, TeamComp> = {
  "Jhin Công Nghệ Cao": {
    carry: ["Jhin", "Mordekaiser"],
    core_units: ["Jax", "Zeri", "Vi", "Sejuani"],
    items: {
      Jhin: ["Vô Cực Kiếm", "Cung Xanh", "Diệt Khổng Lồ"],
      Sejuani: ["Giáp Gai", "Giáp Máu", "Vuốt Rồng"]
    },
    augments: ["Xúc Xắc Vô Tận", "Exotech Emblem"],
    cost: 50,
    difficulty: "Trung bình",
    description: "Đội hình mạnh ở mid-late game với Jhin làm carry chính"
  },
  "Siêu Thú Sylas": {
    carry: ["Sylas", "Viego"],
    core_units: ["Seraphine", "Vi", "Zyra", "Riven"],
    items: {
      Sylas: ["Quỷ Thư", "Áo Choàng Lửa", "Lời Thề"],
      Viego: ["Găng Bảo Thạch", "Mũ Phù Thủy", "Kiếm Súng"]
    },
    augments: ["Con Sói Xổng Xích", "Lò Rèn Tiềm Ẩn"],
    cost: 45,
    difficulty: "Khó",
    description: "Đội hình AP mạnh với khả năng burst cao"
  },
  "Reroll Poppy": {
    carry: ["Poppy", "Tristana"],
    core_units: ["Ziggs", "Rumble", "Heimerdinger", "Corki"],
    items: {
      Poppy: ["Guinsoo", "Titan", "Bloodthirster"],
      Tristana: ["IE", "LW", "BT"]
    },
    augments: ["Yordle Crown", "Scrap Emblem"],
    cost: 30,
    difficulty: "Dễ",
    description: "Đội hình reroll mạnh ở early-mid game"
  },
  "Assassin Akali": {
    carry: ["Akali", "Katarina"],
    core_units: ["Talon", "Pyke", "Qiyana", "Diana"],
    items: {
      Akali: ["IE", "JG", "GA"],
      Katarina: ["Blue Buff", "JG", "IE"]
    },
    augments: ["Assassin Emblem", "Thrill of the Hunt"],
    cost: 40,
    difficulty: "Khó",
    description: "Đội hình assassin với khả năng one-shot cao"
  }
};