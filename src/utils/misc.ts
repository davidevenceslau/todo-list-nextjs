function wait(milliseconds: number = 3000) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export const misc = {
  wait,
};
