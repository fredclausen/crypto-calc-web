const Transaction = require("./transaction");
const Coin = require("./coin");
const currency = require("currency.js");
const uuid = require("uuid");

describe("Coin", () => {
  test("Creating a basic coin", () => {
    const coin = new Coin("Fred Coin", "FRED");
    expect(coin.getName()).toEqual("Fred Coin");
    expect(coin.getSymbol()).toEqual("FRED");
    expect(coin.getFullName()).toEqual("Fred Coin: FRED");
  });

  test("Creating a coin with basic transactions", () => {
    const coin = new Coin("Fred Coin", "FRED");
    const transaction_one = new Transaction(1000, new Date(), currency("1"));
    const transaction_two = new Transaction(2000, new Date(), currency("2"));
    coin.addTransaction(transaction_one);
    expect(coin.getName()).toEqual("Fred Coin");
    expect(coin.getSymbol()).toEqual("FRED");
    expect(coin.getFullName()).toEqual("Fred Coin: FRED");
    expect(coin.getBalance().format()).toEqual("$1,000.00");
    expect(coin.calculateDCA().format()).toEqual("$1.00");
    coin.addTransaction(transaction_two);
    expect(coin.getBalance().format()).toEqual("$5,000.00");
    expect(coin.calculateDCA().format()).toEqual("$1.67");
  });

  test("Creating a coin with basic transactions and updating", () => {
    const coin = new Coin("Fred Coin", "FRED");
    const uuid = "test";
    const transaction_one = new Transaction(
      1000,
      new Date(),
      currency("1"),
      uuid
    );
    const transaction_one_updated = new Transaction(
      1000,
      new Date(),
      currency("3"),
      uuid
    );

    const transaction_two = new Transaction(2000, new Date(), currency("2"));
    coin.addTransaction(transaction_one);
    expect(coin.getName()).toEqual("Fred Coin");
    expect(coin.getSymbol()).toEqual("FRED");
    expect(coin.getFullName()).toEqual("Fred Coin: FRED");
    expect(coin.getBalance().format()).toEqual("$1,000.00");
    expect(coin.calculateDCA().format()).toEqual("$1.00");
    coin.addTransaction(transaction_two);
    expect(coin.getBalance().format()).toEqual("$5,000.00");
    expect(coin.calculateDCA().format()).toEqual("$1.67");
    coin.updateTransaction(uuid, transaction_one_updated);
    expect(coin.getBalance().format()).toEqual("$7,000.00");
    expect(coin.calculateDCA().format()).toEqual("$2.33");
  });
});
