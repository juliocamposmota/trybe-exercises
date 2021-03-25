let cost = 100;
let price = 250;
let amount = 1000;

const tax = 0.2;

let totalCost = cost + (tax * cost);
let profit = price - totalCost;
let totalProfit = profit * amount;

if (cost < 0 || price < 0 || amount < 0) {
  console.log("Valor incorreto. Declare valores positivos.");
} else {
  console.log("Custo do produto: R$ " + cost);
  console.log("Valor de venda: R$ " + price);
  console.log("Quantidade vendida: " + amount + " un");
  console.log("Lucro Total: R$ " + totalProfit);
}