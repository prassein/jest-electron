/**
 * delay ms use promise
 * @param ms
 */
export const delay = (ms = 200): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  })
};
