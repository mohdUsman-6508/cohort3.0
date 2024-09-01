function calculateTotalSpentCategory(transactions) {
  let bill = [];

  transactions.forEach((item) => {
    bill.push({ category: item["category"], price: item["price"] });
  });

  return bill;
}

let cart = [
  {
    id: 1,
    timestamp: 15325963,
    price: 10,
    category: "Food",
    itemName: "pizza",
  },
  {
    id: 2,
    timestamp: 15395663,
    price: 15,
    category: "Veggies",
    itemName: "Vegetables",
  },
  {
    id: 3,
    timestamp: 15395663,
    price: 12,
    category: "Fruits",
    itemName: "Watermalon",
  },
  {
    id: 4,
    timestamp: 15325663,
    price: 22,
    category: "Food",
    itemName: "wheat flour",
  },
];

console.log(calculateTotalSpentCategory(cart));

// TODO: Unique category wise pending
