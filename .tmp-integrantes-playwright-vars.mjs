import { chromium } from "@playwright/test";
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto("http://127.0.0.1:3000/#integrantes", { waitUntil: "networkidle" });
await page.waitForSelector("#integrantes", { timeout: 15000 });
const data = await page.evaluate(() => {
  const root = document.querySelector("#integrantes");
  const slides = Array.from(root.querySelectorAll(".will-change-transform")).slice(0,5);
  return slides.map((el, i) => {
    const cs = getComputedStyle(el);
    const rect = el.getBoundingClientRect();
    return {
      index: i,
      widthPx: `${rect.width.toFixed(2)}px`,
      transform: cs.transform,
      coverflowOffsetVar: cs.getPropertyValue("--coverflow-offset").trim() || null,
      coverflowScaleVar: cs.getPropertyValue("--coverflow-scale").trim() || null
    };
  });
});
console.log(JSON.stringify(data, null, 2));
await browser.close();
