declare const window: Window;

import "./navbar";
import "./images";

import "jquery";

import { PortfolioPage } from "./pages/portfolio_page";
import { CoinPage } from "./pages/coin_page";
import { AboutPage } from "./pages/about_page";

let index_path: string = "";
let index_page: string = "";

const portfolio_page: PortfolioPage = new PortfolioPage("Portfolio");
const coin_page: CoinPage = new CoinPage("Coin");
const about_page: AboutPage = new AboutPage("About");

// jQuery entry point. The page is ready for rendering.
$((): void => {
  set_paths();
  set_nav_bar_on_load();
  show_page(); // Show the page
});

const set_nav_bar_on_load = (): void => {
  update_path_vars();

  if (index_page === "/" || index_page === "/portfolio") {
    $("[data-indicator]").css("--position", "0");
    $("#portfolio").addClass("active");
  } else if (index_page === "/coins") {
    $("[data-indicator]").css("--position", "1");
    $("#coins").addClass("active");
  } else if (index_page === "/about") {
    $("[data-indicator]").css("--position", "2");
    $("#about").addClass("active");
  }
};

// Function to see what what we are on and set the variables appropriately

const set_paths = (): void => {
  index_path = document.location.pathname.replace(
    /about|coins|portfolio/gi,
    ""
  );
  index_path += index_path.endsWith("/") ? "" : "/";
};

window.set_page_from_link = (page: string): void => {
  update_path_vars();

  // The user clicked the link for the current page, don't do anything!
  if (page === index_page || (page === "/portfolio" && index_page === "/"))
    return;

  // Push the history state to the browser so the back button works
  const sub_url = page.replace(/\//gi, "");

  window.history.pushState(
    { path: index_path + sub_url },
    page,
    index_path + sub_url
  );

  show_page();
};

// Render the correct page

const show_page = () => {
  update_path_vars();
  switch (index_page) {
    case "/about":
      about_page.set_active();
      break;
    case "/coins":
      coin_page.set_active();
      break;
    default:
      portfolio_page.set_active();
      break;
  }
};

const update_path_vars = (): void => {
  index_page = "/" + document.location.pathname.replace(index_path, "");
};
