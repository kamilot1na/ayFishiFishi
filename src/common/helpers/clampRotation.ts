export const clampRotation = (current: number) => {
  let result = current;

  while (Math.abs(result) > Math.PI * 2) {
    if (current < 0) result += Math.PI * 2;
    else result -= Math.PI * 2;
  }

  return result;
};
