import { chromium } from "@playwright/test";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

await page.goto("http://127.0.0.1:3000/#integrantes", { waitUntil: "networkidle" });
await page.waitForSelector("#integrantes", { timeout: 15000 });

const result = await page.evaluate(() => {
  const root = document.querySelector("#integrantes");
  if (!root) return { error: "No se encontró #integrantes" };

  const selectors = [
    "[data-carousel-slide]",
    ".embla__slide",
    ".keen-slider__slide",
    "[class*='slide']"
  ];

  let slides = [];
  let selectorUsed = null;

  for (const sel of selectors) {
    const found = Array.from(root.querySelectorAll(sel));
      if (found.length >= 5) {
      slides = found;
      selectorUsed = sel;
      break;
    }
  }

  if (slides.length < 5) {
    const all = Array.from(root.querySelectorAll("*"));
    const grouped = new Map();

    for (const el of all) {
      const parent = el.parentElement;
      if (!parent) continue;
      const rect = el.getBoundingClientRect();
      if (rect.width < 120) continue;
      const key = parent;
      if (!grouped.has(key)) grouped.set(key, []);
      grouped.get(key).push(el);
    }

    let best = [];
    for (const arr of grouped.values()) {
      if (arr.length > best.length) best = arr;
    }

    if (best.length >= 5) {
      slides = best;
      selectorUsed = "fallback-parent-group";
    }
  }

  const firstFive = slides.slice(0, 5).map((el, idx) => {
    const rect = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    return {
      index: idx,
      widthPx: `${rect.width.toFixed(2)}px`,
      transform: cs.transform,
      className: el.className || ""
    };
  });

  return {
    selectorUsed,
    totalSlidesDetected: slides.length,
    firstFive
  };
});

console.log(JSON.stringify(result, null, 2));
await browser.close();
