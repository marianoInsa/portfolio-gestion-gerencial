import { describe, expect, test } from "bun:test";
import {
  getCoverflowVisualState,
  getSignedLoopDistance,
  type CoverflowVisualState,
} from "./members-carousel-motion";

function assertStateRanges(state: CoverflowVisualState) {
  expect(state.scale).toBeGreaterThan(0);
  expect(state.scale).toBeLessThanOrEqual(1);
  expect(state.opacity).toBeGreaterThanOrEqual(0);
  expect(state.opacity).toBeLessThanOrEqual(1);
  expect(state.blurPx).toBeGreaterThanOrEqual(0);
}

describe("getSignedLoopDistance", () => {
  test("devuelve 0 cuando total <= 1", () => {
    expect(getSignedLoopDistance(0, 0, 1)).toBe(0);
  });

  test("elige ruta mas corta en loop", () => {
    expect(getSignedLoopDistance(0, 4, 5)).toBe(1);
    expect(getSignedLoopDistance(4, 0, 5)).toBe(-1);
  });
});

describe("getCoverflowVisualState - coverflow clasico", () => {
  test("slide activo tiene estado base", () => {
    const active = getCoverflowVisualState(0);

    expect(active.rotateYDeg).toBe(0);
    expect(active.scale).toBe(1);
    expect(active.opacity).toBe(1);
    expect(active.blurPx).toBe(0);
    assertStateRanges(active);
  });

  test("vecinos usan rotacion clasica de 45 grados y escala 0.9", () => {
    const left = getCoverflowVisualState(-1);
    const right = getCoverflowVisualState(1);

    expect(left.rotateYDeg).toBe(45);
    expect(right.rotateYDeg).toBe(-45);
    expect(left.scale).toBe(0.9);
    expect(right.scale).toBe(0.9);
    expect(left.opacity).toBeLessThan(1);
    expect(right.opacity).toBeLessThan(1);
    assertStateRanges(left);
    assertStateRanges(right);
  });

  test("simetria: vecinos son espejo en translateX y rotacion", () => {
    const left = getCoverflowVisualState(-1);
    const right = getCoverflowVisualState(1);

    expect(left.translateXPercent).toBe(-right.translateXPercent);
    expect(left.rotateYDeg).toBe(-right.rotateYDeg);
  });

  test("jerarquia visual: activo por encima de vecinos y lejanos", () => {
    const active = getCoverflowVisualState(0);
    const near = getCoverflowVisualState(1);
    const far = getCoverflowVisualState(2);

    expect(active.zIndex).toBeGreaterThan(near.zIndex);
    expect(near.zIndex).toBeGreaterThan(far.zIndex);
  });

  test("distancias mayores a 1 reducen presencia visual", () => {
    const near = getCoverflowVisualState(1);
    const far = getCoverflowVisualState(2);

    expect(far.opacity).toBeLessThan(near.opacity);
    expect(far.scale).toBeLessThan(near.scale);
    expect(far.blurPx).toBeGreaterThanOrEqual(near.blurPx);
  });
});
