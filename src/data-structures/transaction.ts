import { v4 as uuidv4 } from "uuid";
import currency from "currency.js";

export default class CoinTransaction {
  total_coins: number; // FIXME: we will probably have an issue with precision here
  date: Date;
  uuid: string;
  cost: currency;

  constructor(
    total_coins: number,
    date: Date,
    cost: currency,
    uuid: string | null = null
  ) {
    this.total_coins = total_coins;
    this.date = date;
    this.uuid = uuid || uuidv4();
    this.cost = cost;
  }

  // The base price of the transaction
  getBaseCost = (): currency => {
    return this.cost;
  };

  getTotalCost = (): currency => {
    return this.cost.multiply(this.total_coins);
  };

  getTotalCoins = (): number => {
    return this.total_coins;
  };

  getDate = (): Date => {
    return this.date;
  };

  getUuid = (): string => {
    return this.uuid;
  };

  setCost = (cost: currency): void => {
    this.cost = cost;
  };

  setTotalCoins = (amount: number): void => {
    this.total_coins = amount;
  };

  setDate = (date: Date): void => {
    this.date = date;
  };
}

module.exports = CoinTransaction;
