import { default as CoinTransaction } from "./transaction";
import currency from "currency.js";

export default class Coin {
  name: string;
  symbol: string;
  transactions: CoinTransaction[];

  constructor(name: string, symbol: string) {
    this.name = name;
    this.transactions = [];
    this.symbol = symbol;
    return this;
  }

  getName = (): string => {
    return this.name;
  };

  getSymbol = (): string => {
    return this.symbol;
  };

  updateName = (name: string): void => {
    this.name = name;
  };

  updateSymbol = (symbol: string): void => {
    this.symbol = symbol;
  };

  getFullName(): string {
    return `${this.name}: ${this.symbol}`;
  }

  addTransaction = (transaction: CoinTransaction): void => {
    this.transactions.push(transaction);
    // sort the array by date
    this.transactions.sort((a, b) => {
      return a.getDate().getTime() - b.getDate().getTime();
    });
  };

  updateTransaction = (uuid: string, transaction: CoinTransaction): void => {
    const index = this.transactions.findIndex((t) => t.uuid === uuid);
    this.transactions[index] = transaction;
  };

  removeTransactionById = (id: string): void => {
    this.transactions = this.transactions.filter((transaction) => {
      return transaction.uuid !== id;
    });
  };

  getBalance = (): currency => {
    let total_cost = currency(0);

    this.transactions.forEach((transaction) => {
      total_cost = total_cost.add(transaction.getTotalCost());
    });

    return total_cost;
  };

  getTotalCoins = (): number => {
    let total_coins = 0;

    this.transactions.forEach((transaction) => {
      total_coins += transaction.total_coins;
    });

    return total_coins;
  };

  calculateDCA = (): currency => {
    let costaverage = currency(0);
    let total_coins = 0.0;

    this.transactions.forEach((transaction) => {
      costaverage = costaverage.add(transaction.getTotalCost());
      total_coins += transaction.total_coins;
    });

    return costaverage.divide(total_coins);
  };
}

module.exports = Coin;
