export type CoverflowVisualState = {
  translateXPercent: number;
  rotateYDeg: number;
  scale: number;
  opacity: number;
  blurPx: number;
  zIndex: number;
};

export function getSignedLoopDistance(
  index: number,
  selectedIndex: number,
  total: number
): number {
  if (total <= 1) return 0;

  const direct = index - selectedIndex;
  const wrapped = direct > 0 ? direct - total : direct + total;

  return Math.abs(direct) <= Math.abs(wrapped) ? direct : wrapped;
}

export function getCoverflowVisualState(distance: number): CoverflowVisualState {
  const absDistance = Math.abs(distance);

  if (absDistance === 0) {
    return {
      translateXPercent: 0,
      rotateYDeg: 0,
      scale: 1,
      opacity: 1,
      blurPx: 0,
      zIndex: 30,
    };
  }

  if (absDistance === 1) {
    const direction = Math.sign(distance);

    return {
      translateXPercent: direction,
      rotateYDeg: direction * -30,
      scale: 0.9,
      opacity: 0.82,
      blurPx: 1,
      zIndex: 20,
    };
  }

  const direction = Math.sign(distance);

  return {
    translateXPercent: direction * 30,
    rotateYDeg: direction * -50,
    scale: 0.78,
    opacity: 0.5,
    blurPx: 0.5,
    zIndex: 10,
  };
}
