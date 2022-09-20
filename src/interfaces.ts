export {};
declare global {
  interface Window {
    set_page_from_link(page: string): void;
    deleteCoin(uuid: string): void;
  }
}
