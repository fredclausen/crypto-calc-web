import { v4 as uuidv4 } from "uuid";
import * as currency from "currency.js";

export class CoinTransaction {
  total_coins: number;
  date: Date;
  uuid: string;
  cost: currency;

  constructor(
    amount: number,
    date: Date,
    cost: currency,
    uuid: string | null = null
  ) {
    this.total_coins = amount;
    this.date = date;
    this.uuid = uuid || uuidv4();
    this.cost = cost;
  }

  getCost() {
    return this.cost;
  }

  getTotalCoins() {
    return this.total_coins;
  }

  getDate() {
    return this.date;
  }

  getUuid() {
    return this.uuid;
  }

  setCost(cost: currency) {
    this.cost = cost;
  }

  setTotalCoins(amount: number) {
    this.total_coins = amount;
  }

  setDate(date: Date) {
    this.date = date;
  }
}
