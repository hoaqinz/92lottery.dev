/**
 * Data utility functions
 * These functions are only used on the client side to prevent hydration mismatches
 */

// Generate random user ID (for display purposes)
export const generateUserId = () => {
  // Generate 3 random characters (letters and numbers)
  const randomChars = Math.random().toString(36).substring(2, 5).toUpperCase();
  return `Mem***${randomChars}`;
};

// Generate random amount (for display purposes)
export const generateAmount = (min: number = 10000, max: number = 100000) => {
  const amount = Math.floor(Math.random() * (max - min + 1) + min);
  return formatCurrency(amount);
};

// Format currency with Vietnamese format
export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount).replace('₫', '').trim() + '₫';
};

// Generate random winner data - exactly 5 items
export const generateWinnerData = () => {
  const winners = [];
  for (let i = 1; i <= 5; i++) {
    winners.push({
      id: i,
      userId: generateUserId(),
      amount: generateAmount(10000, 5000000)
    });
  }
  return winners;
};

// Fixed ranking data
export const generateRankingData = () => {
  return [
    { id: 1, userId: "Mem***ND6", amount: "1.235.015.887,00₫" },
    { id: 2, userId: "Mem***3I5", amount: "2.373.568.100,00₫" },
    { id: 3, userId: "Mem***VTE", amount: "1.421.773.699,00₫" },
    { id: 4, userId: "Mem***Z97", amount: "2.000.611.391,00₫" },
    { id: 5, userId: "Mem***ZD8", amount: "690.267.108,00₫" },
    { id: 6, userId: "Mem***P3K", amount: "1.853.916.780,00₫" },
    { id: 7, userId: "Mem***J2L", amount: "1.376.904.900,00₫" },
    { id: 8, userId: "Mem***M5N", amount: "2.140.000.000,00₫" },
    { id: 9, userId: "Mem***X7B", amount: "1.753.916.780,00₫" },
    { id: 10, userId: "Mem***Q1R", amount: "1.876.904.900,00₫" }
  ];
};

// Top 3 winners (fixed for consistency)
export const topThreeWinners = [
  {
    position: 2,
    userId: "Mem***ND5",
    amount: "1,764,896,700.00₫",
    avatar: "/images/ranking/ava.png",
    crown: "/images/ranking/crow2.png",
    badge: "/images/ranking/no2.png"
  },
  {
    position: 1,
    userId: "Mem***BLN",
    amount: "495,349,035,000.00₫",
    avatar: "/images/ranking/ava.png",
    crown: "/images/ranking/crow1.png",
    badge: "/images/ranking/no1.png"
  },
  {
    position: 3,
    userId: "Mem***2CJ",
    amount: "1,588,531,000.00₫",
    avatar: "/images/ranking/ava.png",
    crown: "/images/ranking/crow3.png",
    badge: "/images/ranking/no3.png"
  }
];

// Podium image for ranking
export const podiumImage = "/images/ranking/buc.png";

// Menu items data
export const menuItems = [
  {
    id: "lottery",
    name: "Xổ số",
    image: "https://ext.same-assets.com/2315791583/1708614472.png"
  },
  {
    id: "slots",
    name: "Slots",
    image: "https://ext.same-assets.com/2315791583/3079872838.png"
  },
  {
    id: "sports",
    name: "Thể thao",
    image: "https://ext.same-assets.com/2315791583/726095966.png"
  },
  {
    id: "casino",
    name: "Casino",
    image: "https://ext.same-assets.com/2315791583/220548353.png"
  },
  {
    id: "pvc",
    name: "Game bài",
    image: "https://ext.same-assets.com/2315791583/1684557050.png"
  },
  {
    id: "fishing",
    name: "Bắn cá",
    image: "https://ext.same-assets.com/2315791583/2179188237.png"
  },
  {
    id: "minigames",
    name: "Mini games",
    image: "https://ext.same-assets.com/2315791583/291592861.png"
  },
  {
    id: "popular",
    name: "Phổ biến",
    image: "https://ext.same-assets.com/2315791583/3938052756.png"
  }
];

// Game cards data
export const gameCards = [
  {
    id: "wingo",
    name: "Win Go",
    description: "Đoán số Xanh/Đỏ/Tím để giành chiến thắng",
    image: "https://ext.same-assets.com/2315791583/3465659352.png",
    gradientFrom: "#7b90f7",
    gradientTo: "#89d9e7"
  },
  {
    id: "k3lotre",
    name: "K3 Lotre",
    description: "Đoán số Lớn/Nhỏ/Lẻ/Chẵn",
    image: "https://ext.same-assets.com/2315791583/2328052676.png",
    gradientFrom: "#cc7933",
    gradientTo: "#f6bf85"
  },
  {
    id: "5dlotre",
    name: "5D Lotre",
    description: "Đoán số Lớn/Nhỏ/Lẻ/Chẵn",
    image: "https://ext.same-assets.com/2315791583/2543983889.png",
    gradientFrom: "#7b90f7",
    gradientTo: "#cccefa"
  },
  {
    id: "trxwin",
    name: "Trx Win",
    description: "Đoán số Xanh/Đỏ/Tím để giành chiến thắng",
    image: "https://ext.same-assets.com/2315791583/3265867209.png",
    gradientFrom: "#a05b68",
    gradientTo: "#e7b6d1"
  }
];
