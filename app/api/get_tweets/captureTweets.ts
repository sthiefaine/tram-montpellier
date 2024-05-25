import puppeteer, { KnownDevices } from "puppeteer-core";
import chromium from "@sparticuz/chromium-min";
import { Tweet } from "./types";
import fs from "fs";
import { NextResponse } from "next/server";

// 本地 Chrome 执行包路径
const localExecutablePath =
  process.platform === "win32"
    ? "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
    : process.platform === "linux"
    ? "/usr/bin/google-chrome"
    : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

// 远程执行包
const remoteExecutablePath =
  "https://github.com/Sparticuz/chromium/releases/download/v119.0.2/chromium-v119.0.2-pack.tar";

// 运行环境
const isDev = process.env.NODE_ENV === "development";

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
      await sleep(500);

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
//x.com/i/flow/login

// fetch userX tweets

const headless = false;
const deviceName = "iPhone 11 Pro Max";
const device = KnownDevices[deviceName];
const expandShortlinks = false;
let browser: any = null;
if (!process.env.TARGET_USER_NAME) {
  throw new Error("Provide a target name");
}

const mockURL = false;
const cookiesPath = "cookies.txt";

export const getLastTweet = async () => {
  browser = await puppeteer.launch({
    args: isDev ? [] : chromium.args,
    defaultViewport: { width: 1920, height: 1080 },
    executablePath: isDev
      ? localExecutablePath
      : await chromium.executablePath(remoteExecutablePath),
    headless: isDev ? false : chromium.headless,
  });

  // Initialize puppeteer
  console.log("initializing puppeteer");
  var page = await browser.newPage();
  const userAgent =
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/125.0.6422.80 Mobile/15E148 Safari/604.1";
  await page.setUserAgent(userAgent);
  await page.emulate(device);

  const login = async () => {
    console.log("logging in");
    // Select Input

    await page.waitForNetworkIdle({ idleTime: 1500 });
    ///////////////////////////////////////////////////////////////////////////////////
    // Select the user input
    await page.waitForSelector("[autocomplete=username]");
    await page.type("input[autocomplete=username]", process.env.USER_EMAIL, {
      delay: 50,
    });
    // Press the Next button
    await page.evaluate(() =>
      (document.querySelector("button:nth-child(6)") as HTMLElement).click()
    );
    console.log("USERNAME NEXT BUTTON CLICKED");

    await page.waitForTimeout(500);
    ///////////////////////////////////////////////////////////////////////////////////
    // Sometimes twitter suspect suspicious activties, so it ask for your handle/phone Number
    console.log("TRY TO FIND USERNAME INPUT");
    const extractedText = await page.$eval("*", (el: any) => el.innerText);
    if (
      extractedText.includes("username") ||
      extractedText.includes("utilisateur")
    ) {
      console.log('FORM WITH "USERNAME" FOUND');
      await page.waitForSelector("[autocomplete=on]");
      await page.type("input[autocomplete=on]", process.env.USER_HANDLE, {
        delay: 50,
      });
      await page.keyboard.press("Enter");

      await page.waitForTimeout(1000);
    }
    console.log('FORM WITH "USERNAME" NOT FOUND');
    console.log("TRY TO FIND PASSWORD");

    ///////////////////////////////////////////////////////////////////////////////////
    // Select the password input
    console.log("TRY TO FIND PASSWORD INPUT");
    await page.waitForSelector('[autocomplete="current-password"]');
    await page.type(
      '[autocomplete="current-password"]',
      process.env.USER_PASSWORD,
      { delay: 500 }
    );
    // Press the Login button
    await page.keyboard.press("Enter");
    console.log("PASSWORD ENTERED");

    console.log("WAITING FOR NETWORK IDLE");
    await page.waitForTimeout(1500);
    console.log("NETWORK IDLE DONE");
    /*     try {
      const secureStep = await page.$(
        'input[data-testid="ocfEnterTextTextInput"]'
      );

      if (secureStep) {
        console.log("Element SECURE found!");
        await page.type(
          'input[data-testid="ocfEnterTextTextInput"]',
          process.env.PHONE_NUMBER as string,
          {
            delay: 50,
          }
        );
        await page.evaluate(() =>
          (
            document.querySelector(
              'button[data-testid="ocfEnterTextNextButton"]'
            ) as HTMLElement
          ).click()
        );
      } else {
        console.log("Element SECURE not found, continuing...");
      }
    } catch (error) {
      console.log("Error during secure step:", error);
    } */

    const currentUrl = page.url();
    console.log("currentUrl", currentUrl);
    if (currentUrl.includes("https://x.com/home")) {
      if (isDev) {
        const cookiesObject = await page.cookies();
        await fs.writeFile(
          cookiesPath,
          JSON.stringify(cookiesObject),

          function (err) {
            if (err) {
              console.log("The file could not be written.", err);
            }
            console.log("Session has been successfully saved");
          }
        );
      }
      console.log("CONNECTION DONE");
      if (!currentUrl.includes(process.env.TARGET_USER_NAME as string)) {
        return await goToTwitterProfilOfUser();
      }
      const tweets = await page.evaluate(captureTweets);
      return tweets;
    }
  };

  const goTologin = async () => {
    console.log("going to login");
    await page.goto(urlLogin);
    await page.waitForNetworkIdle({ idleTime: 1000 });
    return await login();
  };

  const goToTwitterProfilOfUser = async () => {
    const url = `${url_x}${process.env.TARGET_USER_NAME as string}`;
    console.log(`capturing tweets from ${url}`);
    await page.goto(mockURL || url, { waitUntil: "networkidle2" });
    await page.waitForTimeout(1500);
    try {
      // Check if the login button exists
      console.log("Checking for login button on profil page");
      const loginButton = await page.$('a[data-testid="login"]');
      if (loginButton) {
        console.log("Login button found, performing login");
        await page.evaluate(() =>
          (
            document.querySelector('a[data-testid="login"]') as HTMLElement
          ).click()
        );
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
  const previousSession = isDev ? await fs.existsSync(cookiesPath) : false;

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
    return await goTologin();
  }
};
