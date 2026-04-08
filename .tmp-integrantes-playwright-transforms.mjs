import { chromium } from "@playwright/test";
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto("http://127.0.0.1:3000/#integrantes", { waitUntil: "networkidle" });
await page.waitForSelector("#integrantes", { timeout: 15000 });
const data = await page.evaluate(() => {
  const root = document.querySelector("#integrantes");
  const all = Array.from(root.querySelectorAll("*"));
  const transformed = all
    .map((el) => {
      const cs = getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      return {
        tag: el.tagName.toLowerCase(),
        className: el.className || "",
        width: rect.width,
        transform: cs.transform,
      };
    })
    .filter((x) => x.transform && x.transform !== "none")
    .slice(0, 20)
    .map((x) => ({ ...x, width: `${x.width.toFixed(2)}px` }));
  return transformed;
});
console.log(JSON.stringify(data, null, 2));
await browser.close();
