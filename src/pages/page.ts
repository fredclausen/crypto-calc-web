export class Page {
  title: string;
  target_div_element: string;
  constructor(title: string, target_div_element: string | null = null) {
    this.title = title;
    this.target_div_element = target_div_element || "#main";
  }

  set_active() {
    this.set_window_title_bar();
    $(this.target_div_element).html(this.title);
  }

  set_window_title_bar(): void {
    document.title = "Crypto Web Calculator: " + this.title;
  }
}
