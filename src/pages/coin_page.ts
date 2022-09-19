import { Page } from "./page";
import { default as Coin } from "../data-structures/coin";
import { default as Transaction } from "../data-structures/transaction";
import currency from "currency.js";
import "jquery-ui/ui/widgets/autocomplete";
import "jquery-ui/themes/base/base.css";
import "jquery-ui/themes/base/core.css";
import "jquery-ui/themes/base/theme.css";
import "jquery-ui/themes/base/autocomplete.css";
export class CoinPage extends Page {
  private _coins: Array<Coin>;

  constructor() {
    super("Coins");
    this._coins = this.get_coin_list();
  }

  set_active = (): void => {
    super.set_active();

    let coins = this.get_coin_names();

    $(this.target_div_element).html(
      `<div id="coinsearch">
      <label for = "coinsearch-field">Coins: </label>
      <input id = "coinsearch-field">
      </div>
      <div id='nocoins'>No coins yet. Add some!</div>
      <div id='coinlist'></div>`
    );

    if (coins.length === 0) {
      $("#nocoins").show();
      return;
    }

    this.build_auto_complete(coins);

    $("#nocoins").hide();
  };

  set_inactive = (): void => {
    super.set_inactive();
    this.save_coin_list();
  };

  // TODO: implement this. Will need storage of coins first.
  get_coin_list = (): Coin[] => {
    this._coins = [
      new Coin("Bitcoin", "BTC"),
      new Coin("Fred Coin", "FREDC"),
      new Coin("Doge Coin", "DOGE"),
      new Coin("Ethereum", "ETH"),
      new Coin("Litecoin", "LTC"),
    ];

    this._coins[0].addTransaction(
      new Transaction(1000, new Date(), currency("1"))
    );
    this._coins[0].addTransaction(
      new Transaction(2000, new Date(), currency("2"))
    );

    // sort the coins by name
    this._coins = this._coins.sort((a, b) => {
      return a.getFullName().localeCompare(b.getFullName());
    });
    return this._coins;
  };

  get_coin_names = (): Array<string> => {
    return this._coins.map((coin) => coin.getFullName());
  };
  //TODO: implement this. Will need storage of coins first.
  save_coin_list = (): void => {
    console.log(this._coins);
  };

  find_coin = (name: string | undefined): Coin | undefined => {
    if (name === undefined) return undefined;

    return this._coins.find((coin) => {
      return coin.getFullName() === name;
    });
  };

  build_auto_complete = (coins: Array<string>): void => {
    $("#coinsearch-field")
      .autocomplete({
        source: coins,
        close: (event, ui) => {
          $("#coinlist").removeClass("pushdown");
        },
        select: (_, ui) => {
          const index = ui.item.value;
          let coin = this.find_coin(index);

          // Verify that the coin exists
          if (coin === undefined) return;

          $("#coinlist").html(`Would show: ${coin.getFullName()}`);
        },
        minLength: 0,
        focus: (_, ui) => {
          const index = ui.item.value;
          let coin = this.find_coin(index);

          // Verify that the coin exists
          if (coin === undefined) return;

          $("#coinlist").html(`Would show: ${coin.getFullName()}`);
        },
        response: (_, ui) => {
          if (ui.content.length === 0) return;

          const index = ui.content[0].value;
          let coin = this.find_coin(index);

          // Verify that the coin exists
          if (coin === undefined) return;

          $("#coinlist").html(`Would show: ${coin.getFullName()}`);
        },
      })
      .on("focus", () => {
        const val = $("#coinsearch-field").val();
        $("#coinsearch-field").autocomplete("search", val as string);
        $("#coinlist").addClass("pushdown");
      });
  };
}
