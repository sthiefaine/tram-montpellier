import puppeteer, { KnownDevices } from "puppeteer";
import { Tweet } from "./types";
import fs from "fs";

export const captureTweets = async (maxScrollCount = 2) => {
  console.log("capturing tweets");
  // A sleep utility function.
  const sleep = async (durationMillseconds: number) => {
    await new Promise((resolve) => {
      setTimeout(resolve, durationMillseconds);
    });
  };

  const tweet2json = (tweetEl: HTMLElement): Tweet | null => {
    if (!tweetEl) {
      throw new Error("tweetEl is undefined");
    }

    const tweet: Tweet = {
      time: "",
      permalink: "",
      textContent: "",
      links: [],
    };

    // Extract tweet URL
    const href =
      tweetEl.querySelector('a[href*="/status/"]')?.getAttribute("href") ?? "";
    tweet.permalink = `https://twitter.com${href}`;

    // Extract tweet timestamp
    tweet.time = tweetEl.querySelector("time")?.getAttribute("datetime") ?? "";

    // Extract tweet text
    const articleEl = tweetEl.querySelector("article div[lang]");
    tweet.textContent = articleEl?.textContent?.trim() ?? "";

    // Extract links embedded in tweet text
    if (!articleEl) {
      return null;
    }

    Array.from(articleEl.querySelectorAll('a[role="link"]')).forEach(
      (linkEl) => {
        const link = {
          href: linkEl.getAttribute("href") ?? "",
          textContent: linkEl.textContent ?? "",
        };

        if (/^\//.test(link.href)) {
          link.href = `https://twitter.com${link.href}`;
        }

        tweet.links.push(link);
      }
    );

    return tweet;
  };

  try {
    console.log("capturing tweets TRY");
    const tweets: (Tweet | null)[] = [];
    let scrollCount = 0;
    let previousHeight = 0;
    let currentHeight = document.scrollingElement?.scrollHeight ?? 0;

    while (scrollCount < maxScrollCount && previousHeight < currentHeight) {
      console.log("capturing tweets WHILE");
      // Scroll bookkeeping
      previousHeight = document.scrollingElement?.scrollHeight ?? 0;

      // Get tweet elements from the DOM
      const tweetElements = document.querySelectorAll('[data-testid="tweet"]');

      // Transform tweet elements to some useful JSON
      const tweetArray = Array.from(tweetElements);
      for (const el of tweetArray) {
        try {
          if (el instanceof HTMLElement) {
            const tweet = tweet2json(el);
            console.log(tweet);
            tweets.push(tweet);
          }
        } catch (error) {
          console.error(error);
          // Don't re-throw. Just keep going.
        }
      }

      // Scroll some more...
      window.scrollBy(0, window.innerHeight);

      // Wait a bit for new stuff to load
      await sleep(5000);

      // More scroll bookkeeping
      currentHeight = document.scrollingElement?.scrollHeight ?? 0;
      scrollCount += 1;
    }

    return tweets;
  } catch (error) {
    console.error(error);
    return [{ error: "An error occurred" }];
  }
};

const urlLogin = "https://x.com/i/flow/login";
const url_twitter = "https://twitter.com/";
const url_x = "https://x.com/";

// fetch userX tweets

const headless = false;
const deviceName = "iPhone 11 Pro Max";
const device = KnownDevices[deviceName];
const expandShortlinks = false;

if (!process.env.TARGET_USER_NAME) {
  throw new Error("Provide a target name");
}

const mockURL = false;
const cookiesPath = "cookies.txt";

export const getLastTweet = async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  // Initialize puppeteer
  console.log("initializing puppeteer");
  var page = await browser.newPage();
  const userAgent =
    "Mozilla/5.0 (X11; Linux x86_64)" +
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36";
  await page.setUserAgent(userAgent);
  // await page.emulate(device);

  const login = async () => {
    // Select Input
    await page.waitForSelector("[autocomplete=username]");
    await page.type(
      "input[autocomplete=username]",
      process.env.USER_EMAIL as string,
      { delay: 150 }
    );

    // press the button to go to the next page
    try {
      await page.waitForSelector("button:nth-child(6)", { timeout: 1000 });
    } catch (error) {
      console.error("Selector not found: ", error);
      return {
        status: 500,
        body: JSON.stringify({ error: "Selector not found" }),
      };
    }

    await page.evaluate(() =>
      (document.querySelector("button:nth-child(6)") as HTMLElement).click()
    );
    await page.waitForNetworkIdle({ idleTime: 1000 });

    // Sometimes twitter suspect suspicious activties, so it ask for your handle/phone Number
    const extractedText = await page.$eval("*", (el: any) => el?.innerText);
    if (
      extractedText.includes("Enter your phone number or username") ||
      extractedText.includes("Numéro de téléphone ou nom d'utilisateur")
    ) {
      await page.waitForSelector("[autocomplete=on]");
      await page.type(
        "input[autocomplete=on]",
        process.env.USER_HANDLE as string,
        { delay: 50 }
      );

      try {
        await page.waitForSelector(
          'button[data-testid="ocfEnterTextNextButton"]',
          { timeout: 1000 }
        );
      } catch (error) {
        console.error("Selector not found: ", error);
        return {
          status: 500,
          body: JSON.stringify({ error: "Selector not found" }),
        };
      }

      await page.evaluate(() =>
        (
          document.querySelector(
            'button[data-testid="ocfEnterTextNextButton"]'
          ) as HTMLElement
        ).click()
      );
      await page.waitForNetworkIdle({ idleTime: 1500 });
    }

    // Select the password input
    await page.waitForSelector('[autocomplete="current-password"]');
    await page.type(
      '[autocomplete="current-password"]',
      process.env.USER_PASSWORD as string,
      {
        delay: 50,
      }
    );
    // Press the Login button
    // LoginForm_Login_Button

    try {
      await page.waitForSelector(
        'button[data-testid="LoginForm_Login_Button"]',
        {
          timeout: 1000,
        }
      );
    } catch (error) {
      console.error("Selector not found: ", error);
      return {
        status: 500,
        body: JSON.stringify({ error: "Selector not found" }),
      };
    }

    await page.evaluate(() =>
      (
        document.querySelector(
          'button[data-testid="LoginForm_Login_Button"]'
        ) as HTMLElement
      ).click()
    );
    await page.waitForNetworkIdle({ idleTime: 1000 });

    page.on("response", async (response) => {
      const status = response.status();
      if (status >= 300 && status <= 399) {
        const cookiesObject = await page.cookies();
        fs.writeFile(
          cookiesPath,
          JSON.stringify(cookiesObject),

          function (err) {
            if (err) {
              console.log("The file could not be written.", err);
            }
            console.log("Session has been successfully saved");
          }
        );
        console.log("CONNECTION DONE");
        const currentUrl = page.url();
        if (!currentUrl.includes(process.env.TARGET_USER_NAME as string)) {
          return await goToTwitterProfilOfUser();
        }
        const tweets = await page.evaluate(captureTweets);
        return tweets;
      }
    });
  };

  const goTologin = async () => {
    await page.goto(urlLogin);
    await page.waitForNetworkIdle({ idleTime: 500 });
    await login();
  };

  const goToTwitterProfilOfUser = async () => {
    const url = `${url_x}${process.env.TARGET_USER_NAME as string}`;
    console.log(`capturing tweets from ${url}`);
    await page.goto(mockURL || url, { waitUntil: "networkidle2" });
    await page.waitForNetworkIdle({ idleTime: 1000 });
    try {
      // Check if the login button exists
      const loginButton = await page.$('a[data-testid="login"]');
      if (loginButton) {
        console.log("Login button found, performing login");
        await page.evaluate(() =>
          (
            document.querySelector('a[data-testid="login"]') as HTMLElement
          ).click()
        );
        await page.waitForNetworkIdle({ idleTime: 500 });
        await login();
      } else {
        console.log("Login button not found, proceeding to capture tweets");
      }
    } catch (error) {
      console.log("Error during login check:", error);
    }

    // await page.evaluate(scrollAndCaptureTweets)
    // TODO throw an error for 4xx response codes

    const tweets = await page.evaluate(captureTweets);

    console.log(`got ${tweets?.length} tweets`);

    // Close puppeteer
    await browser.close();

    // Expand t.co short links.
    /*   if (expandShortlinks) {
      console.log("expanding shortlinks");
      for (const tweet of tweets) {
        if (!tweet || "error" in tweet) {
          continue;
        }
        for (const link of tweet.links) {
          try {
            link.href = await tall(link.href);
          } catch (error) {
            // Nothing
          }
        }
      }
    } */

    return tweets;
  };
  await page.waitForNetworkIdle({ idleTime: 1500 });
  const previousSession = await fs.existsSync(cookiesPath);

  if (previousSession) {
    const content = await fs.readFileSync(cookiesPath);
    const cookiesArr = await JSON.parse(content as unknown as string);
    if (cookiesArr.length !== 0) {
      for (let cookie of cookiesArr) {
        await page.setCookie(cookie);
      }
      console.log("Session has been loaded in the browser");
    }

    const newTweets = await goToTwitterProfilOfUser();

    return newTweets;
  } else {
    console.log("No previous session found");
    await goTologin();
  }
};
