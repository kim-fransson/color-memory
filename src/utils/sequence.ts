export const generateSequence = (level: number): Color[] => {
  const colors: Color[] = ["red", "green", "blue", "yellow"];
  const sequence: Color[] = [];

  for (let i = 0; i < level; i++) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    sequence.push(colors[randomIndex]);
  }

  return sequence;
};

export const calculateSpeed = (
  level: number,
  baseSpeed: number = 1000,
  decreaseFactor: number = 0.9,
  minSpeed: number = 200,
  adjustmentLevel: number = 5,
): number => {
  if (level <= adjustmentLevel) {
    return baseSpeed;
  } else {
    const newSpeed =
      baseSpeed * Math.pow(decreaseFactor, level - adjustmentLevel);

    return Math.max(newSpeed, minSpeed);
  }
};
