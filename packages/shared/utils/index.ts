export const foo = 2;
export const sum = (a: number, b: number) => a + b;
export const fibonacci = (n: number): number => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
