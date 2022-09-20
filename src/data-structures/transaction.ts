import { v4 as uuidv4 } from "uuid";
import currency from "currency.js";

export default class CoinTransaction {
  private _total_coins: number; // FIXME: we will probably have an issue with precision here
  private _date: Date;
  private _uuid: string;
  private _cost: currency;

  constructor(
    total_coins: number,
    date: Date,
    cost: currency,
    uuid: string | null = null
  ) {
    this._total_coins = total_coins;
    this._date = date;
    this._uuid = uuid || uuidv4();
    this._cost = cost;
  }

  // The base price of the transaction
  getBaseCost = (): currency => {
    return this._cost;
  };

  getTotalCost = (): currency => {
    return this._cost.multiply(this._total_coins);
  };

  getTotalCoins = (): number => {
    return this._total_coins;
  };

  getDate = (): Date => {
    return this._date;
  };

  getUuid = (): string => {
    return this._uuid;
  };

  setCost = (cost: currency): void => {
    this._cost = cost;
  };

  setTotalCoins = (amount: number): void => {
    this._total_coins = amount;
  };

  setDate = (date: Date): void => {
    this._date = date;
  };
}

module.exports = CoinTransaction;
