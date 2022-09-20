import { default as CoinTransaction } from "./transaction";
import currency from "currency.js";
import { v4 as uuidv4 } from "uuid";

export default class Coin {
  private _name: string;
  private _symbol: string;
  private _transactions: CoinTransaction[];
  private _uuid: string;

  constructor(name: string, symbol: string) {
    this._name = name;
    this._transactions = [];
    this._symbol = symbol;
    this._uuid = uuidv4();
    return this;
  }

  getName = (): string => {
    return this._name;
  };

  getSymbol = (): string => {
    return this._symbol;
  };

  getUUID = (): string => {
    return this._uuid;
  };

  updateName = (name: string): void => {
    this._name = name;
  };

  updateSymbol = (symbol: string): void => {
    this._symbol = symbol;
  };

  getFullName(): string {
    return `${this._name}: ${this._symbol}`;
  }

  addTransaction = (transaction: CoinTransaction): void => {
    this._transactions.push(transaction);
    // sort the array by date
    this._transactions.sort((a, b) => {
      return a.getDate().getTime() - b.getDate().getTime();
    });
  };

  updateTransaction = (uuid: string, transaction: CoinTransaction): void => {
    const index = this._transactions.findIndex((t) => t.getUuid() === uuid);
    this._transactions[index] = transaction;
  };

  removeTransactionById = (id: string): void => {
    this._transactions = this._transactions.filter((transaction) => {
      return transaction.getUuid() !== id;
    });
  };

  getBalance = (): currency => {
    let total_cost = currency(0);

    this._transactions.forEach((transaction) => {
      total_cost = total_cost.add(transaction.getTotalCost());
    });

    return total_cost;
  };

  getTotalCoins = (): number => {
    let total_coins = 0;

    this._transactions.forEach((transaction) => {
      total_coins += transaction.getTotalCoins();
    });

    return total_coins;
  };

  calculateDCA = (): currency => {
    let costaverage = currency(0);
    let total_coins = 0.0;

    this._transactions.forEach((transaction) => {
      costaverage = costaverage.add(transaction.getTotalCost());
      total_coins += transaction.getTotalCoins();
    });

    return costaverage.divide(total_coins);
  };
}

module.exports = Coin;
