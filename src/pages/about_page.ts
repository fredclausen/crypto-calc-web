import { Page } from "./page";

export class AboutPage extends Page {
  constructor() {
    super("About");
  }

  set_active(): void {
    super.set_active();
    $(this.target_div_element).html(`
      <p>
        This is a simple web calculator for cryptocurrency trading. With it you can calculate the average cost of your trades (the "DCA/Dollar Cost Average")
         and see what profit margins you would have at various price points. Additionally, the website will store all of your coins / transactions locally on
         your computer so that you can come back to it later and not have to re-enter all of the values.
      </p>
      <p>
        This application is free and open source and licensed under the MIT license. No information is collected or stored anywhere other than
        your browser/computer. Please feel free to audit the source code or contribute to the project on
         <a href="https://github.com/fredclausen/crypto-calc-web" target="_blank">GitHub</a>.`);
  }
}
