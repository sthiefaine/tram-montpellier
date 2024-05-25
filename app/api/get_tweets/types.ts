export interface Tweet {
  time: string;
  tweetId: string;
  permalink: string;
  textContent: string;
  links: { href: string; textContent: string }[];
}
