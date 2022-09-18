export class Page {
  title: string;
  constructor(title: string) {
    this.title = title;
  }

  set_active() {
    this.set_window_title_bar();
    $("main").html(this.title);
  }

  set_window_title_bar(): void {
    document.title = this.title;
  }
}
