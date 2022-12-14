const CoinTransaction = require("./transaction");
const currency = require("currency.js");

describe("Transaction", () => {
  test("Creating a basic transaction", () => {
    const transaction = new CoinTransaction(100, new Date(), currency(1));
    expect(transaction.getBaseCost().format()).toBe("$1.00");
    expect(transaction.getTotalCoins()).toBe(100);
    expect(transaction.getTotalCost().format()).toBe("$100.00");
  });
  test("Creating a basic transaction and updating it", () => {
    const currentDate = new Date();
    const dateInThePast = new Date(2018, 11, 24, 10, 33, 30, 0);
    let transaction = new CoinTransaction(100, currentDate, currency(1));

    expect(transaction.getBaseCost().format()).toBe("$1.00");
    expect(transaction.getTotalCoins()).toBe(100);
    expect(transaction.getDate()).toBe(currentDate);
    expect(transaction.getTotalCost().format()).toBe("$100.00");

    transaction.setCost(currency(2));
    expect(transaction.getBaseCost().format()).toBe("$2.00");
    expect(transaction.getTotalCost().format()).toBe("$200.00");
    transaction.setTotalCoins(1000);
    expect(transaction.getTotalCoins()).toBe(1000);
    transaction.setDate(dateInThePast);
    expect(transaction.getDate()).toBe(dateInThePast);
  });
});
