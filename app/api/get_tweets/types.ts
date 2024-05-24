export interface Tweet {
  time: string;
  permalink: string;
  textContent: string;
  links: { href: string; textContent: string }[];
}
